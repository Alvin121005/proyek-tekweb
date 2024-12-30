import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import dataKaryawan from "../data/karyawan.json";

// Data gaji per jabatan
const gajiPerJabatan = {
  CEO: 50000000,
  Manager: 20000000,
  Staff: 10000000,
  HRD: 15000000,
  Finance: 12000000,
  "IT Support": 13000000,
  Marketing: 14000000,
  Security: 8000000,
  Admin: 9000000,
};

// Tunjangan per jabatan
const tunjanganJabatan = {
  CEO: 5000000,
  Manager: 3000000,
  Staff: 1500000,
  HRD: 2000000,
  Finance: 1800000,
  "IT Support": 1700000,
  Marketing: 2000000,
  Security: 800000,
  Admin: 1000000,
};

// Potongan standar
const potongan = {
  pajak: 0.05, // 5% dari gaji pokok
  asuransi: 500000,
};

const DataGaji = () => {
  // Fungsi untuk mencetak slip gaji
  const handlePrint = (karyawan) => {
    // Menghitung gaji pokok, tunjangan, potongan, dan gaji bersih
    const gajiPokok = gajiPerJabatan[karyawan.jabatan] || 0;
    const tunjangan = tunjanganJabatan[karyawan.jabatan] || 0;
    const potonganPajak = gajiPokok * potongan.pajak;
    const totalPotongan = potonganPajak + potongan.asuransi;
    const totalPendapatan = gajiPokok + tunjangan;
    const gajiBersih = totalPendapatan - totalPotongan;

    // Membuat dokumen PDF
    const doc = new jsPDF();
    doc.setFont("times", "normal");
    doc.setFontSize(14);

    // Header dokumen
    doc.text("PT. SIKARYAWAN INDONESIA", 105, 10, { align: "center" });
    doc.setFontSize(11);
    doc.text(
      "Jl. Mawar No. 123, Jakarta Selatan, Telp: 021-12345678",
      105,
      16,
      { align: "center" }
    );
    doc.setFontSize(12);
    doc.text("SLIP GAJI KARYAWAN", 105, 25, { align: "center" });

    // Informasi karyawan
    doc.text(`NIK: ${karyawan.id}`, 20, 40);
    doc.text(`Nama: ${karyawan.nama}`, 20, 45);
    doc.text(`Jabatan: ${karyawan.jabatan}`, 20, 50);
    doc.text(`Status: Karyawan Tetap`, 20, 55);

    // Tabel pendapatan dan potongan
    doc.autoTable({
      startY: 65,
      head: [["PENGHASILAN", "JUMLAH (Rp)", "POTONGAN", "JUMLAH (Rp)"]],
      body: [
        [
          "Gaji Pokok",
          gajiPokok.toLocaleString(),
          "PPh 21",
          potonganPajak.toLocaleString(),
        ],
        [
          "Tunjangan Jabatan",
          tunjangan.toLocaleString(),
          "Asuransi",
          potongan.asuransi.toLocaleString(),
        ],
        ["", "", "Total Potongan", totalPotongan.toLocaleString()],
        ["Total Pendapatan", totalPendapatan.toLocaleString(), "", ""],
      ],
      styles: { halign: "right" },
      headStyles: { fillColor: [220, 220, 220], halign: "center" },
    });

    // Gaji bersih
    doc.text(`PENERIMAAN BERSIH (A - B)`, 20, doc.lastAutoTable.finalY + 10);
    doc.text(
      `= Rp ${gajiBersih.toLocaleString()}`,
      105,
      doc.lastAutoTable.finalY + 10
    );

    // Tanggal dan tanda tangan
    const date = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    doc.text(`Jakarta, ${date}`, 140, doc.lastAutoTable.finalY + 30);
    doc.text("Hormat Kami,", 140, doc.lastAutoTable.finalY + 45);
    doc.text("Alvindra Ramadhan", 140, doc.lastAutoTable.finalY + 65);
    doc.text("CEO", 140, doc.lastAutoTable.finalY + 70);

    // Menyimpan file PDF
    doc.save(`Slip_Gaji_${karyawan.nama}.pdf`);
  };

  return (
    <div className="p-8">
      {/* Judul halaman */}
      <h1 className="text-2xl font-bold mb-6">Data Gaji Karyawan</h1>

      {/* Tabel data karyawan */}
      <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
            <th className="border border-gray-300 px-4 py-2 rounded-tl-lg">
              ID
            </th>
            <th className="border border-gray-300 px-4 py-2">Nama</th>
            <th className="border border-gray-300 px-4 py-2">Jabatan</th>
            <th className="border border-gray-300 px-4 py-2">Gaji (Rp)</th>
            <th className="border border-gray-300 px-4 py-2 rounded-tr-lg">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Mengiterasi data karyawan */}
          {dataKaryawan.map((karyawan, index) => (
            <tr
              key={karyawan.id}
              className={`hover:bg-gray-100 ${
                index === dataKaryawan.length - 1
                  ? "rounded-bl-lg rounded-br-lg"
                  : ""
              }`}
            >
              <td className="border border-gray-300 px-4 py-2 text-center">
                {karyawan.id}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {karyawan.nama}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {karyawan.jabatan}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-right">
                {/* Menampilkan gaji berdasarkan jabatan */}
                {gajiPerJabatan[karyawan.jabatan]?.toLocaleString() || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {/* Tombol untuk mencetak slip gaji */}
                <button
                  onClick={() => handlePrint(karyawan)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGaji;
