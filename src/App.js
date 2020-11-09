import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card.js';
import weedData from './weedData.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Uncle Farmer Jonny
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Card strain={weedData.Bruce_Banner}/>
        <Card strain={weedData.Sour_Deisel}/>
        <Card strain={weedData.Nightmare_Cookies}/>
        <Card strain={weedData.Magic_Medicine}/>
      </header>
    </div>
  );
}

export default App;
