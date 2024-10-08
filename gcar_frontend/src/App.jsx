<<<<<<< HEAD:gcar_frontend/src/App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> 486c1b67e0bd7aabfa5fa9068a0925b4d6cad4fe:GCar-Frontend/src/App.jsx
