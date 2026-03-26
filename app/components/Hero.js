export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-indigo-400 text-sm uppercase tracking-widest mb-3">
        Software Engineer
      </p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Hi, I'm <span className="text-indigo-400">Sakshi</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10">
        Backend-focused engineer building scalable systems, REST APIs, and
        full-stack web applications. Currently learning Next.js and Tailwind.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 px-6 py-3 rounded-full font-medium transition-all duration-200"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}