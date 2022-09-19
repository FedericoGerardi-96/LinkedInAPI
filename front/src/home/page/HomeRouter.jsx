import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { NavBar } from "../../navBar/NavBar";
import { Footer } from "../../footer/pages/Footer";

export const HomeRouter = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container d-flex flex-row justify-content-between align-items-center pt-5">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};
