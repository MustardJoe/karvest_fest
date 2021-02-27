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
          {/* <p>
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
          </p> */}
          <p>
          WOW, 2020 beat the absolute shit out of me, and I’m definitely still hurting. But I know, at least for me, it feels like the worst of the collective hardship we are facing is behind us. I hope you feel this way as well, at least when you are able to stop and take a moment to reflect.
          </p>
          <p>
          I know not all of us made it to 2021 -  we lost far too many of our loved ones and other wonderful people -  but if you’re reading this, you have made it. I’m glad you’re still here. Let’s heal together.
          </p>
          <p>
          Over the last several months I’ve been refining my grow methods, trying new equipment, learning new techniques, and gearing up for this still-new year. 2021 is already shaping up to be a better year than I’ve had in more than a few (both in terms of my horticultural efforts and other personal endeavors), and I hope that’s true for you too. Hope – it’s something I’m surprised to realize I have again. 
          </p>
          <p>
          It is in the spirit of hopeful healing that I am proud to offer samples from my winter 2020-21 indoor cannabis cultivation efforts.
          </p>
          <p>
            Jon
          </p>
      </section>
      <br></br>
        <h3 className="Card-header">Inform-o regarding weed strains you may have recieved:</h3>
      <Card strain={weedData.Obama_Kush}/>
      <Card strain={weedData.Magic_Medicine_2}/>
      <Card strain={weedData.Laughing_Buddha}/>
      <Bytheway/>
      <Intro/>
    </div>
  );
}

export default App;
