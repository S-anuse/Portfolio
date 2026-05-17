import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Card
