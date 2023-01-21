import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
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
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
            ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <DeleteConfirmModal 
        deletingDoctor={deletingDoctor}
        refetch={refetch}
        setDeletingDoctor={setDeletingDoctor}
        ></DeleteConfirmModal>
      }
    </div>
  );
};

export default ManageDoctors;
