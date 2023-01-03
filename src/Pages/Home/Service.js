import React from "react";

const Service = ({service}) => {
    const {img, name, discription} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-black">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default Service;
