import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { toggleSearchView } from "../utils/GPTSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/appConfigSlice";
import { deleteMovieResults } from "../utils/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const user = useSelector((store) => store.user);
  // @ts-ignore
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGPTSeachClick = () => {
    //toggle GPT search page
    dispatch(toggleSearchView());
    dispatch(deleteMovieResults());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between h-24 px-4  ">
      <img alt="logo" src={NETFLIX_LOGO_URL} className="w-56 ml-18"></img>
      {user ? (
        <>
          <div className="flex align-middle justify-between">
            {showGPTSearch && (
              <select
                className="bg-black text-white px-2 h-9 mt-1.5 mr-2"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGPTSeachClick}
              className="px-2 text-white bg-red-800  hover:bg-red-900 rounded-lg h-9 mt-1.5 mr-2 cursor-pointer"
            >
              {showGPTSearch ? "Home" : "GPT Search"}
            </button>
            <div className="flex-col justify-center align-middle">
              <img
                alt="usericon"
                src={user.photoURL}
                className="h-11 ml-5"
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
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
