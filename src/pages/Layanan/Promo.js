import React from "react";
import "../../styles/StyleF.css";
import { Link } from "react-router-dom";

class Promo extends React.Component {
  render() {
    return (
      <>
        <title>Promo | Team Medicine</title>
        <div className="felix-page page-wrapper">
          <main className="page-content bodyy">
            <div className="container service-box mt-4">
              <h2 className="text-center mb-4" style={{ color: "#009688" }}>
                Promo Bulan Ini
              </h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="promo-card">
                    <h3 style={{ color: "#009688" }}>🩺 Pemeriksaan Penyakit Dalam - Diskon 25%</h3>
                    <p>Khusus bulan ini, dapatkan potongan harga 25% untuk pemeriksaan penyakit dalam. Cek kondisi tubuhmu lebih awal agar tetap fit dan aktif.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="promo-card">
                    <h3 style={{ color: "#009688" }}>💬 Konsultasi Psikiater - Hemat 20%</h3>
                    <p>Kesehatan mental juga penting! Dapatkan promo 20% untuk konsultasi dengan psikiater. Cocok buat kamu yang butuh tempat cerita.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/kontak" className="btn-toska">
                  Buat Janji Konsultasi
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

export default Promo;
