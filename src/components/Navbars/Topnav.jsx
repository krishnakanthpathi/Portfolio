import React from "react";
import { Link } from "react-router-dom"; // Import Link
import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Mail , Award } from "lucide-react"

// --- Topnav Component ---
const Topnav = () => {
  return (
    <>
      <div className="fixed top-5 w-full flex flex-row items-center justify-around z-10">
        <GlassSurface width={"90%"} height={70} borderRadius={24}>
          <div className="flex flex-row w-full items-center justify-between px-6 h-full">
            <div className="avatar w-12 h-12 rounded-full overflow-hidden">
              <img src="/vite.svg" alt="Avatar" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-row items-center justify-evenly h-full text-white space-x-1 sm:space-x-2">
              {/* Change <a> to <Link> and href to to */}
              <Link to="/" className="group w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <Home className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </Link>
              <Link to="/about" className="group w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <User className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </Link>
               <Link to="/achievements" className="group w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </Link>
              <Link to="/projects" className="group w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <FolderGit2 className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </Link>
              
            </div>
          </div>
        </GlassSurface>
      </div>
    </>
  );
};

export default Topnav;