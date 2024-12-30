import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

// Import logo assets
import logo1 from "../logo/logo 2.png";
import logo2 from "../logo/logo 1.png";

const LoginPage = () => {
  // State untuk menyimpan email dan password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook untuk navigasi
  const navigate = useNavigate();

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Mencari user berdasarkan email dan password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Jika berhasil, simpan autentikasi di localStorage dan arahkan ke dashboard
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      // Tampilkan pesan kesalahan jika email atau password salah
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-300">
      {/* Bagian kiri: Logo dan branding */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="flex items-center mb-6">
          <img src={logo1} alt="Logo kecil" className="w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-black">SIKARYAWAN</h1>
        </div>
        <img src={logo2} alt="Logo besar" className="max-w-full w-[80%] mt-4" />
      </div>

      {/* Bagian kanan: Form login */}
      <div className="lg:w-1/2 bg-[#0d47a1] flex items-center justify-center p-6 shadow-2xl">
        <div className="w-full max-w-sm p-8">
          <h1 className="text-center text-3xl font-bold mb-8 text-white shadow-lg">
            Sign in to your account
          </h1>

          {/* Input untuk email */}
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

          {/* Input untuk password */}
          <div className="mb-6">
            <div className="relative">
              <img
                src="https://img.icons8.com/?size=100&id=93&format=png&color=000000"
                alt="Lock Icon"
                className="absolute left-3 top-3 w-6 h-6"
              />
              <input
                type="password"
                placeholder="Masukkan password anda"
                className="w-full pl-12 py-3 border-2 border-black rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9bb3e8] bg-[#9bb3e8] text-black focus:border-[#0d47a1] transition placeholder-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Tombol untuk login */}
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
