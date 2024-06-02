import './App.css';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import ProjectScetion from './Components/ProjectSection';
import AllProjects from './Pages/AllProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<header className="App-header">
          <Home />
          <Intro />
          <Education />
          <Skills />
          <Experience />
          <ProjectScetion />
        </header>}>
      </Route>
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
