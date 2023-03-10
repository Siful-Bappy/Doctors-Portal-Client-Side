import React from "react";

const Review = ({ review }) => {
  const { name, img, location } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui facere
          soluta eveniet ab enim. Expedita?
        </p>
        <div className="flex items-center pt-3">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
              <img src={img} alt="Image"/>
            </div>
          </div>
          <div>
            <h4 className="text-xl">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
