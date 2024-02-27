import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div>
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
