import React, { useState } from "react";

export const Card = ({ UserData }) => {
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <img
          id="img-profile"
          width="70"
          height="80"
          className="img-fluid"
          src={UserData.photoURL}
        ></img>
      </div>
      <span>
        {UserData.name} {UserData.surname}
      </span>
      <p className="job"> {UserData.email}</p>
    </div>
  );
};
