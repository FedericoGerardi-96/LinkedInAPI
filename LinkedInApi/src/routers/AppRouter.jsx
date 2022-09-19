import { Routes, Route } from "react-router-dom";
import { HomeRouter } from "../home/page/HomeRouter";
import { LoginPage } from "../login/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HomeRouter />} />
      </Routes>
    </>
  );
};
