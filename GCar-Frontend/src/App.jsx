import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from '../Components/Card/Card'
import VideoStream from '../Components/VideoStream/VideoStream'
import FrameDiagnostic from '../Components/FrameDiagnostic/FrameDiagnostic'
import { delay, motion } from 'framer-motion'

function App() {

  return (
    <div className="MainCont">
      <div className="FirstRow">
        <FrameDiagnostic id="FrameDiagnostic"/>
          <Card id="IMUInfo" title={"IMU Information"} index={1}/>
        <VideoStream id="VideoStream"/>
      </div>
      <div className="SecondRow">
        <Card id="CurrentInstructions" title={"Current Instructions"} index={2}/>
        <Card id="Controls" title={"Controls"} index={3}/>
        <Card id="DataStream" title={"Data Stream"} index={4}/>
      </div>
    </div>
  )

}

export default App
