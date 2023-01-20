import React from "react";
import { useForm } from "react-hook-form";
import { useQueries, useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctors = () => {
  /*
    3 ways to store images
    1. third party stroge like imagebb
    2. your own stronge in your own server
    3. Datatbase: Mongodb

    for validation a image
    YUP: to falidate file: search: YUP file validaton for react hook form + limit the size: 
    */
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const imageStorageKey = "cd986efaf6b10a93342b1caa91d1116e";

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
                if(inserted) {
                    toast.success("Doctors information created successfully")
                    reset();
                } else {
                    toast.error("Fail to add a doctor")
                }
              console.log(inserted);
            });
        }
        console.log(result);
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Add a new Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                // value: /[a-z0-9]+@[a-z]+\.[a-z]{2, 3}/,
                value: /[A-Za-z]{3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} className="select w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name?.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Add Doctor Information"
          className="btn uppercase mt-3 font-bold text-white bg-gradient-to-r from-primary to-secondary"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
