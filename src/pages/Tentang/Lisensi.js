import React from "react";
import "../../styles/StyleM.css";

class Lisensi extends React.Component {
  render() {
    return (
      <>
        <div className="maulana-page">
          <header className="text-center py-5 bg-light" style={{ marginTop: "70px" }}>
            <h1>
              <i className="bi bi-patch-check"></i> Lisensi & Sertifikasi
            </h1>
            <p>Kredibilitas kami didukung oleh lembaga resmi dan sertifikasi profesional di bidang medis.</p>
          </header>

          <section className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card p-4 shadow-sm">
                  <h4 className="fw-bold">Sertifikasi Nasional</h4>
                  <p>Kami telah terakreditasi oleh Kementerian Kesehatan Republik Indonesia sejak tahun 2018.</p>
                  <ul>
                    <li>
                      Nomor Registrasi Klinik: <strong>RI/CLN/2025/00987</strong>
                    </li>
                    <li>Standar Operasional: ISO 9001:2015</li>
                    <li>Sertifikasi Tenaga Medis oleh IDI</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-4 shadow-sm">
                  <h4 className="fw-bold">Lisensi Profesional</h4>
                  <p>Semua tenaga medis kami memiliki izin praktik resmi dari lembaga kesehatan nasional.</p>
                  <ul>
                    <li>Surat Izin Praktik (SIP) Dokter Spesialis</li>
                    <li>Surat Tanda Registrasi (STR) Tenaga Medis</li>
                    <li>Pelatihan dan Seminar Medis Berkala</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="container my-3 text-center">
            <h3 className="fw-bold mb-4">Pengakuan & Penghargaan</h3>
            <p>
              <i className="bi bi-award"></i> Penghargaan Kualitas Layanan Kesehatan Nasional – 2023
            </p>
            <p>
              <i className="bi bi-trophy"></i> Klinik Terbaik di Sumatera Utara – 2024
            </p>
          </section>

          <footer>
            <div className="footer-content">
              <p style={{ color: "white" }}>© 2025 Team Medicine | Maulana</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default Lisensi;
