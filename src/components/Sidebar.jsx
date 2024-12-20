import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
            className="p-2 focus:outline-none text-white flex items-center justify-center"
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
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/ios-filled/50/home--v1.png"
                alt="Home Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Beranda</span>}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/ios-filled/50/workers-male.png"
                alt="Employee Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Karyawan</span>}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/ios-filled/50/calendar.png"
                alt="Attendance Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Absensi</span>}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/ios-filled/50/task.png"
                alt="Position Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Jabatan</span>}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/ios-filled/50/overtime.png"
                alt="Leave Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Cuti</span>}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
              <img
                src="https://img.icons8.com/?size=100&id=484&format=png&color=000000"
                alt="Salary Icon"
                className="w-6 h-6 mr-3"
              />
              {isOpen && <span>Data Gaji</span>}
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex items-center px-4 py-2 hover:bg-blue-600 cursor-pointer">
            <img
              src="https://img.icons8.com/ios-filled/50/logout-rounded-left.png"
              alt="Logout Icon"
              className="w-6 h-6 mr-3"
            />
            {isOpen && <span>Logout</span>}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100">{/* Content goes here */}</div>
    </div>
  );
}

export default Sidebar;
