import './App.css';
import Bytheway from './components/bytheway/ByTheWay.js';
import Card from './components/card/Card.js';
import Header from './components/header/Header.js';
import Intro from './components/intro/Intro.js';
import weedData from './weedData.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Card strain={weedData.Bruce_Banner}/>
      <Card strain={weedData.Sour_Deisel}/>
      <Card strain={weedData.Nightmare_Cookies}/>
      <Card strain={weedData.Magic_Medicine}/>
      <Bytheway/>
    </div>
  );
}

export default App;
