import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DataKaryawan from "./pages/DataKaryawan";
import DataAbsensi from "./pages/DataAbsensi";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {localStorage.getItem("isAuthenticated") === "true" && <Sidebar />}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-karyawan"
              element={
                <ProtectedRoute>
                  <DataKaryawan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-absensi"
              element={
                <ProtectedRoute>
                  <DataAbsensi />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
