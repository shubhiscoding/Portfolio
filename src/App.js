import './App.css';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Intro />
        <Education />
        <Skills />
        <Experience />
      </header>
    </div>
  );
}

export default App;
