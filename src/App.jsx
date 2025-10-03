import Container from "react-bootstrap/Container";
import NavbarTop from "./components/NavbarTop";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Playground from "./components/Playground";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const full = { minHeight: "100vh" };
const center = "d-flex align-items-center";

export default function App() {
  return (
    <>
      <NavbarTop />
      <main>
        {/* HERO */}
        <section className={`bg-body-tertiary ${center}`} style={full}>
          <Container>
            <Hero />
          </Container>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`${center}`} style={full}>
          <Container>
            <Skills />
          </Container>
        </section>

        {/* PLAYGROUND */}
        <section
          id="playground"
          className={`bg-body-tertiary ${center}`}
          style={full}
        >
          <Container>
            <Playground />
          </Container>
        </section>

        {/* SERVICES */}
        <section id="services" className={`${center}`} style={full}>
          <Container>
            <Services />
          </Container>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className={`bg-body-tertiary ${center}`}
          style={full}
        >
          <Container>
            <Projects />
          </Container>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${center}`} style={full}>
          <Container>
            <Contact />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
