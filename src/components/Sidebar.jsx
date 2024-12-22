import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (location.pathname === "/") {
    return null;
  }

  if (!isLoggedIn) {
    return null;
  }

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirm) => {
    if (confirm) {
      localStorage.setItem("isAuthenticated", "false");
      navigate("/");
    }
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-b from-blue-900 to-blue-700 text-white h-full transition-all duration-300 flex flex-col justify-between`}
      >
        <div>
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

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 font-bold text-lg border-b border-blue-500 px-4`}
          >
            SIKaryawan
          </div>

          <ul className="mt-6 space-y-2">
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
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/dashboard" ? "text-yellow-400" : ""
                }`}
              />
              {isOpen && <span>Beranda</span>}
            </li>
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
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/data-karyawan"
                    ? "text-yellow-400"
                    : ""
                }`}
              />
              {isOpen && <span>Data Karyawan</span>}
            </li>
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
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/data-absensi" ? "text-yellow-400" : ""
                }`}
              />
              {isOpen && <span>Data Absensi</span>}
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-proyek"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-proyek")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=53428&format=png&color=000000"
                alt="Project Icon"
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/data-proyek" ? "text-yellow-400" : ""
                }`}
              />
              {isOpen && <span>Proyek</span>}
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-cuti"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-cuti")}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/leave.png"
                alt="Leave Icon"
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/data-cuti" ? "text-yellow-400" : ""
                }`}
              />
              {isOpen && <span>Data Cuti</span>}
            </li>
            <li
              className={`flex items-center px-4 py-2 cursor-pointer transition transform hover:scale-105 ${
                location.pathname === "/data-gaji"
                  ? "text-yellow-400 transform scale-105"
                  : "hover:text-yellow-400"
              }`}
              onClick={() => handleNavigation("/data-gaji")}
            >
              <img
                src="https://img.icons8.com/?size=100&id=7977&format=png&color=000000"
                alt="Salary Icon"
                className={`w-6 h-6 mr-3 ${
                  location.pathname === "/data-gaji" ? "text-yellow-400" : ""
                }`}
              />
              {isOpen && <span>Data Gaji</span>}
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          {" "}
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
