import React, { useEffect, useState } from "react";
import dataKaryawan from "../data/karyawan.json";

// SearchBar component for searching karyawan based on various fields.
function SearchBar({ search, handleSearchChange, handleSearchClick }) {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange} // Handles input change for search
        placeholder="Cari berdasarkan nama, jabatan, email, atau telepon..."
        className="border p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearchClick} // Handles search button click
        className="bg-blue-500 text-white px-6 py-2 rounded-lg ml-2 hover:bg-blue-600 transition"
      >
        Cari
      </button>
    </div>
  );
}

// FormKaryawan component handles input fields for adding or updating karyawan data.
function FormKaryawan({ form, handleChange, handleAdd, handleUpdate, isEdit }) {
  return (
    <div className="mb-4 flex flex-wrap gap-4">
      {/* Input fields for karyawan details */}
      <input
        type="text"
        name="nama"
        value={form.nama}
        onChange={handleChange}
        placeholder="Nama"
        className="border p-2 rounded-lg w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="jabatan"
        value={form.jabatan}
        onChange={handleChange}
        placeholder="Jabatan"
        className="border p-2 rounded-lg w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded-lg w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="telepon"
        value={form.telepon}
        onChange={handleChange}
        placeholder="Telepon"
        className="border p-2 rounded-lg w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Add or Update button based on isEdit flag */}
      {isEdit ? (
        <button
          onClick={handleUpdate} // Handles update action
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleAdd} // Handles add action
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Tambah
        </button>
      )}
    </div>
  );
}

// TableKaryawan component renders karyawan data in a table format.
function TableKaryawan({ filteredKaryawan, handleEdit, handleDelete }) {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
          {/* Table Headers */}
          <th className="text-left px-6 py-3">No</th>
          <th className="text-left px-6 py-3">Nama</th>
          <th className="text-left px-6 py-3">Jabatan</th>
          <th className="text-left px-6 py-3">Email</th>
          <th className="text-left px-6 py-3">Telepon</th>
          <th className="text-left px-6 py-3">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filteredKaryawan.map((item, index) => (
          <tr key={item.id} className="hover:bg-gray-100">
            {/* Display karyawan data */}
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{item.nama}</td>
            <td className="px-6 py-3">{item.jabatan}</td>
            <td className="px-6 py-3">{item.email}</td>
            <td className="px-6 py-3">{item.telepon}</td>
            <td className="px-6 py-3 flex space-x-2">
              {/* Edit and Delete buttons */}
              <button
                onClick={() => handleEdit(item)} // Handle edit
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)} // Handle delete
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DataKaryawan() {
  // State management for karyawan data, search, form, edit state, etc.
  const [karyawan, setKaryawan] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    id: null,
    nama: "",
    jabatan: "",
    email: "",
    telepon: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setKaryawan(dataKaryawan); // Initialize karyawan data on mount
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    console.log(`Mencari karyawan dengan kata kunci: ${search}`);
  };

  // Handle adding new karyawan
  const handleAdd = () => {
    if (form.nama && form.jabatan && form.email && form.telepon) {
      const newKaryawan = {
        ...form,
        id: karyawan.length + 1, // Generate unique id
      };
      setKaryawan([...karyawan, newKaryawan]); // Add new karyawan to the list
      setForm({ id: null, nama: "", jabatan: "", email: "", telepon: "" }); // Reset form
    }
  };

  // Handle editing existing karyawan
  const handleEdit = (item) => {
    setForm(item);
    setIsEdit(true); // Set isEdit to true for update mode
  };

  // Handle updating karyawan data
  const handleUpdate = () => {
    const updatedKaryawan = karyawan.map(
      (item) => (item.id === form.id ? { ...form } : item) // Update karyawan by id
    );
    setKaryawan(updatedKaryawan);
    setForm({ id: null, nama: "", jabatan: "", email: "", telepon: "" });
    setIsEdit(false); // Reset to add mode
  };

  // Handle deleting karyawan
  const handleDelete = (id) => {
    const filteredKaryawan = karyawan.filter((item) => item.id !== id);
    setKaryawan(filteredKaryawan); // Remove karyawan by id
  };

  // Filter karyawan based on search input
  const filteredKaryawan = karyawan.filter((item) =>
    [item.nama, item.jabatan, item.email, item.telepon].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Data Karyawan</h1>

      {/* SearchBar component for searching karyawan */}
      <SearchBar
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />

      {/* FormKaryawan component for adding or editing karyawan */}
      <FormKaryawan
        form={form}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        isEdit={isEdit}
      />

      {/* TableKaryawan component to display the list of karyawan */}
      <TableKaryawan
        filteredKaryawan={filteredKaryawan}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default DataKaryawan;
