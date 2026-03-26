import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}