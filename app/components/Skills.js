const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "C", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "Kafka", "JWT"] },
  { category: "Cloud & Tools", items: ["GCP", "MySQL", "GitHub", "Power BI"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">
        Technical <span className="text-indigo-400">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wide">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
