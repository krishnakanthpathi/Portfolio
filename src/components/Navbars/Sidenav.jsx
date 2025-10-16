import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Mail } from "lucide-react"

const Sidenav = () => {

return (
    <>
        <div className="fixed top-40 left-10 h-screen">
            <GlassSurface width={80} height={400} borderRadius={24}>
                {/* 
                home
                profile
                skills
                projects
                achievements
                contact */}
                

                <div className="flex flex-col items-center justify-evenly h-full text-white">
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
            </GlassSurface>
        </div>
    </>
)}

export default Sidenav