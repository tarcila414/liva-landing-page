import ScrollSpy from "@/components/ScrollSpy/ScrollSpy";
import About from "./(sections)/About";
import Home from "./(sections)/Home";
import Contact from "./(sections)/Contact";
import Projects from "./(sections)/Projects";

export default function Page() {
  return (
    <>
      <ScrollSpy />
      <Home />
      <About />
      <Contact />
      <Projects />
    </>
  );
}
