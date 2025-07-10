import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe on componenet unmount
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-20 flex justify-between h-24 px-4  ">
      <img alt="logo" src={NETFLIX_LOGO_URL}></img>
      {user ? (
        <div>
          <img
            alt="usericon"
            src={user.photoURL}
            className="h-11 justify-between"
          ></img>
          <span className="text-white">{user.displayName}</span>
          <button
            onClick={() => {
              handleSignout();
            }}
            className="text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
