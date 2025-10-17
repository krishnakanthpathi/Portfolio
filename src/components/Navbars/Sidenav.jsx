import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Award , ContactIcon} from "lucide-react"



// --- Sidenav Component ---
const Sidenav = () => {
  const navItems = [
    { href: "#", icon: <Home className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { href: "#about", icon: <User className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { href: "#bio", icon: <Award className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { href: "#projects", icon: <FolderGit2 className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { href: "#contact", icon: <ContactIcon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
  ];

  return (
    <>
      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-10 h-auto z-10">
        <GlassSurface width={80} height={"auto"} borderRadius={24}>
          <div className="flex flex-col items-center justify-center h-full text-white p-4 space-y-4">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </GlassSurface>
      </div>
    </>
  );
};

export default Sidenav;

