import { useState } from "react";
import { login, loginWithGoogle, register } from "../firebase/auth.service.js";
import heroImg from "../assets/images/student.jpg";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Avatar from "react-avatar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let user;
  // Handle login
  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Logged in successfully ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle signup
  const handleSignup = async () => {
    try {
      await register(email, password);
      alert("Account created 🎉");
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      user = await loginWithGoogle();
      if (user) {
        navigate("/");
      }
      alert("Google login successful 🚀");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-[calc(100vh-68px)] flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-1/2 bg-blue-600 flex items-center justify-center">
          <img
            src={heroImg}
            alt="Student"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Log in</h2>
          <button
            onClick={handleGoogleLogin}
            className="flex gap-4 cursor-pointer items-center justify-center w-full border rounded-lg py-2 mb-4 hover:bg-gray-100 transition"
          >
            <FcGoogle size={30} />
            Continue with Google
          </button>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500 text-sm">Or login with email</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {!user ? (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
            >
              Login
            </button>
          ) : (
            <Avatar name="Foo Bar" />
          )}
          <button
            onClick={handleSignup}
            className="w-full bg-green-600 text-white rounded-lg py-2 mt-3 hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
