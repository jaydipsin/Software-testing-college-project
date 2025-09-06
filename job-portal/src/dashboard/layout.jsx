import { Outlet } from "react-router-dom";
import Header from "../shared/header";
import Footer from "../shared/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div>Layout</div>
      <Outlet />
      <Footer />
    </>
  );
}
