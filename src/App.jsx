import Sidenav from "./components/Navbars/Sidenav"
import Hero from "./components/Hero"
import LiquidChrome from "./components/LiquidChrome"
import Topnav from "./components/Navbars/Topnav"
import LetterGlitch from "./components/LetterGlitch"
import About from "./components/About"
import Projects from "./components/Projects"
import Bio from "./components/Bio"

function App() {
  return (
    <>
      <div className="h-screen fixed w-screen -z-10">
        <LiquidChrome />
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}
      </div>
        <Topnav />
        <Sidenav />
        <Hero />
        <Bio />
        <Projects />

        {/* <About /> */}
      
      
    </>
  )
}

export default App
