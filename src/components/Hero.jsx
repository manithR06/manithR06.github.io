import { useEffect, useState } from "react";
import jss from "../assets/jss.jpeg";

const Hero = ({ darkMode }) => {
  const fullText =
    "An undergraduate pursuing a BSc (Hons) in Information Technology specializing in Cybersecurity at SLIIT. Driven by a strong passion for problem-solving, threat analysis, and ethical hacking. Eager to apply my skills to secure digital infrastructures and contribute to innovative security projects.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timer;

    const type = () => {
      setTypedText(fullText.slice(0, i + 1));
      i += 1;
      if (i < fullText.length) timer = setTimeout(type, 30);
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/maniths___/", // <-- put your link
      viewBox: "0 0 448 512",
      path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    },
    {
      name: "GitHub",
      href: "https://github.com/manithR06", // <-- put your link
      viewBox: "0 0 496 512",
      path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-5.9-.2-21.8-.2-42-68 9.3-81.8-33-81.8-33-11.7-29.6-28.5-37.5-28.5-37.5-22.1-15 1.7-14.8 1.7-14.8 24.4 1.7 37.2 25.1 37.2 25.1 21.7 37.2 57.6 26.5 71.5 20.2 2.2-15.7 8.5-26.5 15.4-32.6-53.6-6.1-110-26.8-110-118.4 0-26.1 9.3-47.5 24.6-64.3-2.5-6-10.7-30.4 2.3-63.4 0 0 20.1-6.4 65.9 24.6 19.1-5.3 39.6-8 60-8s40.9 2.7 60 8c45.8-31 65.8-24.6 65.8-24.6 13 32.9 4.9 57.4 2.4 63.4 15.4 16.8 24.6 38.2 24.6 64.3 0 91.7-56.6 112.3-110.5 118.4 8.7 7.5 16.5 22 16.5 44.3 0 32-.3 57.8-.3 65.6 0 6.6 4.6 14.6 17.4 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manith-banula/", // <-- put your link
      viewBox: "0 0 448 512",
      path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    },
  ];

  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-screen ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Subtle background */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_55%)]"
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-14 py-24 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className={`p-3 rounded-xl border transition hover:scale-105 ${
                    darkMode
                      ? "border-white/10 hover:bg-white/5"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    viewBox={s.viewBox}
                    className={`w-6 h-6 ${
                      darkMode ? "fill-green-400" : "fill-green-700"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <p
              className={`inline-flex px-4 py-2 rounded-full text-sm border ${
                darkMode
                  ? "border-white/10 bg-white/5 text-gray-200"
                  : "border-gray-200 bg-gray-50 text-gray-700"
              }`}
            >
              Cybersecurity Undergraduate • SLIIT
            </p>

            <h1 className="mt-5 font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              Hi, I’m <span className="text-green-500">Manith Ranasinghe</span>
            </h1>

            <p
              className={`mt-5 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {typedText}
              <span className="animate-pulse text-green-500 font-bold">|</span>
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="/MANITH RANASINGHE CV.pdf" download>
                <button
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold border transition ${
                    darkMode
                      ? "border-green-500 text-green-400 hover:bg-green-500/10"
                      : "border-green-600 text-green-700 hover:bg-green-50"
                  }`}
                >
                  Download CV
                </button>
              </a>

              <a href="#contact">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-md rounded-3xl overflow-hidden border shadow-lg ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}
            >
              <img
                src={jss}
                alt="Manith"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
