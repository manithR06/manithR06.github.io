import { ExternalLink, Github } from "lucide-react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "SOC Log Monitoring Dashboard",
      description:
        "A simulated Security Operations Center dashboard that analyzes system logs, detects suspicious activity, and visualizes alerts for incident response.",
      tech: ["Python", "SIEM", "Log Analysis"],
      github: "https://github.com/manithR06/SOC-log-monitoring-dashboard",
      demo: "#",
    },
    {
      title: "Phishing URL Detection Tool",
      description:
        "A rule-based phishing detection system that evaluates URLs to identify malicious patterns and prevent social engineering attacks.",
      tech: ["Python", "Cybersecurity", "Regex"],
      github: "#",
      demo: "#",
    },
    {
      title: "Secure Authentication System",
      description:
        "A secure login system implementing password hashing, input validation, and session handling to protect against common web attacks.",
      tech: ["Java", "Spring Boot", "Security"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-green-500">Projects</span>
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A selection of academic and personal projects focused on
            cybersecurity, secure systems, and problem-solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      darkMode
                        ? "border-green-500/30 text-green-400"
                        : "border-green-600/30 text-green-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-600 transition"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-600 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

