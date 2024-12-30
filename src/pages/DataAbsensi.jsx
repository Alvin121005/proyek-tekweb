import React, { useEffect, useState } from "react";
import absensiData from "../data/absensi.json"; // Mengimpor data absensi dari file JSON lokal

function DataAbsensi() {
  const [absensi, setAbsensi] = useState([]); // Menyimpan data absensi di state

  // Mengambil data absensi dan menyimpannya ke dalam state saat komponen pertama kali dimuat
  useEffect(() => {
    setAbsensi(absensiData); // Mengatur data absensi dari JSON ke state
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {" "}
      {/* Kontainer utama dengan padding dan latar belakang abu-abu */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        {" "}
        {/* Judul halaman dengan ukuran teks besar */}
        Data Absensi Karyawan
      </h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        {" "}
        {/* Kontainer tabel dengan bayangan, border, dan pembungkus overflow horizontal */}
        <table className="min-w-full table-auto">
          {" "}
          {/* Tabel dengan lebar minimal dan auto layout */}
          <thead>
            <tr className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
              {" "}
              {/* Baris header tabel dengan latar belakang gradasi biru */}
              <th className="text-left px-6 py-3">No</th>
              <th className="text-left px-6 py-3">Nama</th>
              <th className="text-left px-6 py-3">Tanggal</th>
              <th className="text-left px-6 py-3">Jam Masuk</th>
              <th className="text-left px-6 py-3">Jam Keluar</th>
              <th className="text-left px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Melakukan iterasi data absensi dan menampilkan setiap baris */}
            {absensi.map((item, index) => (
              <tr
                key={item.id} // Menggunakan ID untuk key setiap baris agar efisien dalam re-render
                className="hover:bg-gray-50 transition duration-200" // Menambahkan efek hover pada setiap baris
              >
                <td className="px-6 py-4 text-gray-700">{index + 1}</td>{" "}
                {/* Nomor urut */}
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {item.nama}
                </td>{" "}
                {/* Nama karyawan */}
                <td className="px-6 py-4 text-gray-600">{item.tanggal}</td>{" "}
                {/* Tanggal absensi */}
                <td className="px-6 py-4 text-gray-600">
                  {item.jamMasuk}
                </td>{" "}
                {/* Jam masuk */}
                <td className="px-6 py-4 text-gray-600">
                  {item.jamKeluar}
                </td>{" "}
                {/* Jam keluar */}
                <td
                  className={`px-6 py-4 text-center font-semibold ${
                    // Menentukan kelas warna status berdasarkan status absensi
                    item.status === "Terlambat"
                      ? "text-yellow-500" // Terlambat: warna kuning
                      : item.status === "Izin" || item.status === "Sakit"
                      ? "text-blue-500" // Izin atau Sakit: warna biru
                      : item.status === "Tidak Hadir"
                      ? "text-red-500" // Tidak Hadir: warna merah
                      : "text-green-500" // Status lainnya: warna hijau
                  }`}
                >
                  {item.status} {/* Menampilkan status absensi */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataAbsensi; // Mengekspor komponen DataAbsensi untuk digunakan di bagian lain aplikasi
