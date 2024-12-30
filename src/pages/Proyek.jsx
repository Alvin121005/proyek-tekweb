import React from "react";
import { Link } from "react-router-dom";

// Data untuk daftar proyek, bisa diperoleh dari API atau database di masa depan
const proyekData = [
  {
    id: "a",
    name: "Proyek A",
    description: "Klik untuk melihat detail Proyek A",
  },
  {
    id: "b",
    name: "Proyek B",
    description: "Klik untuk melihat detail Proyek B",
  },
  {
    id: "c",
    name: "Proyek C",
    description: "Klik untuk melihat detail Proyek C",
  },
  {
    id: "d",
    name: "Proyek D",
    description: "Klik untuk melihat detail Proyek D",
  },
  {
    id: "e",
    name: "Proyek E",
    description: "Klik untuk melihat detail Proyek E",
  },
  {
    id: "f",
    name: "Proyek F",
    description: "Klik untuk melihat detail Proyek F",
  },
  {
    id: "g",
    name: "Proyek G",
    description: "Klik untuk melihat detail Proyek G",
  },
];

// Komponen untuk menampilkan daftar proyek
const Proyek = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Judul halaman */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Daftar Proyek
      </h1>

      {/* Menampilkan grid dengan kartu-kartu proyek */}
      <div className="grid grid-cols-1 gap-6">
        {/* Iterasi melalui data proyek dan menampilkan link ke setiap proyek */}
        {proyekData.map((proyek) => (
          <Link
            key={proyek.id} // Menetapkan key unik untuk setiap elemen dalam list
            to={`/proyek/${proyek.id}`} // Routing ke halaman detail proyek berdasarkan ID
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-200 w-full justify-self-center"
          >
            {/* Menampilkan nama proyek */}
            <h2 className="text-xl font-semibold text-center">{proyek.name}</h2>

            {/* Menampilkan deskripsi proyek */}
            <p className="mt-2 text-sm text-center">{proyek.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Proyek;
