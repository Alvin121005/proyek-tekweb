import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Komponen ProtectedRoute
 *
 * Fungsi: Melindungi rute tertentu dengan memeriksa status autentikasi pengguna.
 * Jika pengguna tidak terautentikasi, mereka akan diarahkan ke halaman login ("/").
 *
 * @param {React.ReactNode} children - Komponen anak yang hanya dapat diakses jika pengguna terautentikasi.
 * @returns {React.ReactNode} Komponen anak jika terautentikasi, atau navigasi ke halaman login.
 */
const ProtectedRoute = ({ children }) => {
  // Periksa status autentikasi dari localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // Jika tidak terautentikasi, arahkan pengguna ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Jika terautentikasi, tampilkan komponen anak
  return children;
};

export default ProtectedRoute;
