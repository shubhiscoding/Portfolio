import './App.css';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Intro />
        <Education />
      </header>
    </div>
  );
}

export default App;
