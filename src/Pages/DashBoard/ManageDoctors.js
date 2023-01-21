import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(doctors)
  return (
    <div>
      <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (<DoctorRow
            key={doctor._id}
            doctor={doctor}
            index={index}
            ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;