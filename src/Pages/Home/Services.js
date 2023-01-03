import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Tretment",
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem est in, harum distinctio assumenda culpa.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem est in, harum distinctio assumenda culpa.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem est in, harum distinctio assumenda culpa.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-12 gap-10">
        {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
