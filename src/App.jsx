import Sidenav from "./components/Navbars/Sidenav"

import LiquidChrome from "./components/LiquidChrome"
import Topnav from "./components/Navbars/Topnav"
import LetterGlitch from "./components/LetterGlitch"

function App() {
  return (
    <>
      <div className="h-screen w-screen -z-10">
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
      
      
    </>
  )
}

export default App
