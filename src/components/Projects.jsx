import { FolderGit2, ExternalLink } from "lucide-react";
import { motion } from 'framer-motion'; // Import motion

// --- "SCALE & FADE" ANIMATION VARIANTS ---
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95, // Start slightly scaled down
  },
  in: {
    opacity: 1,
    scale: 1, // Animate to full scale
  },
  out: {
    opacity: 0,
    scale: 0.95, // Scale back down on exit
  },
};

// --- TRANSITION ---
const pageTransition = {
  type: "tween",
  ease: "easeIn",
  duration: 0.3,
};
// --- END ANIMATION ---

const ProjectsTimeline = () => {
  const projectsData = [
    {
      title: "Resume Fit Evaluation",
      description: "A backend project that evaluates how well a candidate’s resume aligns with a job description using NLP and machine learning.",
      tech: ["Python", "Flask", "scikit-learn", "NLP"],
      liveLink: "https://github.com/krishnakanthpathi/resume-fit-tracker",
      repoLink: "https://github.com/krishnakanthpathi/resume-fit-tracker",
    },
    {
      title: "Code Buddy",
      description: "A personal code companion to save, manage, and share code snippets or templates with explanations.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://github.com/krishnakanthpathi/CodeBuddy",
      repoLink: "https://github.com/krishnakanthpathi/CodeBuddy",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React.js with backend support for contact form submissions. Highlights skills, projects, and achievements.",
      tech: ["React.js", "Node.js", "Express"],
      liveLink: "https://github.com/krishnakanthpathi/react-portfolio",
      repoLink: "https://github.com/krishnakanthpathi/react-portfolio",
    },
    {
      title: "E-Commerce Mock API",
      description: "Frontend built using JavaScript, HTML, and CSS, integrating mock APIs to simulate product listings and cart functionality.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      liveLink: "httpss://github.com/krishnakanthpathi/svln",
      repoLink: "httpss://github.com/krishnakanthpathi/svln",
    }
  ];

  return (
  <motion.div 
    id="projects" 
    className="hero-container pt-30 w-full h-full flex items-center justify-center"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
<div className="hero-content w-[95%] sm:w-4/5 md:w-3/4 h-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10 py-8">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
      Projects 
    </h2>
    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((item, index) => (
        <div key={index} className="bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col hover:bg-white/10 transition-colors duration-300">
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-3">
                <FolderGit2 size={20} aria-hidden="true" />
                <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((tech, i) => (
                <span key={i} className="text-xs text-white bg-black/50 rounded-full px-2 py-1">{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <a
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${item.title}`}
              title={`Open live demo for ${item.title}`}
              className="text-sm flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              Live Demo <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a
              href={item.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${item.title}`}
              title={`Open GitHub repository  for ${item.title}`}
              className="text-sm flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              GitHub <FolderGit2 size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      ))}
    </div>

    </div>
    </motion.div>
  );
};

export default ProjectsTimeline;