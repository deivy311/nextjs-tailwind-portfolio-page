// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./landing-page/hero";
import Clients from "./landing-page/clients";
import Skills from "./landing-page/skills";
import Projects from "./landing-page/projects";
import Resume from "./landing-page/resume";
import Testimonial from "./landing-page/testimonial";
import PopularClients from "./landing-page/popular-clients";
import ContactForm from "./landing-page/contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
      <ContactForm />
      <Footer />
    </>
  );
}
