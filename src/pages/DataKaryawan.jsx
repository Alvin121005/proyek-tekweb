import React, { useEffect, useState } from "react";
import dataKaryawan from "../data/karyawan.json";

function DataKaryawan() {
  const [karyawan, setKaryawan] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nama: "",
    jabatan: "",
    email: "",
    telepon: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setKaryawan(dataKaryawan);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (form.nama && form.jabatan && form.email && form.telepon) {
      const newKaryawan = {
        ...form,
        id: karyawan.length + 1,
      };
      setKaryawan([...karyawan, newKaryawan]);
      setForm({ id: null, nama: "", jabatan: "", email: "", telepon: "" });
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEdit(true);
  };

  const handleUpdate = () => {
    const updatedKaryawan = karyawan.map((item) =>
      item.id === form.id ? { ...form } : item
    );
    setKaryawan(updatedKaryawan);
    setForm({ id: null, nama: "", jabatan: "", email: "", telepon: "" });
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    const filteredKaryawan = karyawan.filter((item) => item.id !== id);
    setKaryawan(filteredKaryawan);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Karyawan</h1>

      <div className="mb-4">
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          name="jabatan"
          value={form.jabatan}
          onChange={handleChange}
          placeholder="Jabatan"
          className="border p-2 rounded mr-2"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          name="telepon"
          value={form.telepon}
          onChange={handleChange}
          placeholder="Telepon"
          className="border p-2 rounded mr-2"
        />
        {isEdit ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tambah
          </button>
        )}
      </div>

      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="text-left px-6 py-3">No</th>
            <th className="text-left px-6 py-3">Nama</th>
            <th className="text-left px-6 py-3">Jabatan</th>
            <th className="text-left px-6 py-3">Email</th>
            <th className="text-left px-6 py-3">Telepon</th>
            <th className="text-left px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {karyawan.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{item.nama}</td>
              <td className="px-6 py-3">{item.jabatan}</td>
              <td className="px-6 py-3">{item.email}</td>
              <td className="px-6 py-3">{item.telepon}</td>
              <td className="px-6 py-3 flex space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataKaryawan;
