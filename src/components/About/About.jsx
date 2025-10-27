import Content from "./Content";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="w-full text-white mt-20">
    <div className="hero-container pt-10 w-full h-full flex items-center justify-center">
    <div className="hero-content w-[95%] sm:w-4/5 md:w-3/4 h-3/4 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10 py-8">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        About <span className="text-white">&lt;Me /&gt;</span>
      </h2>

      {/* CONTENT SECTION */}
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-16">

        {/* LEFT: ABOUT TEXT */}
        <Content/>

        {/* RIGHT: SKILLS COMPONENT */}
        <Skills />


      </div>
        <Education/>

      {/* Footer Tagline */}
      <p className="text-center pt-10 text-sm sm:text-lg text-gray-300 font-semibold mt-12">
        Skilled in Data Structures and Algorithms with 1000+ problems solved on LeetCode.
      </p>
        </div>
    </div>
    </section>
  );
};

export default About;