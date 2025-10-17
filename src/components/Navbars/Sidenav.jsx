import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Mail, Contact } from "lucide-react"

const Sidenav = () => {
return (
    <>
      {/* - 'hidden': Hides the component by default (on small screens).
        - 'lg:block': Displays the component as a block element on large screens (1024px) and up.
      */}
      <div className="hidden lg:block fixed top-40 left-10 h-screen z-10">
        <GlassSurface width={80} height={500} borderRadius={24}>
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
                <Contact className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </>
  );
};

export default Sidenav;
