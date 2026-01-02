import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class DrJuan extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <header className="py-5 text-center" style={{ backgroundColor: "var(--light-bg)", marginTop: "55px" }}>
            <div className="container">
              <h1 className="section-title display-4">Dr. Juan, Sp.KJ</h1>
              <p className="lead text-secondary">Spesialis Kedokteran Jiwa (Psikiater) | Konsultasi Kesehatan Mental</p>
            </div>
          </header>

          <section className="container py-5">
            <div className="row">
              <div className="col-md-4 text-center mb-4">
                <img src={ProfilDokter} alt="Foto Dr. Juan" className="detail-photo-large mb-4" />
                <div className="card-custom p-4">
                  <h5 className="section-title">Fokus Layanan</h5>
                  <p className="mb-1">
                    <small>Kesehatan Mental Remaja & Dewasa</small>
                  </p>
                  <p className="mb-3">
                    <small>Jenis: Tatap Muka & Telekonsultasi</small>
                  </p>
                  <Link to="/kontak" className="btn btn-warning w-100">
                    Buat Sesi Konsultasi
                  </Link>
                </div>
              </div>

              <div className="col-md-8">
                <h2 className="section-title">Mengenal Dr. Juan</h2>
                <div className="section-separator">
                  <p>
                    Dr. Juan adalah Psikiater yang berdedikasi untuk memberikan dukungan kesehatan mental yang holistik. Beliau memiliki minat khusus dalam penanganan kecemasan, depresi, dan isu-isu kesehatan mental yang dihadapi oleh
                    remaja dan dewasa muda di era modern.
                  </p>
                  <p>
                    Pendekatan beliau menggabungkan terapi farmakologi (jika diperlukan) dengan psikoterapi dan strategi manajemen stres yang berfokus pada solusi. Dr. Juan berkomitmen untuk menciptakan ruang yang aman dan non-diskriminatif
                    bagi semua pasien.
                  </p>
                </div>

                <h2 className="section-title">Spesialisasi Klinis</h2>
                <div className="section-separator">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item my-custom-class">Gangguan Mood (Depresi, Bipolar)</li>
                    <li className="list-group-item my-custom-class">Gangguan Kecemasan dan Fobia</li>
                    <li className="list-group-item my-custom-class">Konsultasi Kesehatan Mental Remaja</li>
                    <li className="list-group-item my-custom-class">Manajemen Stres dan Burnout Kerja</li>
                  </ul>
                </div>

                <h2 className="section-title">Pendidikan Formal</h2>
                <div>
                  <p className="fw-bold mb-1">Spesialis Kedokteran Jiwa (Psikiatri)</p>
                  <p className="text-secondary mb-3">
                    <small>Universitas Airlangga (2019)</small>
                  </p>

                  <p className="fw-bold mb-1">Dokter Umum</p>
                  <p className="text-secondary mb-3">
                    <small>Universitas Kristen Indonesia (2013)</small>
                  </p>
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

export default DrJuan;
