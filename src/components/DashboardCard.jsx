import React from "react";

function DashboardCard() {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-6 shadow-md rounded-md">
      <img
        src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-candidate-clipart-group-of-office-worker-flat-style-corporate-vector-characters-png-image_6794055.png"
        alt="Employee Illustration"
        className="w-32 h-32 object-contain sm:mr-6"
      />
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-800">
          Aplikasi Sistem Karyawan
        </h2>
        <p className="text-gray-600 mt-2">
          Kelola karyawan dengan mudah dan efisien.
        </p>
      </div>
    </div>
  );
}

export default DashboardCard;
