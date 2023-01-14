import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, settreatment] = useState(null);
  const formatedDate = format(date, "PP");
  // console.log(services);
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
    // fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 className="text-xl text-center text-secondary mb-20">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services.map(service => <Service
            key={service._id}
            service={service}
            settreatment={settreatment}
            ></Service>)
        }
      </div>
      {
        treatment && <BookingModal key={services._id}  date={date} treatment={treatment} settreatment={settreatment}></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
