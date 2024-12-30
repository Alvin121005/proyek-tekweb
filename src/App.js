import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Mengimpor komponen dan halaman yang akan digunakan
import Sidebar from "./components/Sidebar";
import DataKaryawan from "./pages/DataKaryawan";
import DataAbsensi from "./pages/DataAbsensi";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Komponen untuk proteksi rute
import Settings from "./pages/Settings";
import Proyek from "./pages/Proyek";
import DetailProyek from "./components/DetailProyek"; // Pastikan DetailProyek diimpor
import DataCuti from "./pages/DataCuti"; // Mengimpor halaman DataCuti
import DataGaji from "./pages/DataGaji"; // Mengimpor halaman DataGaji

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar hanya ditampilkan jika user terautentikasi */}
        {localStorage.getItem("isAuthenticated") === "true" && <Sidebar />}

        {/* Area utama aplikasi, tempat untuk menampilkan halaman */}
        <div className="flex-1">
          <Routes>
            {/* Route untuk halaman Login */}
            <Route path="/" element={<LoginPage />} />

            {/* Route untuk halaman Dashboard, dilindungi oleh ProtectedRoute */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Data Karyawan, dilindungi oleh ProtectedRoute */}
            <Route
              path="/data-karyawan"
              element={
                <ProtectedRoute>
                  <DataKaryawan />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Data Absensi, dilindungi oleh ProtectedRoute */}
            <Route
              path="/data-absensi"
              element={
                <ProtectedRoute>
                  <DataAbsensi />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Settings, dilindungi oleh ProtectedRoute */}
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Data Proyek, dilindungi oleh ProtectedRoute */}
            <Route
              path="/data-proyek"
              element={
                <ProtectedRoute>
                  <Proyek />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Detail Proyek berdasarkan ID, dilindungi oleh ProtectedRoute */}
            <Route
              path="/proyek/:id"
              element={
                <ProtectedRoute>
                  <DetailProyek />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Data Cuti, dilindungi oleh ProtectedRoute */}
            <Route
              path="/data-cuti"
              element={
                <ProtectedRoute>
                  <DataCuti />
                </ProtectedRoute>
              }
            />

            {/* Route untuk halaman Data Gaji, dilindungi oleh ProtectedRoute */}
            <Route
              path="/data-gaji"
              element={
                <ProtectedRoute>
                  <DataGaji />
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
