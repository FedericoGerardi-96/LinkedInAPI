import { Routes, Route } from "react-router-dom";
import { Home } from "../home/page/Home";
import { LoginPage } from "../login/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
