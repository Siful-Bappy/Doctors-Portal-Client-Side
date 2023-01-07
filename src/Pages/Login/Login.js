import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <div className="divider">OR</div>
          <button className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
