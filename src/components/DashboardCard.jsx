import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardCard() {
  // State untuk mengontrol tampilan dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // State untuk mengontrol konfirmasi logout
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  // Hook untuk navigasi ke halaman lain
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada profil dan membuka/menutup dropdown
  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown
  };

  // Fungsi untuk navigasi ke halaman pengaturan
  const handleSettingsClick = () => {
    navigate("/settings"); // Navigasi ke halaman settings
  };

  // Fungsi untuk menampilkan konfirmasi logout
  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true); // Tampilkan dialog konfirmasi
  };

  // Fungsi untuk menangani konfirmasi logout
  const handleLogoutConfirmation = (confirm) => {
    if (confirm) {
      localStorage.setItem("isAuthenticated", "false"); // Set status autentikasi ke false
      navigate("/"); // Kembali ke halaman utama
    }
    setShowLogoutConfirmation(false); // Sembunyikan dialog konfirmasi
  };

  return (
    <div className="p-6">
      {/* Header Dashboard */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-900 to-blue-700 p-2 rounded-md shadow-md">
          Dashboard Management
        </h1>
        <div className="flex items-center space-x-4">
          {/* Tombol navigasi untuk menambah anggota */}
          <button
            onClick={() => navigate("/data-karyawan")}
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105"
          >
            + Assign Member
          </button>
          {/* Dropdown Profil */}
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="flex items-center space-x-2"
            >
              <div className="text-left">
                <h2 className="text-sm font-bold text-blue-900">
                  Alvindra Ramadhan
                </h2>
                <p className="text-xs text-blue-700">CEO</p>
              </div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/businessman-and-business-woman-avatar/64/Businessman_business_woman_Avatar-10-512.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-700 ml-4"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border border-gray-200">
                <ul>
                  <li
                    onClick={handleSettingsClick}
                    className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    Settings
                  </li>
                  <li
                    onClick={handleLogoutClick}
                    className="px-4 py-2 text-sm text-red-500 cursor-pointer hover:bg-gray-100"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Konten utama dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Kartu Report dan Analysis */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Report and Analysis</h2>
            <button className="text-sm text-white hover:underline">
              Sort by this week
            </button>
          </div>
          {/* Placeholder untuk grafik */}
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <img
              src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Project A',data:[10,20,15,30,40,35,50],borderColor:'rgb(255, 99, 132)',fill:false},{label:'Project B',data:[20,30,25,35,45,40,55],borderColor:'rgb(54, 162, 235)',fill:false},{label:'Project C',data:[5,10,20,25,30,35,45],borderColor:'rgb(255, 205, 86)',fill:false}]}}"
              alt="Report and Analysis"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-around mt-4">
            {/* Tombol navigasi ke berbagai proyek */}
            <button
              onClick={() => navigate("/proyek/a")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
            >
              Project A
            </button>
            <button
              onClick={() => navigate("/proyek/b")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
            >
              Project B
            </button>
            <button
              onClick={() => navigate("/proyek/c")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
            >
              Project C
            </button>
            <button
              onClick={() => navigate("/data-proyek")}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
            >
              Details
            </button>
          </div>
        </div>

        {/* Kartu Progress */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Progress</h2>
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <img
              src="https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Assignment','Revision'],datasets:[{data:[70,30],backgroundColor:['rgb(255, 205, 86)','rgb(255, 99, 132)']}]}}"
              alt="Progress Chart"
              className="w-full h-full object-contain"
            />
          </div>
          <ul className="mt-4 text-white">
            <li className="flex items-center justify-between">
              <span>Assignment</span>
              <span className="font-bold">70%</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Revision</span>
              <span className="font-bold">30%</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Kartu Feedback */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Feedback</h2>

        {/* Komentar pelanggan */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000"
              alt="Customer Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-700"
            />
            <div>
              <h3 className="text-sm font-bold">John Doe</h3>
              <p className="text-xs text-blue-300">Business Owner</p>
            </div>
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 shadow-md">
            Reply
          </button>
        </div>
        <blockquote className="italic">
          "The service was impeccable! It exceeded all my expectations, and I
          will definitely recommend it to others."
        </blockquote>

        {/* Komentar lainnya */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNJdHp5ubG8-YVhE9JIarcTIPHROv4rRw1knQs9YzHdYARd5Bx5DxI1FmVJzfORfqxUg&usqp=CAU"
              alt="Customer Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-700"
            />
            <div>
              <h3 className="text-sm font-bold">Jane Smith</h3>
              <p className="text-xs text-blue-300">Entrepreneur</p>
            </div>
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 shadow-md">
            Reply
          </button>
        </div>
        <blockquote className="italic">
          "Fantastic experience! The team was professional, and the solution
          provided was exactly what I needed for my business."
        </blockquote>

        {/* Komentar terakhir */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img
              src="https://img.pikbest.com/png-images/qiantu/cartoon-consulting-service-staff-banner-vector-download_2518761.png!sw800"
              alt="Customer Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-700"
            />
            <div>
              <h3 className="text-sm font-bold">Rana Cayla</h3>
              <p className="text-xs text-blue-300">Consultant</p>
            </div>
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 shadow-md">
            Reply
          </button>
        </div>
        <blockquote className="italic">
          "I'm really impressed with the customer support. The team was quick to
          respond and helped me resolve my issue in no time."
        </blockquote>
      </div>

      {/* Dialog Konfirmasi Logout */}
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

export default DashboardCard;
