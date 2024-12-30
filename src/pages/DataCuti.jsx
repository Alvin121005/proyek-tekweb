import React, { useState, useEffect } from "react";
import cutiDataJson from "../data/datacuti.json"; // Mengimpor data cuti dari file JSON

const DataCuti = () => {
  // State untuk menyimpan data cuti karyawan
  const [cutiData, setCutiData] = useState([]);
  // State untuk melacak dropdown yang aktif (untuk aksi Terima, Tolak, Hapus)
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Menggunakan hook useEffect untuk men-set data cuti saat pertama kali komponen dimuat
  useEffect(() => {
    setCutiData(cutiDataJson); // Menyimpan data dari datacuti.json ke state cutiData
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  // Fungsi untuk memperbarui status cuti (Diterima atau Ditolak)
  const updateStatus = (id, status) => {
    setCutiData((prevData) =>
      prevData.map(
        (item) => (item.id === id ? { ...item, status: status } : item) // Menemukan item berdasarkan ID dan mengubah status
      )
    );
    setActiveDropdown(null); // Menutup dropdown setelah aksi selesai
  };

  // Fungsi untuk menghapus data cuti berdasarkan ID
  const deleteCuti = (id) => {
    setCutiData((prevData) => prevData.filter((item) => item.id !== id)); // Menghapus item berdasarkan ID
    setActiveDropdown(null); // Menutup dropdown setelah aksi selesai
  };

  // Fungsi untuk men-toggle (membuka atau menutup) dropdown berdasarkan ID
  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id)); // Jika dropdown sudah terbuka, tutup. Jika tidak, buka dropdown tersebut.
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {" "}
      {/* Wrapper dengan padding dan latar belakang abu-abu */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Data Cuti Karyawan
      </h1>
      <div className="bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full table-auto rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
              {/* Header tabel */}
              <th className="text-left px-6 py-3">No</th>
              <th className="text-left px-6 py-3">Nama Lengkap</th>
              <th className="text-left px-6 py-3">Keterangan</th>
              <th className="text-left px-6 py-3">Tanggal Cuti</th>
              <th className="text-left px-6 py-3">Akhir Cuti</th>
              <th className="text-left px-6 py-3">Lama Cuti</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterasi data cuti dan menampilkan tiap baris */}
            {cutiData.map((item, index) => (
              <tr key={item.id} className="text-center">
                {/* Menampilkan nomor urut */}
                <td className="border border-gray-300 px-6 py-3">
                  {index + 1}
                </td>
                {/* Menampilkan nama karyawan */}
                <td className="border border-gray-300 px-6 py-3">
                  {item.nama}
                </td>
                {/* Menampilkan keterangan cuti */}
                <td className="border border-gray-300 px-6 py-3">
                  {item.keterangan}
                </td>
                {/* Menampilkan tanggal cuti */}
                <td className="border border-gray-300 px-6 py-3">
                  {item.tanggalCuti}
                </td>
                {/* Menampilkan akhir cuti */}
                <td className="border border-gray-300 px-6 py-3">
                  {item.akhirCuti}
                </td>
                {/* Menampilkan lama cuti */}
                <td className="border border-gray-300 px-6 py-3">
                  {item.lamaCuti}
                </td>
                {/* Menampilkan status cuti dengan warna berdasarkan status */}
                <td
                  className={`border border-gray-300 px-6 py-3 font-semibold ${
                    item.status === "Diterima"
                      ? "text-green-500"
                      : item.status === "Ditolak"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {item.status}
                </td>
                {/* Menampilkan tombol aksi untuk setiap baris */}
                <td className="border border-gray-300 px-6 py-3">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.id)} // Men-toggle dropdown
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        id={`menu-button-${item.id}`}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                      >
                        Aksi
                      </button>
                    </div>

                    {/* Menampilkan dropdown jika activeDropdown cocok dengan ID item */}
                    {activeDropdown === item.id && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`menu-button-${item.id}`}
                      >
                        <div className="py-1" role="none">
                          {/* Tombol Terima untuk memperbarui status menjadi Diterima */}
                          <button
                            onClick={() => updateStatus(item.id, "Diterima")}
                            className="block px-4 py-2 text-sm text-green-600 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                          >
                            Terima
                          </button>
                          {/* Tombol Tolak untuk memperbarui status menjadi Ditolak */}
                          <button
                            onClick={() => updateStatus(item.id, "Ditolak")}
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                          >
                            Tolak
                          </button>
                          {/* Tombol Hapus untuk menghapus data cuti */}
                          <button
                            onClick={() => deleteCuti(item.id)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataCuti; // Mengekspor komponen DataCuti untuk digunakan di bagian lain aplikasi
