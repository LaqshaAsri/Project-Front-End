import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class DrJuan extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <div className="split-header" style={{ marginTop: "55px", background: "linear-gradient(135deg, #4b0082 0%, #6a5acd 100%)" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <img src={ProfilDokter} alt="Foto Dr. Juan" className="detail-photo-split d-block mx-auto mx-md-0" />
                  <h1>
                    <span style={{ color: "white" }}>Dr. Juan, Sp.KJ</span>
                  </h1>
                  <p className="lead fw-light text-white-50">Spesialis Kedokteran Jiwa (Psikiater)</p>
                </div>

                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <h5 className="fw-bold mb-1 text-white">Fokus Layanan</h5>
                  <p className="mb-3 text-white-50">Kesehatan Mental Remaja & Dewasa</p>
                  <Link tto="/kontak" 
  className="btn fw-bold rounded-pill px-4 py-2" 
  style={{ backgroundColor: "#ffffff", color: "#4b0082", border: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                    Buat Sesi Konsultasi
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
                <h3 className="section-title" style={{ color: "#4b0082" }}>Mengenal Dr. Juan</h3>
                <p>Dr. Juan adalah Psikiater yang berdedikasi untuk memberikan dukungan kesehatan mental yang holistik.</p>
                <p className="text-secondary">Pendekatan beliau menggabungkan terapi farmakologi dengan psikoterapi yang berfokus pada solusi.</p>
              </div>

              <div className="tab-pane fade" id="keahlian" role="tabpanel">
                <h3 className="section-title" style={{ color: "#4b0082" }}>Spesialisasi Klinis</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-brain me-3" style={{ color: "#6a5acd" }}></i> Gangguan Mood (Depresi, Bipolar)
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-user-shield me-3" style={{ color: "#6a5acd" }}></i> Gangguan Kecemasan dan fobia
                  </li>
                </ul>
              </div>

              <div className="tab-pane fade" id="pendidikan" role="tabpanel">
                <h3 className="section-title" style={{ color: "#4b0082" }}>Riwayat Pendidikan</h3>
                <p className="fw-bold mb-1">Spesialis Kedokteran Jiwa (Psikiatri)</p>
                <p className="text-secondary mb-3"><small>Universitas Airlangga (2019)</small></p>
                <p className="fw-bold mb-1">Dokter Umum</p>
                <p className="text-secondary"><small>Universitas Kristen Indonesia (2013)</small></p>
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
export default DrJuan;