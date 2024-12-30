import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Sidebar() {
  // State untuk mengatur apakah sidebar terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(true);

  // State untuk mengecek apakah pengguna sudah login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State untuk mengatur apakah konfirmasi logout ditampilkan
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  // Hook untuk navigasi antar halaman
  const navigate = useNavigate();

  // Hook untuk mendapatkan informasi tentang lokasi saat ini
  const location = useLocation();

  // Menjalankan effect saat komponen pertama kali dimuat
  useEffect(() => {
    // Mengecek status login dari localStorage
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Fungsi untuk toggle (membuka/tutup) sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menangani navigasi ke halaman tertentu
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Menyembunyikan sidebar jika berada di halaman utama atau jika pengguna belum login
  if (location.pathname === "/") {
    return null;
  }

  if (!isLoggedIn) {
    return null;
  }

  // Fungsi untuk menangani klik tombol logout
  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  // Fungsi untuk mengonfirmasi atau membatalkan logout
  const handleLogoutConfirmation = (confirm) => {
    if (confirm) {
      // Menghapus status login di localStorage dan mengarahkan pengguna ke halaman utama
      localStorage.setItem("isAuthenticated", "false");
      navigate("/");
    }
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-b from-blue-900 to-blue-700 text-white h-screen fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between z-10`}
      >
        <div>
          {/* Tombol untuk toggle sidebar */}
          <button
            className="p-4 focus:outline-none text-white flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="Toggle Sidebar"
              className="w-6 h-6"
            />
          </button>

          {/* Judul sidebar */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 font-bold text-lg border-b border-blue-500 px-4`}
          >
            SIKaryawan
          </div>

          {/* Menu navigasi */}
          <ul className="mt-6 space-y-2">
            {/* Item menu untuk halaman Beranda */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/dashboard"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/dashboard")}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/home--v1.png"
                alt="Home Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Beranda</span>}
            </li>

            {/* Item menu untuk Data Karyawan */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-karyawan"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-karyawan")}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/workers-male.png"
                alt="Employee Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Karyawan</span>}
            </li>

            {/* Item menu untuk Data Absensi */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-absensi"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-absensi")}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/calendar.png"
                alt="Attendance Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Absensi</span>}
            </li>

            {/* Item menu untuk Data Cuti */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-cuti"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-cuti")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=7718&format=png&color=000000"
                alt="Leave Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Cuti</span>}
            </li>

            {/* Item menu untuk Data Gaji */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-gaji"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-gaji")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=34005&format=png&color=000000"
                alt="Salary Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Gaji</span>}
            </li>

            {/* Item menu untuk Data Proyek */}
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-proyek"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-proyek")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=58808&format=png&color=000000"
                alt="Proyek Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Proyek</span>}
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          {/* Menu untuk pengaturan */}
          <div
            className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
              location.pathname === "/settings"
                ? "text-yellow-400 transform scale-105"
                : "hover:text-yellow-400"
            }`}
            onClick={() => handleNavigation("/settings")}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/settings.png"
              alt="Settings Icon"
              className="w-6 h-6 mr-3"
            />
            {isOpen && <span>Settings</span>}
          </div>

          {/* Menu untuk logout */}
          <div
            className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
              location.pathname === "/logout"
                ? "text-red-500 transform scale-105"
                : "text-red-500"
            }`}
            onClick={handleLogoutClick}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/logout-rounded-left.png"
              alt="Logout Icon"
              className="w-6 h-6 mr-3"
            />
            {isOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* Area konten utama */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        } w-full p-4`}
      >
        <Outlet />
      </div>

      {/* Modal konfirmasi logout */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold">Apakah Anda ingin keluar?</p>
            <div className="mt-4 flex justify-around">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => handleLogoutConfirmation(true)}
              >
                Ya
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => handleLogoutConfirmation(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
