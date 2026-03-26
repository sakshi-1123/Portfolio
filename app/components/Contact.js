export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        Get In <span className="text-indigo-400">Touch</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Open to internship opportunities, collaborations, and interesting problems.
      </p>
      <a
        href="mailto:sakshialesarmane@gmail.com"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 inline-block"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6 mt-8 text-gray-500 text-sm">
        <a
          href="https://github.com/sakshi-1123"
          className="hover:text-indigo-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sakshi-hegde-4b92a92a8 "
          className="hover:text-indigo-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
