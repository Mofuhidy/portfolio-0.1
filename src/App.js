import { useState } from 'react';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { ThemeContext } from './utils/ProjectsData';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`min-h-screen ${theme === 'light' ? 'light' : 'dark'} transition-all duration-1000 ease-in body`}>
          <Navbar />
          <Hello />
          <Projects />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
