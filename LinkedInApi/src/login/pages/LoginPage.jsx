import React from "react";
import linkedInLogo from "../../assets/LinkedIn.png";
import { getProvidersUrls } from "../constant/auth";

export const LoginPage = () => {
  const providersUrls = getProvidersUrls();

  return (
    <>
        <a href={providersUrls}>
          <img alt="LinkedIn" src={linkedInLogo}></img>
        </a>       
    </>
  );
};
