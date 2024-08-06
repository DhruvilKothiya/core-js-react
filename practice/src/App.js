import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Geek from './Components/Geek';
import Car from './Components/Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Car></Car>
      <Geek name="Dhruvil" holdername="Vandan"></Geek>
      <Hello></Hello>
    </div>
  );
}

export default App;
