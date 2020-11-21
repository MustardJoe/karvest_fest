const sayingsData = {
  sayings: [
    '"A hit of keef in the morning makes a person as strong as a hundred camels in the courtyard."',
    '"Ancient stoner wisdom asks us to remember that when the spirit of the flower fills us, we feel full with the flying flower godess"',
    '"Wear a red rainbow for cheer, and remember, a green rainbow helps the green goblin know who his friends are."',
    '"Technology is just a new means to achieve an old end. We are nothing more than trousered apes traveling at 2000 miles per hour."',
    '"If you go nosing around for cabages, and you end up 3 feet down the ol crows gizzard, ya best have brung yer galloshes."'
  ],
  getRandom: () => {
    const randomMsg = sayingsData.sayings[Math.floor(Math.random()
      * (sayingsData.sayings.length))];
    console.log('sayingsData', randomMsg);
    return randomMsg;   
  }
}

export default sayingsData;
