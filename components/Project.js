const Project = () => {
  return (
    <section id="projects" className="px-10 py-20">
      <h3 className="text-3xl font-semibold mb-10">Projects</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Patreon Clone"
          desc="Full-stack Next.js app with authentication and protected routes."
        />

        <ProjectCard
          title="Password Manager"
          desc="MERN stack password manager with CRUD APIs and Tailwind UI."
        />

        <ProjectCard
          title="Todo App"
          desc="React + Tailwind task manager using hooks."
        />

        <ProjectCard
          title="Spotify UI Clone"
          desc="Responsive UI built using vanilla JavaScript."
        />
      </div>
    </section>
  );
};

export default Project;

/* Project Card Component */
function ProjectCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
