import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hello />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
