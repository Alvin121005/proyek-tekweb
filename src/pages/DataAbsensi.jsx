// File: pages/DataAbsensi.jsx
import React, { useEffect, useState } from "react";
import absensiData from "../data/absensi.json";

function DataAbsensi() {
  const [absensi, setAbsensi] = useState([]);

  useEffect(() => {
    setAbsensi(absensiData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Absensi</h1>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="text-left px-6 py-3">No</th>
            <th className="text-left px-6 py-3">Nama</th>
            <th className="text-left px-6 py-3">Tanggal</th>
            <th className="text-left px-6 py-3">Jam Masuk</th>
            <th className="text-left px-6 py-3">Jam Keluar</th>
            <th className="text-left px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {absensi.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{item.nama}</td>
              <td className="px-6 py-3">{item.tanggal}</td>
              <td className="px-6 py-3">{item.jamMasuk}</td>
              <td className="px-6 py-3">{item.jamKeluar}</td>
              <td
                className={`px-6 py-3 ${
                  item.status === "Terlambat"
                    ? "text-yellow-500 font-semibold"
                    : item.status === "Izin"
                    ? "text-blue-500 font-semibold"
                    : "text-green-500 font-semibold"
                }`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataAbsensi;
