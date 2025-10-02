// src/App.jsx
import Container from 'react-bootstrap/Container'
import NavbarTop from './components/NavbarTop'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavbarTop />
      <main>
        <Hero />

        <section id="skills" className="py-5">
          <Container>
            <Skills />
          </Container>
        </section>

        <section id="services" className="py-5 bg-body-tertiary">
          <Container>
            <Services />
          </Container>
        </section>

        <section id="projects" className="py-5">
          <Container>
            <Projects />
          </Container>
        </section>

        <section id="contact" className="py-5 bg-body-tertiary">
          <Container>
            <Contact />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
