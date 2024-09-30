import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from '../Components/Card/Card'
import VideoStream from '../Components/VideoStream/VideoStream'
import FrameDiagnostic from '../Components/FrameDiagnostic/FrameDiagnostic'

function App() {

  return (
    <div className="MainCont">
      <div className="FirstRow">
        <FrameDiagnostic id="FrameDiagnostic"/>
        <Card id="IMUInfo" title={"IMU Information"}/>
        <VideoStream id="VideoStream"/>
      </div>
      <div className="SecondRow">
        <Card id="CurrentInstructions" title={"Current Instructions"}/>
        <Card id="Controls" title={"Controls"}/>
        <Card id="DataStream" title={"Data Stream"}/>
      </div>
    </div>
  )
}

export default App
