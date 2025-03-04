import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Dashboard({ onLogout }) {
  return (
    <>
      <Header onLogout={onLogout} />
      <Outlet />
      <Footer />
    </>
  );
};

