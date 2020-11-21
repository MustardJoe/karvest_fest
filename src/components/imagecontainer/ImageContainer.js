import uncleFarmerImg from '../../assets/uncleFarmerJonny_FaceForWebsite.jpg';
import React from 'react';

const ImageContainer = () => {
  return (
    <div className="ImageContainer">
      <img src={uncleFarmerImg} alt="Cartoon illustration of Uncle Farmer Jonny" className="ImgFile"></img>
    </div>
  );
}

export default ImageContainer;
