import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class DrLaqsha extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <header className="py-5 text-center" style={{ backgroundColor: "var(--light-bg)", marginTop: "55px" }}>
            <div className="container">
              <h1>
                <span style={{ color: "black" }}>Dr. Laqsha, Sp.PD</span>
              </h1>
              <p className="lead text-secondary">Spesialis Penyakit Dalam | Fokus Metabolik & Gaya Hidup</p>
            </div>
          </header>

          <section className="container py-5">
            <div className="row g-4 justify-content-center mb-5">
              <div className="col-md-4">
                <div className="card card-custom p-4 h-100">
                  <h5 className="fw-bold mb-3 text-primary-600">Pendekatan Medis</h5>
                  <p className="text-muted small">Fokus pada pencegahan dan manajemen dini penyakit metabolik. Menggabungkan teknologi terkini dengan edukasi pasien yang sabar dan holistik.</p>
                  <Link to="/layanan" className="btn btn-sm btn-outline-primary w-100 mt-auto">
                    Telusuri Layanan
                  </Link>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <img src={ProfilDokter} alt="Foto Dr. Laqsha" className="detail-photo-compact mb-3" />
                <h3 className="h5 fw-bold mb-0">Pengalaman: 5 Tahun</h3>
                <p className="text-secondary small">Sejak Lulus Spesialis</p>
              </div>

              <div className="col-md-4">
                <div className="card card-custom p-4 h-100 bg-light">
                  <h5 className="fw-bold mb-3 text-primary-600">Buat Janji Temu</h5>
                  <p className="mb-1">
                    <small>Email: laqsha.sp.pd@teammed.com</small>
                  </p>
                  <p className="mb-3">
                    <small>Telepon: (021) 123-4568</small>
                  </p>
                  <Link to="/kontak" className="btn btn-primary w-100 mt-auto">
                    Jadwalkan Konsultasi
                  </Link>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-5">
              <div className="col-md-6">
                <h2 className="section-title">Fokus & Keahlian Klinis</h2>
                <div className="card card-custom p-4">
                  <ul className="list-group list-group-flush list-expertise">
                    <li className="list-group-item d-flex align-items-center my-custom-class">
                      <i className="fas fa-microscope me-3 text-info"></i> Deteksi dan Pencegahan Sindrom Metabolik
                    </li>
                    <li className="list-group-item d-flex align-items-center my-custom-class">
                      <i className="fas fa-heartbeat me-3 text-info"></i> Pengelolaan Pola Hidup Pasien Hipertensi
                    </li>
                    <li className="list-group-item d-flex align-items-center my-custom-class">
                      <i className="fas fa-calendar-check me-3 text-info"></i> Konsultasi Pra-Operasi & Post-Operasi
                    </li>
                    <li className="list-group-item d-flex align-items-center my-custom-class">
                      <i className="fas fa-allergies me-3 text-info"></i> Penyakit Autoimun dan Alergi Dewasa
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <h2 className="section-title">Riwayat Pendidikan</h2>
                <div className="card card-custom p-4">
                  <div>
                    <p className="fw-bold mb-1">Spesialis Penyakit Dalam</p>
                    <p className="text-secondary mb-3">
                      <small>Universitas Padjajaran (2020)</small>
                    </p>

                    <p className="fw-bold mb-1">Dokter Umum</p>
                    <p className="text-secondary mb-3">
                      <small>Universitas Brawijaya (2014)</small>
                    </p>

                    <p className="fw-bold mb-1">Sertifikasi Manajemen DM Terkini</p>
                    <p className="text-secondary mb-3">
                      <small>Perkumpulan Endokrinologi Indonesia (2023)</small>
                    </p>
                  </div>
                </div>
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
