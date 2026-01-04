import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StyleT.css";

class Team extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <main className="container mt-5 mb-5" style={{ paddingTop: "55px" }}>
            <header className="text-center mb-5">
              <h1 className="section-title display-5">Tim Profesional Kami</h1>
              <p className="lead text-secondary">Kami terdiri dari dokter umum, spesialis, perawat, dan tenaga pendukung berdedikasi.</p>
              <div className="my-custom-class d-inline-block mt-3">Pelayanan terbaik untuk kesehatan Anda.</div>
            </header>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <div className="card card-custom team-card-hover h-100 p-4 d-flex align-items-center text-start">
                  <div className="d-flex align-items-center me-4 flex-shrink-0" style={{ minWidth: "150px" }}>
                    <i className="fas fa-user-md text-primary-600 fa-2x me-3"></i>
                    <h5 className="fw-bold mb-0 flex-grow-1">Dr. Arsad, Sp.PD</h5>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 badge bg-info-custom rounded-pill">
                      <small>Spesialis Penyakit Dalam</small>
                    </p>
                    <p className="text-muted small mb-0">Pengalaman 10 tahun. Fokus: manajemen diabetes dan hipertensi.</p>
                    <Link to={"drarsad"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Info..
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-custom team-card-hover h-100 p-4 d-flex align-items-center text-start">
                  <div className="d-flex align-items-center me-4 flex-shrink-0" style={{ minWidth: "150px" }}>
                    <i className="fas fa-user-md text-primary-600 fa-2x me-3"></i>
                    <h5 className="fw-bold mb-0 flex-grow-1">Dr. Laqsha, Sp.PD</h5>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 badge bg-info-custom rounded-pill">
                      <small>Spesialis Penyakit Dalam</small>
                    </p>
                    <p className="text-muted small mb-0">Pengalaman 5 tahun. Fokus: manajemen diabetes dan hipertensi.</p>
                    <Link to={"drlaqsha"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Info..
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-custom team-card-hover h-100 p-4 d-flex align-items-center text-start">
                  <div className="d-flex align-items-center me-4 flex-shrink-0" style={{ minWidth: "150px" }}>
                    <i className="fas fa-brain text-warning-custom fa-2x me-3"></i>
                    <h5 className="fw-bold mb-0 flex-grow-1">Dr. Juan., Sp.KJ</h5>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 badge bg-warning-custom rounded-pill">
                      <small>Psikiater</small>
                    </p>
                    <p className="text-muted small mb-0">Fokus: Konsultasi kesehatan mental dewasa & remaja.</p>
                    <Link to={"drjuan"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Info..
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-custom team-card-hover h-100 p-4 d-flex align-items-center text-start">
                  <div className="d-flex align-items-center me-4 flex-shrink-0" style={{ minWidth: "150px" }}>
                    <i className="fas fa-user-nurse text-success-custom fa-2x me-3"></i>
                    <h5 className="fw-bold mb-0 flex-grow-1">Ners Maulana, S.Kep</h5>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 badge bg-success-custom rounded-pill">
                      <small>Perawat Senior</small>
                    </p>
                    <p className="text-muted small mb-0">Peran: Koordinator rawat jalan & edukasi pasien.</p>
                    <Link to={"nersmaulana"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Info..
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-custom team-card-hover h-100 p-4 d-flex align-items-center text-start">
                  <div className="d-flex align-items-center me-4 flex-shrink-0" style={{ minWidth: "150px" }}>
                    <i className="fas fa-user-nurse text-success-custom fa-2x me-3"></i>
                    <h5 className="fw-bold mb-0 flex-grow-1">Ners Felix, S.Kep</h5>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 badge bg-success-custom rounded-pill">
                      <small>Perawat</small>
                    </p>
                    <p className="text-muted small mb-0">Peran: Koordinator rawat jalan & edukasi pasien.</p>
                    <Link to={"nersfelix"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Info..
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-5 pt-4 border-top">
              <h2 className="section-title text-center">Cara Membuat Janji</h2>
              <p className="text-center text-secondary mb-4">Langkah mudah untuk mendapatkan konsultasi dengan tim ahli kami.</p>

              <div className="row justify-content-center">
                <div className="col-md-8">
                  <ol className="list-group list-group-flush custom-list">
                    <li className="list-group-item d-flex align-items-center">
                      <span className="badge me-3">1</span> Pilih dokter yang sesuai dengan kebutuhan Anda pada halaman ini.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <span className="badge me-3">2</span> Kunjungi halaman **Kontak** dan isi formulir janji temu dengan detail yang lengkap.
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <span className="badge me-3">3</span> Tim kami akan memproses dan Anda akan menerima konfirmasi melalui email atau SMS.
                    </li>
                    <Link to={"/kontak"} className="btn btn-outline-primary fw-bold text-dark rounded-pill px-4 py-2">
                      Buat Janji Konsultasi
                    </Link>
                  </ol>
                </div>
              </div>
            </section>
          </main>

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

export default Team;
