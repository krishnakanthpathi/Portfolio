import GlassSurface from "../GlassSurface"
import { Home, User, FolderGit2, Award , ContactIcon} from "lucide-react"
import { Link } from "react-router-dom"; // Import Link

// --- Sidenav Component ---
const Sidenav = () => {
  // Updated navItems to use 'to' prop for routing
  const navItems = [
    { to: "/", icon: <Home className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { to: "/about", icon: <User className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { to: "/achievements", icon: <Award className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> }, // Changed from #bio to /achievements
    { to: "/projects", icon: <FolderGit2 className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> },
    { to: "#contact", icon: <ContactIcon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" /> }, // Left as #contact, or change to '/contact' if you create a route
  ];

  return (
    <>
      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-10 h-auto z-10">
        <GlassSurface width={80} height={"auto"} borderRadius={24}>
          <div className="flex flex-col items-center justify-center h-full text-white p-4 space-y-4">
            {navItems.map((item, index) => (
              // Change <a> to <Link> and href to to
              <Link key={index} to={item.to} className="group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                <div className="w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </GlassSurface>
      </div>
    </>
  );
};

export default Sidenav;