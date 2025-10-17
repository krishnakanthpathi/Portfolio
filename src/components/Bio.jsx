import { User, GraduationCap, MapPin, Mail, Award } from "lucide-react";

const Bio = () => {
  const bioData = [
    { icon: <User size={28} />, label: "Full Name", value: "Krishna Kanth Pathi" },
    { icon: <GraduationCap size={28} />, label: "Education", value: "B.Tech in CSE" },
    { icon: <Mail size={28} />, label: "Email", value: "your.email@example.com" },
    { icon: <MapPin size={28} />, label: "Location", value: "India" },
    { icon: <Award size={28} />, label: "Achievements", value: "GDG A&D Lead, 1000+ LeetCode Problems" },
    { icon: <User size={28} />, label: "Experience", value: "2 Virtual Internships" },
  ];

  return (
    <section id="bio" className="w-full text-white py-16 px-6">
      <div className="hero-container w-full flex items-center justify-center">
        <div className="hero-content w-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center px-10 py-8">

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            Bio / <span className="text-black">Quick Info</span>
          </h2>

          {/* Bio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {bioData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition duration-300"
              >
                {item.icon}
                <h3 className="mt-2 font-semibold text-lg">{item.label}</h3>
                <p className="mt-1 text-gray-300 text-sm text-center">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;
