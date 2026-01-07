import React from "react";
import "../../styles/StyleF.css";
import { Link } from "react-router-dom";

class Layanan extends React.Component {
  render() {
    return (
      <>
        <title>Layanan | Team Medicine</title>
        <div className="felix-page page-wrapper">
          <main className="page-content bodyy">
            <div className="container service-box mt-4">
              <h2 className="text-center mb-4" style={{ color: "#0b7285" }}>
                Detail Layanan Kami
              </h2>
              <p>Klinik Sehat menyediakan layanan medis dan konsultasi kesehatan mental yang nyaman serta mudah diakses. Berikut dua layanan utama kami:</p>

              <div className="service-item">
                <h3>Pemeriksaan Penyakit Dalam</h3>
                <p>Ditangani oleh dokter spesialis berpengalaman. Termasuk konsultasi, pemeriksaan fisik, dan tes laboratorium jika dibutuhkan.</p>
              </div>

              <div className="service-item">
                <h3>Konsultasi Psikiater</h3>
                <p>Layanan untuk membantu pasien yang mengalami stres, cemas, atau gangguan tidur. Psikiater kami siap membantu secara profesional.</p>
              </div>

              <div className="text-center mt-4 d-flex flex-wrap gap-2 justify-content-center">
                <Link to={"panduan"} className="btn-toska">
                  Panduan
                </Link>
                <Link to={"administrasi"} className="btn-toska">
                  Administrasi
                </Link>
                <Link to={"riwayat"} className="btn-toska">
                  Riwayat Pelayanan
                </Link>
                <Link to={"promo"} className="btn-toska">
                  Lihat Promo Bulan Ini
                </Link>
                <Link to={"donasi"} className="btn-toska">
                  Donasi
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

export default Layanan;
