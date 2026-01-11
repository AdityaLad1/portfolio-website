import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="px-10 py-24 text-center">
        <h3 className="text-3xl font-semibold mb-6">Reach Out To Me</h3>

        <p className="text-gray-400">
          Pune, India • adityanlad@gmail.com • 9226778980
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/AdityaLad1"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aditya-n-lad"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}


export default Contact
