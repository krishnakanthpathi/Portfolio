import { Routes, Route } from 'react-router-dom' 

import Sidenav from "./components/Navbars/Sidenav"
import Topnav from "./components/Navbars/Topnav"
import Galaxy from "./components/Backgrounds/Galaxy"
import Landing from "./components/Landing" 
import About from "./components/About/About"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import LiquidChrome from './components/Backgrounds/LiquidChrome'
import Ballpit from './components/Backgrounds/Ballpit'

function App() {
  return (
    <>
      {/* Background and Navbars are persistent */}
      <div className="h-screen fixed w-screen -z-10">
        <Galaxy />
        {/* <LiquidChrome /> */}
        {/* <Ballpit
          count={50}
          gravity={0.3}
          friction={0.99}
          wallBounce={0.95}
          followCursor={true}
          colors={[0x00aaff, 0xff00ff, 0xffffff , 0xffaa00, 0x00ffaa]}
          minSize={0.5}
          maxSize={1.2}
        /> */}
      </div>

      <Topnav />
      <Sidenav />

      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </>
  )
}

export default App