import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Journey } from './sections/Journey'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
