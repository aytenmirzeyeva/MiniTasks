import React from "react";

const Card = ({ title, description, price, image }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img src={image} />
      </div>
      <div className="card-bottom">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <h3 className="card-price">{price} $</h3>
      </div>
    </div>
  );
};

export default Card;
