import { useState, useEffect, createContext} from 'react'
import './App.scss'
import VideoStream from '../Components/VideoStream/VideoStream'
import FrameDiagnostic from '../Components/FrameDiagnostic/FrameDiagnostic'
import { delay, motion } from 'framer-motion'
import Controls from '../Components/Card/Controls/Controls'
import HowToUseCard from '../Components/Card/HowToUseCard/HowToUseCard'
import DataStream from '../Components/Card/DataStream/DataStream'
import Instruction from '../Components/Card/Instruction/Instruction'
import socketService from '../Utils/Api.js'

export const rawIncomingDataContext = createContext();
export const rawOutgoingDataContext = createContext();
export const connectedContext = createContext();


function App() {
  const [rawIncomingData, setRawIncomingData] = useState(null);
  const [rawOutgoingData, setRawOutgoingData] = useState(null);
  const [connected, setConnected] = useState(false);
  const [sliderData, setSliderData] = useState(rawOutgoingData);

  
  useEffect(() => {
    socketService.connect(setConnected);
    

    socketService.on('receive_data', (data) => {

      setRawIncomingData(data);
    });

    
    return () =>{
      socketService.disconnect();
      setConnected(false);
    }
  }, []);

  function toDisconnect(){
    socketService.disconnect();
    setConnected(false);
    setRawIncomingData(null)
  }

  function toConnect(){
    socketService.connect(setConnected);
    socketService.on('receive_data', (data) => {
      setRawIncomingData(data);
    });
  }


  useEffect(() =>{
    socketService.emit("OutgoingDataPacket", rawOutgoingData);
    console.log("Sent data packet: ", rawOutgoingData);
  }, [rawOutgoingData]);
  
  return (
    <rawIncomingDataContext.Provider value={rawIncomingData}>
      <rawOutgoingDataContext.Provider value={{rawOutgoingData, setRawOutgoingData}}>
        <connectedContext.Provider value={[connected, setConnected]}>
          <div className="MainCont">
            <div className="FirstColumn">
              <div className="FrameDataCont">
                <FrameDiagnostic id="FrameDiagnostic"/>
                <DataStream id="DataStream" toDisconnect={toDisconnect} toConnect={toConnect} sliderData={sliderData}/>
              </div>
              <HowToUseCard id="HowToUseCard"/>

            </div>
            <div className="SecondColumn">
              <VideoStream id="VideoStream"/>
              <div className="InstructControlsCont">          
                <Instruction id="Instruction" />
                <Controls id="Controls" setSliderData={setSliderData}/>
              </div>
            </div>
          </div>
        </connectedContext.Provider>
      </rawOutgoingDataContext.Provider>
    </rawIncomingDataContext.Provider>

  )

}

export default App
