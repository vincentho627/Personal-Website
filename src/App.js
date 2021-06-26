import './App.css';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import Contact from './components/contacts/contact'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
