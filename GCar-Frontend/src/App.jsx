import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import VideoStream from '../Components/VideoStream/VideoStream'
import FrameDiagnostic from '../Components/FrameDiagnostic/FrameDiagnostic'
import { delay, motion } from 'framer-motion'
import Controls from '../Components/Card/Controls/Controls'
import IMUInfo from '../Components/Card/IMUInfo/IMUInfo'
import DataStream from '../Components/Card/DataStream/DataStream'
import Instruction from '../Components/Card/Instruction/Instruction'

function App() {

  return (
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
  )

}

export default App
