import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
//   console.log(services);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 className="text-xl text-center text-secondary">
        Available Appointments on {format(date, "PP")}
      </h3>
      <div>

      </div>
    </div>
  );
};

export default AvailableAppointment;
