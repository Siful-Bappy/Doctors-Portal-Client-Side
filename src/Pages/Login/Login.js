import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate("/appointment")
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (user || guser) {
    console.log(user);
  }
  if (loading || gloading) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gerror) {
    signInError = (
      <p className="text-red-500">{error?.message || gerror?.message}</p>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Please add 8 digit or more",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              value="Login"
              className="btn uppercase w-full mt-3 font-bold text-white bg-gradient-to-r from-primary to-secondary"
            />
          </form>
          <p>
            <small>
              New to Doctors Portal?{" "}
              <Link to="/signup" className="text-secondary">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline font-bold text-white bg-gradient-to-r from-primary to-secondary"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
