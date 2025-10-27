import { GraduationCap } from "lucide-react";

const EducationTimeline = () => {
  const educationData = [
    {
      date: "2022 - 2026",
      degree: "Bachelor of Technology in CSE",
      institution: "Vellore Institute of Technology, AP",
      description: "Focusing on core computer science principles, with a special interest in algorithms, web development, and machine learning.",
      gpa: "CGPA: 9.0 (Expected)"
    },
    {
      date: "2020 - 2022",
      degree: "Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior College, India",
      description: "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.",
      gpa: "Percentage: 95%"
    },
    {
      date: "2020",
      degree: "High School Diploma",
      institution: "Narayana E.M High School, India",
      description: "Graduated with honors, establishing a solid academic base for future studies in technology.",
      gpa: "GPA: 10.0"
    }
  ];

  return (
    <div className="relative w-full mt-12">
      {/* title */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        Education <span className="text-white">&lt;Timeline /&gt;</span>
        </h2>

      {/* The vertical line */}
      <div className="absolute left-1/2 w-0.5 h-full bg-white/30 transform -translate-x-1/2 hidden lg:block"></div>

      {educationData.map((item, index) => (
        <div key={index} className="relative mb-12 flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Timeline Item Content - Alternating sides on large screens */}
          <div className={`w-full lg:w-5/12 p-4 bg-white/5 rounded-lg border border-white/10 ${index % 2 === 0 ? 'lg:order-1 lg:text-left' : 'lg:order-3 lg:text-right'}`}>
            <p className="font-semibold text-white bg-black/50 rounded-full px-3 py-1 inline-block mb-3 text-sm">{item.date}</p>
            <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
            <h4 className="text-md font-medium text-gray-300 mb-2">{item.institution}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            {item.gpa && <p className="mt-2 text-sm font-semibold text-gray-200">{item.gpa}</p>}
          </div>

          {/* The circle on the timeline (for large screens) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 lg:order-2 hidden lg:block">
             <div className="bg-black w-8 h-8 rounded-full border-4 border-white/50 flex items-center justify-center">
              <GraduationCap size={16} className="text-white"/>
             </div>
          </div>

          {/* Spacer div with alternating order */}
          <div className={`hidden lg:block lg:w-5/12 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}></div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;