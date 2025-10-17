import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="w-full text-white ">
    <div className="hero-container pt-10 w-full h-full flex items-center justify-center">
      <div className="hero-content w-3/4 h-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white px-10 py-8">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        About <span className="text-black">Me</span>
      </h2>

      {/* CONTENT SECTION */}
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-16">

        {/* LEFT: ABOUT TEXT */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            I’m <span className="font-semibold text-white">Krishna Kanth Pathi</span>, 
            a passionate B.Tech student with strong knowledge in Data Structures, Algorithms, 
            and Web Development. I actively lead the Algorithms & Data Structures domain 
            for Google Developer Group (GDG).
          </p>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            I’ve solved over <span className="font-semibold text-black">1000 problems</span> 
            on LeetCode and love applying problem-solving to real-world development.
          </p>

          <p className="text-base sm:text-lg text-gray-200 font-semibold mt-4">
            Passionate Full Stack Developer
          </p>

          
        </div>

        {/* RIGHT: SKILLS COMPONENT */}
        <Skills />


      </div>

      {/* Footer Tagline */}
      <p className="text-center text-sm sm:text-lg text-gray-300 font-semibold mt-12">
        Skilled in Data Structures and Algorithms with 1000+ problems solved on LeetCode.
      </p>
        </div>
    </div>
    </section>
  );
};

export default About;
