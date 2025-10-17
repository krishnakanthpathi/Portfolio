import { FolderGit2, ExternalLink } from "lucide-react";

const Projects = () => {
  const projectData = [
    {
      title: "Project One",
      description: "A brief description of your first project. What it does, the technologies used, and your role.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of your second project. What it does, the technologies used, and your role.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of your third project. What it does, the technologies used, and your role.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="w-full text-white py-16 px-6">
      <div className="hero-container w-full flex items-center justify-center">
        <div className="hero-content w-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center px-10 py-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            My <span className="text-black">Projects</span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projectData.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col p-6 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <FolderGit2 size={40} />
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={24} className="hover:text-gray-300" />
                  </a>
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
