const sayingsData = {
  sayings: [
    '"A hit of keif in the morning makes a person as strong as a hundred camels in the courtyard."',
    '"Ancient stoner wisdom asks us to remember that when the spirit of the flower fills us, we feel full with the flying flower godess"',
    '"Wear a red rainbow for cheer, and remember, a green rainbow is always your friend."',
    '"Technology is just a new means to achieve an old end. We are nothing more than trousered apes traveling at 2000 miles per hour."'
  ],
  getRandom: () => {
    const randomMsg = sayingsData.sayings[Math.floor(Math.random() * (sayingsData.sayings.length))];
    console.log('sayingsData', randomMsg);
    return randomMsg;   
  }
}

export default sayingsData;
