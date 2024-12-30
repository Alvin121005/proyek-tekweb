import React from "react";
import DashboardCard from "../components/DashboardCard"; // Import komponen DashboardCard

function Dashboard() {
  return (
    <div className="p-6 flex-1">
      {" "}
      {/* Kontainer utama dengan padding dan fleksibilitas */}
      <div className="bg-white shadow-md p-4 rounded-md">
        {" "}
        {/* Card untuk dashboard dengan latar putih, bayangan, padding, dan sudut yang melengkung */}
        <DashboardCard /> {/* Menampilkan komponen DashboardCard */}
      </div>
    </div>
  );
}

export default Dashboard; // Mengekspor komponen Dashboard untuk digunakan di bagian lain aplikasi
