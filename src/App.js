import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DataKaryawan from "./pages/DataKaryawan";
import DataAbsensi from "./pages/DataAbsensi";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data-karyawan" element={<DataKaryawan />} />
            <Route path="/data-absensi" element={<DataAbsensi />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
