import React from "react";
import "../../styles/StyleT.css";
import { kirimJanji } from "../../utilities/JsJ.js";

class Kontak extends React.Component {
  render() {
    return (
      <>
        <div className="tubagus-page">
          <main style={{ paddingTop: "55px" }}>
            <header className="contact-header text-center">
              <div className="container">
                <h1>
                  <span style={{ color: "white" }}>Buat Janji Konsultasi</span>
                </h1>
                <p className="lead">Isi formulir di bawah ini dan tim kami akan segera memproses janji temu Anda.</p>
              </div>
            </header>
          </main>
          <main className="container mb-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="contact-card">
                  <h2 className="section-title text-primary-600 mb-4">Detail Janji Temu</h2>

                  <form id="appointmentForm">
                    <div className="mb-3">
                      <label htmlFor="doctorSelect" className="form-label fw-medium">
                        Pilih Dokter/Ners yang Dituju <span className="text-danger">*</span>
                      </label>
                      <select className="form-select" id="doctorSelect" required defaultValue="">
                        <option value="" disabled>
                          -- Pilih Tim Medis --
                        </option>
                        <option value="Dr. Arsad, Sp.PD">Dr. Arsad, Sp.PD (Penyakit Dalam)</option>
                        <option value="Dr. Laqsha, Sp.PD">Dr. Laqsha, Sp.PD (Penyakit Dalam)</option>
                        <option value="Dr. Juan, Sp.KJ">Dr. Juan, Sp.KJ (Psikiater)</option>
                        <option value="Ners Maulana, S.Kep">Ners Maulana, S.Kep (Perawat Senior)</option>
                        <option value="Ners Felix, S.Kep">Ners Felix, S.Kep (Perawat)</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label fw-medium">
                        Nama Lengkap Pasien <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" id="fullName" placeholder="Masukkan nama lengkap Anda" required />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-medium">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" id="email" placeholder="contoh@email.com" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-medium">
                          Nomor Telepon <span className="text-danger">*</span>
                        </label>
                        <input type="tel" className="form-control" id="phone" placeholder="08xxxxxxxxxx" required />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label fw-medium">
                          Tanggal Preferensi <span className="text-danger">*</span>
                        </label>
                        <input type="date" className="form-control" id="date" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="consultType" className="form-label fw-medium">
                          Jenis Konsultasi
                        </label>
                        <select className="form-select" id="consultType" defaultValue="Tatap Muka">
                          <option value="Tatap Muka">Tatap Muka (Offline)</option>
                          <option value="Telekonsultasi">Telekonsultasi (Online)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-medium">
                        Keluhan Singkat/Tujuan Konsultasi <span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" id="message" rows="3" placeholder="Contoh: Sakit kepala berkepanjangan dan susah tidur..." required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100" id="btnJanji" onClick={kirimJanji}>
                      Kirim Permintaan Janji
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <h2 className="section-title mb-4">Informasi Kontak & Lokasi</h2>

                <div className="row g-3">
                  <div className="col-12">
                    <div className="info-box d-flex align-items-start">
                      <i className="fas fa-map-marker-alt fa-2x me-3 mt-1"></i>
                      <div>
                        <p className="fw-bold mb-0">Alamat Klinik Utama</p>
                        <small>Jl. Kesehatan Sentosa No. 10, Jakarta Pusat 10310, Indonesia</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-12">
                    <div className="info-box d-flex align-items-start">
                      <i className="fas fa-phone fa-2x me-3 mt-1"></i>
                      <div>
                        <p className="fw-bold mb-0">Layanan Pelanggan</p>
                        <small>(021) 500-1234 (Senin - Jumat, 08:00 - 17:00)</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-12">
                    <div className="info-box d-flex align-items-start">
                      <i className="fas fa-envelope fa-2x me-3 mt-1"></i>
                      <div>
                        <p className="fw-bold mb-0">Email Informasi</p>
                        <small>info@teammedicine.com</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <h5 className="fw-bold mb-2">Lokasi Kami</h5>
                    <div className="card-custom bg-white p-3 text-center" style={{ height: "200px", border: "1px solid #ddd" }}>
                      <p className="text-muted small my-5">
                        <a href="https://maps.app.goo.gl/M3nxdtsT1mDGb7Pn9">https://maps.app.goo.gl/M3nxdtsT1mDGb7Pn9</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div className="footer-content" style={{ paddingTop: "15px" }}>
              <p>© 2025 Team Medicine | Juan</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default Kontak;
