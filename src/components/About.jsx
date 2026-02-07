import React from "react";
import AboutImg from "../assets/nd.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center py-16 px-4 sm:px-6 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-72 h-40 sm:w-90 sm:h-160">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/40 via-green-400/30 to-orange-500/30 blur-xl" />

            {/* Image */}
            <img
              src={AboutImg}
              alt="About"
              className={`relative w-full h-full rounded-full object-cover border-4 shadow-xl ${
                darkMode ? "border-gray-800" : "border-white"
              }`}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            About <span className="text-green-500">Me</span>
          </h2>

          <p
            className={`mt-5 text-sm sm:text-base lg:text-lg leading-relaxed ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            I’m an Information Security student at SLIIT, focused on digital
            defense and incident response. I enjoy analyzing threats,
            strengthening systems, and learning security tools through hands-on
            practice. I’m a proactive learner and team player, aiming to join a
            SOC or security-focused internship where I can contribute and grow.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Education */}
            <div
              className={`rounded-2xl p-5 shadow-sm border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className="text-3xl font-bold text-green-500">2+</p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Years Education
              </p>
            </div>

            {/* Experience */}
            <div
              className={`rounded-2xl p-5 shadow-sm border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className="text-3xl font-bold text-green-500">0</p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Years Experience
              </p>
            </div>

            {/* Projects */}
            <div
              className={`rounded-2xl p-5 shadow-sm border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className="text-3xl font-bold text-green-500">4</p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Projects Completed
              </p>
            </div>

            {/* Certifications */}
            <div
              className={`rounded-2xl p-5 shadow-sm border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className="text-3xl font-bold text-green-500">10+</p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Certifications
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className={`px-6 py-3 rounded-xl font-semibold border transition ${
                darkMode
                  ? "border-white/15 hover:bg-white/5"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
