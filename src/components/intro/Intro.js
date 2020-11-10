import React from 'react';
import sayings from '../../sayingsData';

const Intro = () => {
  let ourSaying = sayings.getRandom();
  console.log(sayings.getRandom());
  return (
    <div className="Intro">
      <div className="Heres">
      As the old hippy saying goes:
      </div>
    
      {ourSaying}
      
    </div>
  )
}

export default Intro;
