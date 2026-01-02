import React from "react";
import "../../styles/StyleT.css";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import { Link } from "react-router-dom";

class DrArsad extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <div className="split-header" style={{ marginTop: "55px" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <img src={ProfilDokter} alt="Foto Dr. Arsad" className="detail-photo-split d-block mx-auto mx-md-0" />
                  <h1>
                    <span style={{ color: "white" }}>Dr. Arsad, Sp.PD</span>
                  </h1>
                  <p className="lead fw-light">Spesialis Penyakit Dalam | Senior Consultant</p>
                </div>

                <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                  <h5 className="fw-bold mb-1">Pengalaman: 10 Tahun</h5>
                  <p className="mb-3">Fokus: Manajemen Diabetes & Hipertensi</p>
                  <Link to="/kontak" className="btn btn-warning fw-bold text-dark rounded-pill px-4 py-2">
                    Buat Janji Konsultasi
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="container content-tab-area py-3">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tentang-tab" data-bs-toggle="tab" data-bs-target="#tentang" type="button" role="tab" aria-controls="tentang" aria-selected="true">
                  Profil & Filosofi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="keahlian-tab" data-bs-toggle="tab" data-bs-target="#keahlian" type="button" role="tab" aria-controls="keahlian" aria-selected="false">
                  Keahlian Klinis
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pendidikan-tab" data-bs-toggle="tab" data-bs-target="#pendidikan" type="button" role="tab" aria-controls="pendidikan" aria-selected="false">
                  Pendidikan & Riwayat
                </button>
              </li>
            </ul>

            <div className="tab-content tab-content-custom" id="myTabContent">
              <div className="tab-pane fade show active" id="tentang" role="tabpanel" aria-labelledby="tentang-tab">
                <h3 className="section-title">Filosofi Dr. Arsad</h3>
                <p>
                  Dr. Arsad adalah konsultan senior di bidang Penyakit Dalam dengan fokus utama pada penanganan penyakit kronis metabolik. Dengan pengalaman lebih dari satu dekade, beliau menekankan pendekatan berbasis bukti dan pencegahan
                  komplikasi jangka panjang.
                </p>
                <p className="text-secondary">
                  Filosofi beliau adalah "mengobati manusia, bukan sekadar penyakit". Ini berarti melibatkan pasien secara aktif dalam manajemen kesehatan mereka, memberikan edukasi mendalam tentang nutrisi dan gaya hidup, yang merupakan
                  kunci sukses dalam mengelola Diabetes dan Hipertensi.
                </p>
              </div>

              <div className="tab-pane fade" id="keahlian" role="tabpanel" aria-labelledby="keahlian-tab">
                <h3 className="section-title">Bidang Kompetensi Utama</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item my-custom-class d-flex align-items-center">
                        <i className="fas fa-syringe me-3 text-primary-600"></i> Konsultasi Intensif Diabetes Melitus Tipe 1 & 2
                      </li>
                      <li className="list-group-item my-custom-class d-flex align-items-center">
                        <i className="fas fa-heartbeat me-3 text-primary-600"></i> Penanganan Hipertensi Kronis dan Komplikasi Jantung
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item my-custom-className d-flex align-items-center">
                        <i className="fas fa-chart-line me-3 text-primary-600"></i> Evaluasi Risiko Kardiovaskular
                      </li>
                      <li className="list-group-item my-custom-class d-flex align-items-center">
                        <i className="fas fa-pills me-3 text-primary-600"></i> Optimalisasi Terapi Obat dan Insulin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pendidikan" role="tabpanel" aria-labelledby="pendidikan-tab">
                <h3 className="section-title">Jejak Karir dan Akademik</h3>
                <p className="fw-bold mb-1">Spesialis Penyakit Dalam (Sp.PD)</p>
                <p className="text-secondary mb-3">
                  <small>Universitas Indonesia (2015)</small>
                </p>

                <p className="fw-bold mb-1">Dokter Umum</p>
                <p className="text-secondary mb-3">
                  <small>Universitas Gadjah Mada (2009)</small>
                </p>

                <p className="fw-bold mb-1">Posisi Sebelumnya</p>
                <p className="text-secondary mb-3">
                  <small>Kepala Divisi Penyakit Metabolik, RS Jantung Harapan (2018-2023)</small>
                </p>
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

export default DrArsad;
