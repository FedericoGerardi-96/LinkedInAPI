import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import '../../style/Home.css';

export const Home = () => {
  const [UserData, setUserData] = useState({});
  const [img, setimg] = useState({});
  const [email, setemail] = useState({});
  let code = "";
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    code = getParameterByName("code");
  }, []);

  const getParams = async () => {
    const url = `http://localhost:5000/api/LinkedIn`;
    const urlImg = `http://localhost:5000/api/LinkedIn/img`;
    const urlEmail = `http://localhost:5000/api/LinkedIn/email`;
    const data = await axios.get(url);
    const dataImg = await axios.get(urlImg);
    const dataEmail = await axios.get(urlEmail);
    const image = JSON.parse(
      JSON.stringify(dataImg.data.profilePicture).replace("~", "")
    );
    setUserData(data.data);
    setimg(image.displayImage.elements[0].identifiers[0].identifier);
    setemail(
      JSON.stringify(dataEmail.data.elements[0]).split(":")[2].split("}")[0]
    );
  };
  return (
    <div className="container pt-5">
      <button onClick={getParams} className="cta">
        <span>Obtener Info</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      <div className="card-container d-flex align-items-center justify-content-center w-100">
        {UserData.id != undefined && (
          <Card UserData={UserData} img={img} email={email}></Card>
        )}
      </div>
    </div>
  );
};

// const router = useRouter();
// const { code } = router.query;
// import { useRouter } from "next/router";  TRAERQUERY CON NEXT
