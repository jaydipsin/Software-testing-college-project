import Header from "../shared/header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div>Dashboard</div>
      <Outlet />
      <Footer />
    </>
  );
}
