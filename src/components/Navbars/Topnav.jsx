import React from "react";
import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Mail } from "lucide-react"

const Topnav = () => {

return (
    <>
        <div className="fixed top-5 w-full flex flex-row items-center justify-around z-10">
            <GlassSurface
             width={1000} height={70} borderRadius={24} displace={0}>
                {/* 
                home
                profile
                skills
                projects
                achievements
                contact */}
                <div className="flex flex-row w-full items-center justify-between px-10 h-full">
                    <div className="avatar  w-15 h-15 rounded-full overflow-hidden ">
                    <img src="public/vite.svg" alt="Avatar" />
                </div>

                <div className="flex flex-row items-center justify-evenly h-full text-white space-x-10">
                    <div className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                            <Home className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                    </div>

                    <div className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                            <User className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                    </div>

                    <div className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                            <FolderGit2 className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                    </div>

                   
                    <div className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                            <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                        </div>
                    </div>
                </div>
                </div>
                
                
            </GlassSurface>
        </div>
    </>
)}


export default Topnav;