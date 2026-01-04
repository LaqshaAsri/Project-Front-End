import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class NersFelix extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <div className="split-header" style={{ marginTop: "55px", background: "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <img src={ProfilDokter} alt="Foto Ners Felix" className="detail-photo-split d-block mx-auto mx-md-0" />
                  <h1>
                    <span style={{ color: "white" }}>Ners Felix, S.Kep</span>
                  </h1>
                  <p className="lead fw-light text-white-50">Perawat Profesional | Spesialis Keperawatan Gawat Darurat</p>
                </div>

                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <h5 className="fw-bold mb-1 text-white">Pengalaman: 7 Tahun</h5>
                  <p className="mb-3 text-white-50">Tersedia untuk Konsultasi Perawatan Intensif</p>
                  <Link to="/kontak" className="btn fw-bold text-dark rounded-pill px-4 py-2"
                        style={{ backgroundColor: "#c8e6c9", border: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                    Jadwalkan Layanan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="container content-tab-area py-3">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tentang-tab" data-bs-toggle="tab" data-bs-target="#tentang" type="button" role="tab">
                  Profil & Filosofi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="keahlian-tab" data-bs-toggle="tab" data-bs-target="#keahlian" type="button" role="tab">
                  Keahlian Klinis
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pendidikan-tab" data-bs-toggle="tab" data-bs-target="#pendidikan" type="button" role="tab">
                  Pendidikan
                </button>
              </li>
            </ul>

            <div className="tab-content tab-content-custom" id="myTabContent">
              <div className="tab-pane fade show active" id="tentang" role="tabpanel">
                <h3 className="section-title" style={{ color: "#2e7d32" }}>Mengenal Ners Felix</h3>
                <p>Ners Felix memiliki keahlian khusus dalam manajemen pasien dengan kondisi akut dan memerlukan observasi ketat.</p>
                <p className="text-secondary">Filosofi perawatannya adalah ketelitian dan respons cepat yang berfokus pada keselamatan pasien.</p>
              </div>

              <div className="tab-pane fade" id="keahlian" role="tabpanel">
                <h3 className="section-title" style={{ color: "#2e7d32" }}>Bidang Keahlian</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-heartbeat me-3" style={{ color: "#2e7d32" }}></i> Bantuan Hidup Dasar (BTCLS)
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-pills me-3" style={{ color: "#2e7d32" }}></i> Manajemen Terapi Cairan & Injeksi
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-user-md me-3" style={{ color: "#2e7d32" }}></i> Edukasi Manajemen Penyakit Kronis
                  </li>
                </ul>
              </div>

              <div className="tab-pane fade" id="pendidikan" role="tabpanel">
                <h3 className="section-title" style={{ color: "#2e7d32" }}>Jejak Akademik</h3>
                <p className="fw-bold mb-1">Sarjana Keperawatan (S.Kep) & Profesi Ners</p>
                <p className="text-secondary mb-3"><small>Universitas Padjajaran</small></p>
              </div>
            </div>
          </section>

          <footer>
            <div className="footer-content" style={{ paddingTop: "15px" }}>
              <p>© 2025 Team Medicine | Tubagus</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default NersFelix;