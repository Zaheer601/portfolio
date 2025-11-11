
import './App.css';
import Navbar from './My Components/Navbar';
import Hero from './My Components/Hero';
import About from './My Components/About';
import Skills from './My Components/Skills';
import Projects from './My Components/Projects';
import Contact from './My Components/Contact';
import Footer from './My Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
