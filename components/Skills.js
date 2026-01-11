import React from 'react'

const Skills = () => {
  return (
    <div>
      <section id="skills" className="px-10 py-20 bg-slate-900/60">
        <h3 className="text-3xl font-semibold mb-10">What I Do</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind",
            "MongoDB"
          ].map((skill) => (
            <div
              key={skill}
              className="p-5 rounded-xl bg-slate-800 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
