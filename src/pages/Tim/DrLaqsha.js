import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class DrLaqsha extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          {/* Header dengan background Teal/Hijau Tosca */}
          <div className="split-header" style={{ marginTop: "55px", background: "linear-gradient(135deg, #00695c 0%, #26a69a 100%)" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <img src={ProfilDokter} alt="Foto Dr. Laqsha" className="detail-photo-split d-block mx-auto mx-md-0" />
                  <h1>
                    <span style={{ color: "white" }}>Dr. Laqsha, Sp.PD</span>
                  </h1>
                  <p className="lead fw-light text-white-50">Spesialis Penyakit Dalam | Fokus Metabolik</p>
                </div>

                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <h5 className="fw-bold mb-1 text-white">Pengalaman: 5 Tahun</h5>
                  <p className="mb-3 text-white-50">Kesehatan Diabetes & Hipertensi</p>
                  <Link to="/kontak" 
  className="btn fw-bold text-white rounded-pill px-4 py-2" 
  style={{ backgroundColor: "#56cb71ff", border: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                    Jadwalkan Konsultasi
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="container content-tab-area py-3">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tentang-tab" data-bs-toggle="tab" data-bs-target="#tentang" type="button" role="tab">
                  Profil & Pendekatan
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="keahlian-tab" data-bs-toggle="tab" data-bs-target="#keahlian" type="button" role="tab">
                  Fokus Klinis
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
                <h3 className="section-title" style={{ color: "#00695c" }}>Pendekatan Medis</h3>
                <p>Fokus pada pencegahan dan manajemen dini penyakit metabolik.</p>
                <p className="text-secondary">Menggabungkan teknologi terkini dengan edukasi pasien yang holistik.</p>
              </div>

              <div className="tab-pane fade" id="keahlian" role="tabpanel">
                <h3 className="section-title" style={{ color: "#00695c" }}>Bidang Kompetensi</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex align-items-center">
                        <i className="fas fa-microscope me-3" style={{ color: "#26a69a" }}></i> Deteksi Sindrom Metabolik
                      </li>
                      <li className="list-group-item d-flex align-items-center">
                        <i className="fas fa-heartbeat me-3" style={{ color: "#26a69a" }}></i> Pengelolaan Hipertensi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pendidikan" role="tabpanel">
                <h3 className="section-title" style={{ color: "#00695c" }}>Riwayat Akademik</h3>
                <p className="fw-bold mb-1">Spesialis Penyakit Dalam</p>
                <p className="text-secondary mb-3"><small>Universitas Padjajaran (2020)</small></p>
                <p className="fw-bold mb-1">Sertifikasi Manajemen DM Terkini</p>
                <p className="text-secondary"><small>Perkumpulan Endokrinologi Indonesia (2023)</small></p>
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
export default DrLaqsha;