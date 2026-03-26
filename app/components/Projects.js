const projects = [
  {
    title: "Digital Voting System",
    description:
      "Secure backend with JWT authentication and RBAC. Built 8 RESTful API endpoints with full input validation achieving zero duplicate-vote incidents.",
    tech: ["Node.js", "MySQL", "JWT", "REST API"],
    github: "https://github.com/sakshi-1123/Digital-Voting-System",
  },
  {
    title: "Multi-Modal AI Health Diagnostics",
    description:
      "ML + NLP pipeline combining structured health data and text inputs with explainable AI and decision-support outputs.",
    tech: ["Python", "ML", "NLP"],
    github: "https://github.com/sakshi-1123/multi-model-AI-agent-health-diagniser",
  },
  {
    title: "Retail Sales Dashboard",
    description:
      "8 Power BI visual components segmenting sales by region, product category, and customer segment to surface actionable business insights.",
    tech: ["Power BI", "Data Visualisation"],
    github: "https://github.com/sakshi-1123/PowerBI-Retail-Sales-Analysis",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio — built with Next.js 14 App Router and Tailwind CSS, featuring responsive design and component-based architecture.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/sakshi-1123/Portfolio",
  },
  {
   title: "HairCareHub",
    description:
 "Designed a fully responsive frontend delivering personalized hair care recommendations based on user input. Built dynamic UI components for an intuitive, user-centric experience across device sizes.",   
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sakshi-1123/Hair-Care-Hub",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        Featured <span className="text-indigo-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500 transition-all duration-200"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-indigo-950 text-indigo-300 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
