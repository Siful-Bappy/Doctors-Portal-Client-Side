import React from "react";

const Service = ({ service, settreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center pt-5">
          {/* <button
            disabled={slots.length === 0}
            onClick={() => settreatment(service)}
            className="btn btn-primary w-full font-bold text-white bg-gradient-to-r from-primary to-secondary"
          >
            Buy Now
          </button> */}
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => settreatment(service)}
            className="btn btn-primary w-full font-bold text-white bg-gradient-to-r from-primary to-secondary"
          >
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
