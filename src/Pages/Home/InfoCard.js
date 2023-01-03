import React from "react";

const InfoCard = ({img, text, textDiscription, color}) => {
  return (
    <div>
      <div className={`card lg:card-side bg-base-100 shadow-xl {color} text-white pl-5 ${color}`}>
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{text}</h2>
          <p>{textDiscription}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
