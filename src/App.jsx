import Sidenav from "./components/Navbars/Sidenav"
import Hero from "./components/Hero"
import LiquidChrome from "./components/LiquidChrome"
import Topnav from "./components/Navbars/Topnav"
import LetterGlitch from "./components/LetterGlitch"
import About from "./components/About/About"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Galaxy from "./components/Galaxy"

function App() {
  return (
    <>
      <div className="h-screen fixed w-screen -z-10">
        {/* <LiquidChrome /> */}
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}
        <Galaxy />
      </div>
        <Topnav />
        <Sidenav />
        <Hero />
        <About />
        <Projects />
        <Achievements />

        {/* <About /> */}
      
      
    </>
  )
}

export default App
