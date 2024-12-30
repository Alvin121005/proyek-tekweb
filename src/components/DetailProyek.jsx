import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data proyek
const proyekDetailData = {
  // Contoh data proyek
  a: {
    name: "Proyek A",
    description:
      "Detail lengkap tentang Proyek A yang berfokus pada pengembangan aplikasi mobile.",
    team: ["Anggota 1", "Anggota 2", "Anggota 3", "Anggota 4"],
    tasks: [
      { id: 1, name: "Analisis Kebutuhan", status: "Selesai", revision: false },
      { id: 2, name: "Desain UI/UX", status: "Dalam Proses", revision: true },
      {
        id: 3,
        name: "Pengembangan Frontend",
        status: "Belum Dimulai",
        revision: false,
      },
      { id: 4, name: "Pengujian", status: "Belum Dimulai", revision: false },
    ],
    deadline: "2024-12-31",
    budget: "$10,000",
    progress: "50%",
  },
  b: {
    name: "Proyek B",
    description:
      "Detail lengkap tentang Proyek B yang berfokus pada pengembangan website e-commerce.",
    team: ["Anggota 5", "Anggota 6", "Anggota 7"],
    tasks: [
      { id: 1, name: "Riset Pasar", status: "Selesai", revision: false },
      {
        id: 2,
        name: "Desain Wireframe",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 3,
        name: "Pengembangan Backend",
        status: "Belum Dimulai",
        revision: true,
      },
      { id: 4, name: "Deployment", status: "Belum Dimulai", revision: false },
    ],
    deadline: "2025-01-15",
    budget: "$15,000",
    progress: "30%",
  },
  c: {
    name: "Proyek C",
    description:
      "Proyek C adalah proyek pengembangan sistem manajemen inventaris.",
    team: ["Anggota 8", "Anggota 9"],
    tasks: [
      {
        id: 1,
        name: "Desain Database",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 2,
        name: "Implementasi API",
        status: "Belum Dimulai",
        revision: false,
      },
      {
        id: 3,
        name: "Pengujian Sistem",
        status: "Belum Dimulai",
        revision: true,
      },
    ],
    deadline: "2025-02-10",
    budget: "$8,000",
    progress: "20%",
  },
  d: {
    name: "Proyek D",
    description:
      "Proyek D adalah proyek konsultasi bisnis untuk meningkatkan efisiensi perusahaan.",
    team: ["Anggota 10", "Anggota 11", "Anggota 12"],
    tasks: [
      { id: 1, name: "Pemetaan Proses", status: "Selesai", revision: false },
      {
        id: 2,
        name: "Identifikasi Masalah",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 3,
        name: "Penerapan Solusi",
        status: "Belum Dimulai",
        revision: false,
      },
    ],
    deadline: "2025-03-20",
    budget: "$12,000",
    progress: "40%",
  },
  e: {
    name: "Proyek E",
    description:
      "Proyek E adalah pengembangan aplikasi berbasis AI untuk prediksi pasar.",
    team: ["Anggota 13", "Anggota 14", "Anggota 15", "Anggota 16"],
    tasks: [
      { id: 1, name: "Pengumpulan Data", status: "Selesai", revision: false },
      {
        id: 2,
        name: "Pelatihan Model",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 3,
        name: "Integrasi ke Aplikasi",
        status: "Belum Dimulai",
        revision: false,
      },
    ],
    deadline: "2025-04-10",
    budget: "$20,000",
    progress: "60%",
  },
  f: {
    name: "Proyek F",
    description:
      "Proyek F adalah pengembangan platform edukasi berbasis video.",
    team: ["Anggota 17", "Anggota 18", "Anggota 19"],
    tasks: [
      { id: 1, name: "Riset Konten", status: "Selesai", revision: false },
      {
        id: 2,
        name: "Pembuatan Video Pembelajaran",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 3,
        name: "Pengembangan Platform",
        status: "Belum Dimulai",
        revision: true,
      },
    ],
    deadline: "2025-05-15",
    budget: "$25,000",
    progress: "25%",
  },
  g: {
    name: "Proyek G",
    description:
      "Proyek G adalah pengembangan aplikasi kesehatan berbasis IoT untuk memantau kesehatan pengguna.",
    team: ["Anggota 20", "Anggota 21", "Anggota 22"],
    tasks: [
      { id: 1, name: "Desain Hardware", status: "Selesai", revision: false },
      {
        id: 2,
        name: "Pengembangan Aplikasi",
        status: "Dalam Proses",
        revision: false,
      },
      {
        id: 3,
        name: "Integrasi IoT",
        status: "Belum Dimulai",
        revision: false,
      },
    ],
    deadline: "2025-06-30",
    budget: "$50,000",
    progress: "40%",
  },
};

// Komponen untuk detail proyek
const DetailProyek = () => {
  // Mengambil parameter ID dari URL
  const { id } = useParams();
  // Hook untuk navigasi
  const navigate = useNavigate();
  // Data proyek berdasarkan ID
  const proyek = proyekDetailData[id];

  // Jika proyek tidak ditemukan, tampilkan pesan error
  if (!proyek) {
    return <p>Proyek tidak ditemukan.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white min-h-screen p-8">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
      >
        Kembali
      </button>

      {/* Judul dan deskripsi proyek */}
      <h1 className="text-3xl font-extrabold text-gray-800">{proyek.name}</h1>
      <p className="mt-4 text-lg text-gray-600">{proyek.description}</p>

      {/* Informasi anggota tim */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Anggota Tim</h2>
        <ul className="list-disc pl-5 space-y-2">
          {proyek.team.map((member, index) => (
            <li key={index} className="text-lg text-gray-600">
              {member}
            </li>
          ))}
        </ul>
      </div>

      {/* Informasi tugas */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Tugas</h2>
        <ul className="list-none space-y-4">
          {proyek.tasks.map((task) => (
            <li
              key={task.id}
              className={`bg-white shadow-lg p-4 rounded-lg flex justify-between items-center ${
                task.revision
                  ? "border-l-4 border-red-600"
                  : "border-l-4 border-green-600"
              }`}
            >
              <span className="text-lg text-gray-700">{task.name}</span>
              <span
                className={`px-2 py-1 text-sm rounded-lg ${
                  task.status === "Selesai"
                    ? "bg-green-100 text-green-800"
                    : task.status === "Dalam Proses"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {task.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tenggat waktu */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Tenggat Waktu</h2>
        <p className="text-lg text-gray-600">{proyek.deadline}</p>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Progress</h2>
        <p className="text-lg text-gray-600">{proyek.progress}</p>
      </div>

      {/* Anggaran */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Anggaran</h2>
        <p className="text-lg text-gray-600">{proyek.budget}</p>
      </div>
    </div>
  );
};

export default DetailProyek;
