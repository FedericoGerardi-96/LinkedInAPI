import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Card } from "./Card";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { user, setUserDates, token, setToken } = useContext(UserContext);
  const [code, setcode] = useState("");
  const [postValueInput, setpostValueInput] = useState("");
  const navigate = useNavigate();
  
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    setcode(getParameterByName("code"));
    const tokenLocalStorage = localStorage.getItem("token");
    if (tokenLocalStorage === "null") {
      setTimeout(function () {
        if (tokenLocalStorage === "null") {
          setUserDates(null);
          setToken(null);
          navigate("/login", {
            replace: true,
          });
        }
      }, 20000);
    }
  }, []);

  const getToken = async () => {
    const linkedInCode = { code: code };
    const url = `http://localhost:5000/api/login`;
    const data = await axios.post(url, linkedInCode);
    setToken(data.data.access_token);
  };

  const handleChange = (e) => {
    setpostValueInput(e.target.value);
  };

  const getParams = async () => {
    if (token != "null" || user != "null") {
      const body = { token: token };
      const url = `http://localhost:5000/api/LinkedIn`;
      const urlImg = `http://localhost:5000/api/LinkedIn/img`;
      const urlEmail = `http://localhost:5000/api/LinkedIn/email`;
      const data = await axios.post(url, body);
      const dataImg = await axios.post(urlImg, body);
      const dataEmail = await axios.post(urlEmail, body);
      const image = JSON.parse(
        JSON.stringify(dataImg.data.profilePicture).replace("~", "")
      );
      const user = {
        name: data.data.localizedFirstName,
        surname: data.data.localizedLastName,
        email: JSON.stringify(dataEmail.data.elements[0])
          .split(":")[2]
          .split("}")[0],
        photoURL: image.displayImage.elements[0].identifiers[0].identifier,
      };
      let MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: "success",
        title: <i>Welcome</i>,
        html: (
          <i>
            {data.data.localizedFirstName} {data.data.localizedLastName}
          </i>
        ),
      });
      setUserDates(user);
    }
  };

  const postLinkedIn = async (e) => {
    e.preventDefault();
    if (postValueInput != "") {
      const dataText = { message: postValueInput, token: token };
      const url = `http://localhost:5000/api/LinkedIn/post`;
      try {
        const data = await axios.post(url, dataText);
        let MySwal = withReactContent(Swal);
        MySwal.fire({
          icon: "success",
          title: <i>Success</i>,
          html: <i>Se publico correctamente</i>,
        });
      } catch (e) {
        let MySwalError = withReactContent(Swal);
        MySwalError.fire({
          icon: "error",
          title: <i>Error</i>,
          html: <i>Error al publicar</i>,
        });
      }
    } else {
      let MySwalErrorEmpty = withReactContent(Swal);
      MySwalErrorEmpty.fire({
        icon: "error",
        title: <i>Error</i>,
        html: <i>Ingrese un texto</i>,
      });
    }
  };

  return (
    <div className="d-flex flex-column w-100 h-100">
      <div className="">
        {token === "null" && (
          <button onClick={getToken} className="cta mb-5">
            <span>Obtener token</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        )}
        {token != "null" && (
          <button onClick={getParams} className="cta mb-5">
            <span>Obtener Info</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        )}
      </div>
      {user != "null" && (
        <div className="row">
          <div className="col-lg-6 col-12 card-container d-flex align-items-center justify-content-center mb-5">
            <Card UserData={user}></Card>
          </div>
          <form onSubmit={postLinkedIn} className="col-lg-6 col-12 ">
            <div className="d-flex flex-column align-items-center justify-content-around h-100">
              <input
                value={postValueInput}
                onChange={handleChange}
                type="text"
                name="text"
                className="input"
                placeholder="Type here!"
              ></input>
              <button type="submit" className="btnPostLinkedIn mt-5">
                {" "}
                Post In LinkedIn
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
