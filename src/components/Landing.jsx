import { Github, Linkedin, Mail } from "lucide-react";

const Landing = () => {
    return (<>
    <div id="home" className="hero-container pt-30 w-full h-full flex items-center justify-center">
      <div className="hero-content w-[95%] sm:w-4/5 md:w-3/4 h-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10 py-8">


        {/* NAME & TITLE */}
        <h1 className="text-5xl font-extrabold mb-4 text-center">
          Hi, I'm <span className="text-black">Krishna Kanth</span>
        </h1>
        <h2 className="text-2xl font-medium mb-6 text-center">
          Full Stack Developer & Problem Solver
        </h2>

        {/* TAGLINE */}
        <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
          I build interactive web applications, write scalable code, 
          and solve real-world problems using modern technologies.
        </p>
        

        {/* SOCIAL ICONS */}
        <div className="flex space-x-8 mt-2">
          <a href="https://github.com/krishnakanthpathi" target="_blank">
            <Github size={32} className="hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/krishna-kanth-166b31252/" target="_blank">
            <Linkedin size={32} className="hover:text-gray-300" />
          </a>
          <a href="mailto:krishnakanthpathi@gmail.com">
            <Mail size={32} className="hover:text-gray-300" />
          </a>
        </div>
        </div>
    </div>
    </>);
}
 
export default Landing;