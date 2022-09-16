import React, { useState } from "react";
import "../../style/Card.css";
import axios from "axios";

export const Card = ({ UserData, img, email }) => {
    const [post, setpost] = useState({})
    
  const postLinkedIn = async () => {
    const dataText = { message: "Hola"}
    const url = `http://localhost:5000/api/LinkedIn`;
    const data = await axios.post(url,dataText);
    console.log(data);
  };
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <img
          id="img-profile"
          width="70"
          height="80"
          className="img-fluid"
          src={img}
        ></img>
      </div>
      <span>
        {UserData.localizedFirstName} {UserData.localizedLastName}
      </span>
      <p className="job"> {email}</p>
      <button className="mb-3" onClick={postLinkedIn}> Post In LinkedIn</button>
    </div>
  );
};
