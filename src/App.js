import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hello />
      <Projects />
    </div>
  );
}

export default App;
