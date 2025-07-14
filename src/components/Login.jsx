import React, { useState, useRef } from "react";
import Header from "./Header";
import { DataValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errorMsg, SeterrorMsg] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const navigate = useNavigate();

  const HandleSignIn = () => {
    setisSignin(!isSignin);
  };

  const handleOnclick = () => {
    const validateform = DataValidate(
      email.current.value,
      password.current.value
    );
    SeterrorMsg(validateform);
    if (validateform) return;

    //sign in / signup logic here
    if (!isSignin) {
      //sign up following is firebASE code
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //update username
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              SeterrorMsg(error.code + " " + error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SeterrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SeterrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-black absolute ">
        <img
          alt="bg-image"
          src={BG_IMG}
          className="h-screen object-cover md:w-screen"
        />
      </div>
      <div className="flex items-center justify-center relative top-28">
        <form
          className="relative  z-0 py-4 flex-col justify-items-center items-center text-white bg-black opacity-85 w-[90%] md:w-1/3"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-2xl">{isSignin ? "Sign In" : "Sign Up"}</p>
          {isSignin ? (
            ""
          ) : (
            <div>
              <input
                type="text"
                ref={fullname}
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
              ref={email}
              placeholder="Email address"
              className="p-2 m-2 text-white border border-amber-50 w-72 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              ref={password}
              placeholder="Password"
              className="p-2 m-2 text-white border border-amber-50 w-72 rounded-md"
            />
          </div>
          {errorMsg != null ? (
            <div className="text-red-500 px-10">{errorMsg}</div>
          ) : (
            ""
          )}

          <div>
            <button
              type="submit"
              className="px-4 py-2 m-4 w-72 duration-200 cursor-pointer hover:bg-red-900 text-white bg-[#E50914] rounded-md"
              onClick={() => handleOnclick()}
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
