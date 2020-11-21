const sayingsData = {
  sayings: [
    '"A hit of keef in the morning makes a person as strong as a hundred camels in the courtyard."',
    '"A hit of keef in the morning makes a person as strong as a hundred camels in the courtyard."',
    '"Ancient stoner wisdom asks us to remember that when the spirit of the flower fills us, we feel full with the flying flower godess"',
    '"Wear a red rainbow for cheer, and remember, a green rainbow helps the gleeful green goblin know who his friends are."',
    '"Technology is just a new means to achieve an old end. We are nothing more than trousered apes traveling at 2000 miles per hour."',
    '"Technology is just a new means to achieve an old end. We are nothing more than trousered apes traveling through space at 50,000 miles per hour, shooting laser beams into each others’ eyes for reasons that have, disappointingly, less to do with our high-minded morals and philosophies, and more to do with the same reasons why our dogs are prone to sniff each others’ butts. Or, in my case, it’s my cat who likes sniffing butts.“',
    '"Black lives matter, transphobes suck, and we need to stop destroying the only Earth we have. Fuck power"',
    '"Black lives matter, transphobes suck, and we need to stop destroying the only Earth we have. Fuck power"',
    '“I lived under this bridge for a while now and I do drugs and alcohol as part of my religion. If you want to do some graffiti here, that’s cool with me. Thanks for the cigarettes.“'
  ],
  getRandom: () => {
    const randomMsg = sayingsData.sayings[Math.floor(Math.random()
      * (sayingsData.sayings.length))];
    console.log('sayingsData', randomMsg);
    return randomMsg;   
  }
}

export default sayingsData;
