import { Route, Routes } from "react-router-dom";
import EmployerRegistration from "./pages/EmployerRegistration";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Internships from "./components/Internships";
import Login from "./auth/auth";

function App() {
  console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/post-job" element={<EmployerRegistration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
