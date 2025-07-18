import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </main>
  )
}

export default App;