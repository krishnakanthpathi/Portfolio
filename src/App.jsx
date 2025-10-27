import { Routes, Route } from 'react-router-dom' 

import Sidenav from "./components/Navbars/Sidenav"
import Topnav from "./components/Navbars/Topnav"
import Galaxy from "./components/Galaxy"
import Landing from "./components/Landing" 
import About from "./components/About/About"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"

function App() {
  return (
    <>
      {/* Background and Navbars are persistent */}
      <div className="h-screen fixed w-screen -z-10">
        <Galaxy />
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