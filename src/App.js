import './App.css';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
