import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const HandleSignIn = () => {
    setisSignin(!isSignin);
  };
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-black absolute ">
        <img
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
        />
      </div>
      <div className="flex items-center justify-center border-2 border-red relative top-28">
        <form className="relative z-0 py-4 flex-col justify-items-center items-center text-white bg-black opacity-85 w-1/3">
          <p className="text-2xl">{isSignin ? "Sign In" : "Sign Up"}</p>
          {isSignin ? (
            ""
          ) : (
            <div>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="p-2 m-2 text-white border border-amber-50 w-72 rounded-md"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              className="p-2 m-2 text-white border border-amber-50 w-72 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 m-2 text-white border border-amber-50 w-72 rounded-md"
            />
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 m-4 w-72 duration-200 cursor-pointer hover:bg-red-900 text-white bg-[#E50914] rounded-md"
            >
              {isSignin ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {isSignin ? <p className="underline">Forgot Password </p> : ""}

          <div
            className="underline cursor-pointer"
            onClick={() => HandleSignIn()}
          >
            {isSignin
              ? "New to Netflix? Signup Now"
              : "Already Registred? Sign In"}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
