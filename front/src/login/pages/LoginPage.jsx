import React from "react";
import linkedInLogo from "../../assets/LinkedIn.png";
import { getProvidersUrls } from "../constant/auth";

export const LoginPage = () => {
  const providersUrls = getProvidersUrls();

  return (
    <>
      <div className="login-page row m-0">
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="imageLogin"></div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="container d-flex flex-column align-items-center justify-content-around h-100">
            <h1 className="display-2 tittle">LogIn</h1>
            <a href={providersUrls}>
              <img alt="LinkedIn" src={linkedInLogo}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
