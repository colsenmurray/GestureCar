import { useState, useEffect, createContext} from 'react'
import viteLogo from '/vite.svg'
import './App.scss'
import VideoStream from '../Components/VideoStream/VideoStream'
import FrameDiagnostic from '../Components/FrameDiagnostic/FrameDiagnostic'
import { delay, motion } from 'framer-motion'
import Controls from '../Components/Card/Controls/Controls'
import IMUInfo from '../Components/Card/IMUInfo/IMUInfo'
import DataStream from '../Components/Card/DataStream/DataStream'
import Instruction from '../Components/Card/Instruction/Instruction'
import socketService from '../Utils/Api.js'

export const rawIncomingDataContext = createContext();
export const rawOutgoingDataContext = createContext();


function App() {
  const [rawIncomingData, setRawIncomingData] = useState(null);
  const [rawOutgoingData, setRawOutgoingData] = useState(null);

  useEffect(() => {
    socketService.connect();

    socketService.on("IncomingDataPacket", (data) => {
      console.log("Received data packet: ", data);
      setRawIncomingData(data);
    });

    
    return () =>{
      socketService.disconnect();
    }
  }, []);

  useEffect(() =>{
    socketService.emit("OutgoingDataPacket", rawOutgoingData);
    console.log("Sent data packet: ", rawOutgoingData);
  }, [rawOutgoingData]);
  
  return (
    <rawIncomingDataContext.Provider value={rawIncomingData}>
      <rawOutgoingDataContext.Provider value={{rawOutgoingData, setRawOutgoingData}}>
        <div className="MainCont">
          <div className="FirstColumn">
            <div className="FrameDataCont">
              <FrameDiagnostic id="FrameDiagnostic"/>
              <DataStream id="DataStream"/>
            </div>
            <IMUInfo id="IMUInfo"/>

          </div>
          <div className="SecondColumn">
            <VideoStream id="VideoStream"/>
            <div className="InstructControlsCont">          
              <Instruction id="Instruction" />
              <Controls id="Controls"/>
            </div>
          </div>
        </div>
      </rawOutgoingDataContext.Provider>
    </rawIncomingDataContext.Provider>

  )

}

export default App
