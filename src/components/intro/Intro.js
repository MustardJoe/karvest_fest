import React from 'react';
import sayings from '../../sayingsData';

const Intro = () => {
  let ourSaying = sayings.getRandom();

  return (
    <div className="Intro">
      <div className="Heres">
      <a className="NoDecorationLink" href="./">
        As the old hippie saying goes:
        </a>
      </div>
      {ourSaying}
    </div>
  )
}

export default Intro;
