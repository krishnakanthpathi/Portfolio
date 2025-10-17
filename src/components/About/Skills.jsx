import {
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skillsList = [
    { icon: <FaJava size={32} />, label: "Java" },
    { icon: <SiPython size={32} />, label: "Python" },
    { icon: <SiJavascript size={32} />, label: "JavaScript" },
    { icon: <SiReact size={32} />, label: "React" },
    { icon: <FaDatabase size={32} />, label: "SQL" },
    { icon: <SiGit size={32} />, label: "Git" },
    { icon: <SiBootstrap size={32} />, label: "Bootstrap" },
  ];

  return (
    // Add w-full here to ensure it takes up available space on small screens
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Skills <span className="text-black">& Tools</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
          >
            {skill.icon}
            <p className="mt-2 font-semibold text-sm sm:text-base">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;