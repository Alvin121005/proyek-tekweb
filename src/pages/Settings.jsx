import React from "react";

function Settings() {
  return (
    <div className="flex flex-col h-full w-full bg-gray-300">
      {/* Bagian Header */}
      <div className="flex items-center justify-between bg-gray-300 text-black px-6 py-4 shadow-md">
        {/* Judul halaman Settings */}
        <h1 className="text-xl font-bold">Settings</h1>
        {/* Tempat untuk kontrol tambahan di header (kosong saat ini) */}
        <div className="flex items-center gap-4"></div>
      </div>

      {/* Bagian Konten Utama */}
      <div className="flex flex-col p-6 space-y-6">
        {/* Bagian Profil: Menampilkan avatar dan detail pengguna */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4">
            {/* Avatar Pengguna */}
            <img
              src="https://cdn3.iconfinder.com/data/icons/businessman-and-business-woman-avatar/64/Businessman_business_woman_Avatar-10-512.png"
              alt="User Avatar"
              className="w-20 h-20 rounded-full border-4 border-blue-900"
            />
            <div>
              {/* Nama Pengguna */}
              <h2 className="text-xl font-semibold text-blue-900">
                Alvindra Ramadhan
              </h2>
              {/* Email Pengguna */}
              <p className="text-sm text-black">alvin.ceo@example.com</p>
            </div>
          </div>
        </div>

        {/* Bagian Pengaturan Umum */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">
            Pengaturan Umum
          </h3>
          <div className="space-y-4">
            {/* Tombol Ubah Email */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000"
                alt="Ikon Ubah Email"
                className="w-6 h-6 mr-3"
              />
              Ubah Email
            </button>
            {/* Tombol Ubah Password */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/?size=100&id=10480&format=png&color=000000"
                alt="Ikon Ubah Password"
                className="w-6 h-6 mr-3"
              />
              Ubah Password
            </button>
            {/* Tombol Pengaturan Bahasa */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/?size=100&id=30633&format=png&color=000000"
                alt="Ikon Bahasa"
                className="w-6 h-6 mr-3"
              />
              Bahasa
            </button>
          </div>
        </div>

        {/* Bagian Informasi */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">
            Informasi
          </h3>
          <div className="space-y-4">
            {/* Tombol Tentang Aplikasi */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/ios-filled/50/info.png"
                alt="Ikon Tentang Aplikasi"
                className="w-6 h-6 mr-3"
              />
              Tentang Aplikasi
            </button>
            {/* Tombol Syarat & Ketentuan */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/ios-filled/50/document.png"
                alt="Ikon Syarat & Ketentuan"
                className="w-6 h-6 mr-3"
              />
              Syarat & Ketentuan
            </button>
            {/* Tombol Kebijakan Privasi */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/ios-filled/50/shield.png"
                alt="Ikon Kebijakan Privasi"
                className="w-6 h-6 mr-3"
              />
              Kebijakan Privasi
            </button>
            {/* Tombol Bagikan Aplikasi */}
            <button className="flex items-center w-full text-left text-gray-700 hover:text-blue-600">
              <img
                src="https://img.icons8.com/?size=100&id=98959&format=png&color=000000"
                alt="Ikon Bagikan Aplikasi"
                className="w-6 h-6 mr-3"
              />
              Bagikan Aplikasi Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
