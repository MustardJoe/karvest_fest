import React from 'react';



const Card = ({strain}) => {
  
  return (
    <div className="Card">
      <h3 className="Card-header">{strain.name}</h3>
      {strain.blurb}
    </div>
  )
}

export default Card;