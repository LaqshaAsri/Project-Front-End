import React from "react";
import "../../styles/StyleF.css";
import { Link } from "react-router-dom";

class Panduan extends React.Component {
  render() {
    return (
      <>
        <title>Panduan Pasien | Team Medicine</title>
        <div className="felix-page page-wrapper">
          <main className="page-content bodyy">
            <div className="container guide-box mt-4">
              <h2 className="text-center mb-3">Panduan Sebelum & Saat Berkunjung</h2>
              <ul>
                <li>1. Pastikan sudah melakukan booking janji terlebih dahulu.</li>
                <li>2. Datang 10–15 menit sebelum jadwal agar tidak terburu-buru.</li>
                <li>3. Bawa kartu identitas dan bukti pemesanan (boleh digital).</li>
                <li>4. Laporkan diri ke meja resepsionis untuk verifikasi data.</li>
                <li>5. Tunggu giliran sesuai antrian.</li>
                <li>6. Setelah konsultasi, ambil resep atau hasil pemeriksaan bila ada.</li>
                <li>7. Jangan ragu bertanya ke petugas bila ada hal yang belum jelas.</li>
              </ul>

              <div className="text-center mt-3">
                <Link to={"/layanan"} className="btn-toska">
                  Kembali ke Layanan
                </Link>
              </div>
            </div>
          </main>

          <footer>
            <div className="footer-content">
              <p>© 2025 Team Medicine | Felix</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Panduan;
