import { useState } from "react";
import { userProfile } from "../../interface/user";

const getLocalStorageToken = () => {
  return localStorage.getItem("token") || "null";
};
const getLocalStorageUser = () => {
  return JSON.parse(localStorage.getItem("user")) || "null";
};

const useUser = () => {
  const [user, setuser] = useState(getLocalStorageUser);
  const [token, settoken] = useState(getLocalStorageToken);

  const setUserDates = (userDate) => {
    setuser(userDate);    
    localStorage.setItem("user", JSON.stringify(userDate));
  };

  const setToken = (tokenN) => {
    settoken(tokenN);
    localStorage.setItem("token", tokenN);
  };

  return [user, setUserDates, token, setToken];
};

export default useUser;
