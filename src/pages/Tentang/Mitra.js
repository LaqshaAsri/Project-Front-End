import React from "react";
import "../../styles/StyleM.css";

class Mitra extends React.Component {
  render() {
    return (
      <>
        <div className="maulana-page">
          <header className="text-center py-5 bg-light" style={{ marginTop: "70px" }}>
            <h1>
              <i className="bi bi-handshake"></i> Mitra & Kerja Sama
            </h1>
            <p>Kami bekerja sama dengan berbagai lembaga dan institusi medis untuk meningkatkan pelayanan kesehatan masyarakat.</p>
          </header>

          <section className="container text-center">
            <h3 className="fw-bold mb-4">Mitra Utama Kami</h3>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="partner-logo p-4">
                  <i className="bi bi-hospital fs-1 text-primary"></i>
                  <h5 className="mt-3">RS Medika Sehat</h5>
                  <p className="text-muted">Kerja sama pemeriksaan laboratorium dan layanan darurat 24 jam.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="partner-logo p-4">
                  <i className="bi bi-building fs-1 text-info"></i>
                  <h5 className="mt-3">Universitas Medika Nusantara</h5>
                  <p className="text-muted">Kolaborasi dalam riset dan pengembangan teknologi medis.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="partner-logo p-4">
                  <i className="bi bi-droplet-half fs-1 text-primary"></i>
                  <h5 className="mt-3">Laboratorium BioCare</h5>
                  <p className="text-muted">Pengujian dan analisis sampel untuk riset biomedis.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="partner-logo p-4">
                  <i className="bi bi-heart-pulse fs-1 text-danger"></i>
                  <h5 className="mt-3">HealthLink Indonesia</h5>
                  <p className="text-muted">Integrasi sistem data pasien dan konsultasi daring.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="container text-center my-5">
            <h3 className="fw-bold mb-4">Tujuan Kerja Sama</h3>
            <p>Kami percaya kolaborasi adalah kunci utama dalam menciptakan inovasi di bidang kesehatan. Dengan dukungan mitra profesional, kami terus memperluas layanan dan meningkatkan kualitas hidup masyarakat Indonesia.</p>
          </section>

          <footer>
            <div className="footer-content">
              <p style={{ color: "white" }}>© 2025 Team Medicine | Maulana</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default Mitra;
