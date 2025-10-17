import { Award } from "lucide-react";

const AchievementsTimeline = () => {
  const achievementsData = [
    {
      date: "2023 - Present",
      title: "GDG Lead – Algorithms and Data Structures",
      organization: "Google Developer Group",
      description: "Organized workshops, weekly contests, and mentored peers as the GDG Lead for Algorithms & Data Structures.",
    },
    {
      date: "Ongoing",
      title: "LeetCode Achievements",
      organization: "LeetCode",
      description: "Solved over 1000 problems, ranked in the top 5% of contests, and earned the Knight badge.",
    },
    {
      date: "2023",
      title: "1st Prize – Crack the Jumble Code",
      organization: "Coding Competition",
      description: "Won first prize in the Crack the Jumble Code competition for strong problem-solving and creativity.",
    }
  ];

  return (
    <div className="hero-container pt-10 w-full h-full flex items-center justify-center">
    <div className="hero-content w-3/4 h-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white px-10 py-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            Achievements <span className="text-black"> & Awards</span>
        </h2>
    <div className="relative w-full mt-12">
      {/* The vertical line */}
      <div className="absolute left-1/2 w-0.5 h-full bg-white/30 transform -translate-x-1/2 hidden lg:block"></div>

      {achievementsData.map((item, index) => (
        <div key={index} className="relative mb-12 flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Timeline Item Content */}
          <div className={`w-full lg:w-5/12 p-4 bg-white/5 rounded-lg border border-white/10 ${index % 2 === 0 ? 'lg:order-1 lg:text-left' : 'lg:order-3 lg:text-right'}`}>
            <p className="font-semibold text-black bg-white/80 rounded-full px-3 py-1 inline-block mb-3 text-sm">{item.date}</p>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <h4 className="text-md font-medium text-gray-300 mb-2">{item.organization}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
          </div>

          {/* The circle on the timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 lg:order-2 hidden lg:block">
             <div className="bg-black w-8 h-8 rounded-full border-4 border-white/50 flex items-center justify-center">
              <Award size={16} className="text-white"/>
             </div>
          </div>

          {/* Spacer div */}
          <div className={`hidden lg:block lg:w-5/l2 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}></div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default AchievementsTimeline;

