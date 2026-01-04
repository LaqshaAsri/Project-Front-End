import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg"; // Pastikan path asset benar
import { Link } from "react-router-dom";

class NersMaulana extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <div className="split-header" style={{ marginTop: "55px", background: "linear-gradient(135deg, #0288d1 0%, #29b6f6 100%)" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <img src={ProfilDokter} alt="Foto Ners Maulana" className="detail-photo-split d-block mx-auto mx-md-0" />
                  <h1>
                    <span style={{ color: "white" }}>Ners Maulana, S.Kep</span>
                  </h1>
                  <p className="lead fw-light text-white-50">Perawat Profesional | Spesialis Perawatan Luka & Homecare</p>
                </div>

                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <h5 className="fw-bold mb-1 text-white">Layanan Mandiri Perawat</h5>
                  <p className="mb-3 text-white-50">Tersedia untuk Kunjungan Rumah (Homecare)</p>
                  <Link to="/kontak" className="btn fw-bold text-dark rounded-pill px-4 py-2"
                        style={{ backgroundColor: "#e1f5fe", border: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
                    Hubungi Perawat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="container content-tab-area py-3">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tentang-tab" data-bs-toggle="tab" data-bs-target="#tentang" type="button" role="tab">
                  Profil & Layanan
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
                <h3 className="section-title" style={{ color: "#0288d1" }}>Mengenal Ners Maulana</h3>
                <p>Ners Maulana adalah seorang perawat profesional dengan dedikasi tinggi dalam memberikan pelayanan keperawatan yang komprehensif, baik di fasilitas kesehatan maupun layanan homecare.</p>
                <p className="text-secondary">Beliau percaya bahwa perawatan yang penuh empati dan edukasi keluarga adalah kunci utama pemulihan pasien di rumah.</p>
              </div>

              <div className="tab-pane fade" id="keahlian" role="tabpanel">
                <h3 className="section-title" style={{ color: "#0288d1" }}>Kompetensi Keperawatan</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-band-aid me-3" style={{ color: "#0288d1" }}></i> Perawatan Luka Modern (Wound Care)
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-user-nurse me-3" style={{ color: "#0288d1" }}></i> Pendampingan Pasien Pasca Operasi
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="fas fa-stethoscope me-3" style={{ color: "#0288d1" }}></i> Monitoring Tanda-Tanda Vital & Medikasi
                  </li>
                </ul>
              </div>

              <div className="tab-pane fade" id="pendidikan" role="tabpanel">
                <h3 className="section-title" style={{ color: "#0288d1" }}>Riwayat Akademik</h3>
                <p className="fw-bold mb-1">Sarjana Keperawatan (S.Kep) & Profesi Ners</p>
                <p className="text-secondary mb-3"><small>Universitas Indonesia</small></p>
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
export default NersMaulana;