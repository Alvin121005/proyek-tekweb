import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

import logo1 from "../logo/logo 2.png";
import logo2 from "../logo/logo 1.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/sidebar");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-300">
      {" "}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="flex items-center mb-6">
          <img src={logo1} alt="Logo kecil" className="w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-black">SIKARYAWAN</h1>{" "}
        </div>
        <img src={logo2} alt="Logo besar" className="max-w-full w-[80%] mt-4" />
      </div>
      <div className="lg:w-1/2 bg-[#0d47a1] flex items-center justify-center p-6 shadow-2xl">
        {" "}
        <div className="w-full max-w-sm p-8">
          <h1 className="text-center text-3xl font-bold mb-8 text-white shadow-lg">
            Sign in to your account
          </h1>

          <div className="mb-6">
            <div className="relative">
              <img
                src="https://img.icons8.com/?size=100&id=pETkiIKt6qBf&format=png&color=000000"
                alt="User Icon"
                className="absolute left-3 top-3 w-6 h-6"
              />
              <input
                type="email"
                placeholder="Masukkan email anda"
                className="w-full pl-12 py-3 border-2 border-black rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9bb3e8] bg-[#9bb3e8] text-black focus:border-[#0d47a1] transition placeholder-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <img
                src="https://img.icons8.com/?size=100&id=93&format=png&color=000000"
                alt="Lock Icon"
                className="absolute left-3 top-3 w-6 h-6"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password anda"
                className="w-full pl-12 py-3 border-2 border-black rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9bb3e8] bg-[#9bb3e8] text-black focus:border-[#0d47a1] transition placeholder-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={() => setShowPassword(!showPassword)}
              ></button>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#9bb3e8] text-black py-3 rounded-2xl border-2 border-black hover:bg-[#0d47a1] transition-shadow shadow-2xl"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;