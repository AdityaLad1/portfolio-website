import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold">Aditya Lad</h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
