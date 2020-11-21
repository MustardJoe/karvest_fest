import './App.css';
import Bytheway from './components/bytheway/ByTheWay.js';
import Card from './components/card/Card.js';
import Header from './components/header/Header.js';
import ImageContainer from './components/imagecontainer/ImageContainer.js';
import Intro from './components/intro/Intro.js';
import weedData from './weedData.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageContainer />
      <section className="Informo">
          <p>Hi Friends!</p>
          <p>
            It thrills me to be able to share some of my recent cannabis harvest with you!
            Cannabis cultivation is a personal passion of mine, and when I have a good
            harvest I love to share with fellow cannabis enthusiasts in my community.
            Each plant I grow receives hundreds of hours care to bring it through from
            seed/cutting to flowering plant, to dried, cured and smokable bud.
          </p>
          <p>
            Please Note, I personally enjoy the more energizing, elevating “power-high"
            provided by sativa and sativa-dominant cultivars, so that’s what I’ve grown.
          </p>
          <p>
            Here’s to more or less making it to the end of 2020, hopefully we can all gather together
            again someday, whenever we can all gather together again,
          </p>
          <p>
            Jon
          </p>
      </section>
        <h3 className="Card-header">Inform-o regarding weed strains you may have recieved:</h3>
      <Card strain={weedData.Bruce_Banner}/>
      <Card strain={weedData.Sour_Deisel}/>
      <Card strain={weedData.Nightmare_Cookies}/>
      <Card strain={weedData.Magic_Medicine}/>
      <Bytheway/>
      <Intro/>
    </div>
  );
}

export default App;
