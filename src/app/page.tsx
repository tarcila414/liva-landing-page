import ScrollSpy from "@/components/ScrollSpy/ScrollSpy";
import About from "./(sections)/About";
import Home from "./(sections)/Home";

export default function Page() {
  return (
    <>
      <ScrollSpy />
      <Home />
      <About />
    </>
  );
}
