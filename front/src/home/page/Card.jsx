import React, { useState } from "react"

export const Card = ({ UserData }) => {
  console.log(UserData)
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
          alt="foto de perfil del usuario"
        />
      </div>
      <span>
        {UserData.name} {UserData.surname}
      </span>
      <p className="job"> {UserData.email}</p>
    </div>
  )
}
