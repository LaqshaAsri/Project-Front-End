import React from "react";
import "../../styles/StyleJ.css";
import { Link } from "react-router-dom";

class Riwayat extends React.Component {
  render() {
    return (
      <>
        <title>Riwayat Interaksi | Team Medicine</title>
        <div className="juan-page">
          <header className="container">
            <section className="card" style={{ backgroundColor: "#0b7285", color: "white" }}>
              <h3>Riwayat Interaksi</h3>
              <p className="small-muted" style={{ color: "white" }}>
                Halaman ini menampilkan ringkasan interaksi Anda dengan layanan — misalnya pengiriman keluhan atau konfirmasi jadwal.
              </p>
            </section>
          </header>

          <main className="container">
            <section className="card">
              <h3>Riwayat Terbaru</h3>
              <p className="small-muted">Daftar interaksi akan membantu Anda melacak komunikasi sebelumnya dengan layanan kami.</p>
              <ul>
                <li>
                  <strong>12 Okt 2025</strong> — Keluhan: Sakit perut — Ditindaklanjuti oleh Dr. Juan (telepon)
                </li>
                <li>
                  <strong>26 Sep 2025</strong> — Permintaan jadwal vaksin — Dikonfirmasi via SMS
                </li>
                <li>
                  <strong>05 Agu 2025</strong> — Konsultasi dermatologi — Rujukan untuk pemeriksaan lanjutan
                </li>
              </ul>
            </section>

            <section className="card">
              <h3>Privasi & Penyimpanan</h3>
              <p>
                Data riwayat disimpan sesuai kebijakan privasi dan hanya digunakan untuk keperluan pelayanan. Jika Anda ingin menghapus riwayat tertentu, hubungi tim kami melalui <Link to="/kontak">Kontak</Link>.
              </p>
            </section>
          </main>

          <footer>
            <div className="footer-content">
              <p>© 2025 Team Medicine | Juan</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default Riwayat;
