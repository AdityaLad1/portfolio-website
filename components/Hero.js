import React from 'react'

const Hero = () => {
  return (
    <div>
       <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-24 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Hi, I'm Aditya 👋
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Frontend / Full Stack Developer skilled in React, Next.js, Node.js and Tailwind CSS.
            I build responsive web apps and production-ready features.
            Actively seeking a junior developer role.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700"
              href="#contact"
            >
              Contact Me
            </a>

            <a
              className="px-6 py-3 rounded-xl border border-purple-500"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-purple-700/20 flex items-center justify-center text-6xl">
            🚀
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
