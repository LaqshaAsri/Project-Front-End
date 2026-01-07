import React, { useEffect } from "react";
import "../../styles/StyleJ.css";

function Administrasi() {
  useEffect(() => {
    document.title = "Informasi Administrasi | Team Medicine";
  });

  return (
    <>
      <div className="juan-page">
        <main className="container py-5">
          <header className="text-center mb-5">
            <h1 className="display-5 fw-bold" style={{ color: "#0b7285" }}>
              Panduan Administrasi Pasien 📄
            </h1>
            <p className="lead text-secondary">Informasi penting mengenai prosedur janji temu, pembayaran, dan kerjasama asuransi.</p>
          </header>

          <section id="prosedur-janji" className="mb-5 p-4 rounded-3 shadow-sm bg-primary-light">
            <h2 className="h4 mb-4 text-center" style={{ color: "#0b7285" }}>
              <i className="fas fa-calendar-alt me-2"></i> Prosedur & Aturan Janji Temu
            </h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <ol className="list-group list-group-flush custom-list">
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge me-3" style={{ color: "black" }}>
                      1
                    </span>{" "}
                    Reservasi: Janji temu dianjurkan dilakukan minimal H-1 melalui formulir kontak atau WhatsApp.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge me-3" style={{ color: "black" }}>
                      2
                    </span>{" "}
                    Kedatangan: Pasien diharapkan tiba 15 menit sebelum jadwal konsultasi untuk proses *check-in* administrasi.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge me-3" style={{ color: "black" }}>
                      3
                    </span>{" "}
                    Pembatalan: Pembatalan atau penjadwalan ulang wajib dikonfirmasi minimal 4 jam sebelum waktu janji yang ditentukan.
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge me-3" style={{ color: "black" }}>
                      4
                    </span>{" "}
                    Dokumen: Siapkan Kartu Tanda Penduduk (KTP) dan/atau kartu asuransi yang relevan saat kedatangan.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section id="pembayaran-asuransi" className="p-5 rounded-3 shadow-lg bg-white">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="h4 mb-3" style={{ color: "#0b7285" }}>
                  <i className="fas fa-money-check-alt me-2"></i> Pilihan Pembayaran
                </h2>
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-credit-card me-3 text-success"></i>
                    <small>Kartu Debit & Kredit (Visa/Mastercard)</small>
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-university me-3 text-success"></i>
                    <small>Transfer Bank (BCA, Mandiri, BRI)</small>
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <i className="fas fa-money-bill-wave me-3 text-success"></i>
                    <small>Tunai (Hanya untuk biaya di bawah Rp 1.000.000)</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="h4 mb-3" style={{ color: "#0b7285" }}>
                  <i className="fas fa-handshake me-2"></i> Mitra Asuransi & Korporat
                </h2>
                <p className="small text-muted">Kami berupaya mempermudah akses layanan melalui kerjasama dengan penyedia asuransi terkemuka.</p>
                <div className="row row-cols-2 g-3">
                  <div className="col">
                    <span className="badge bg-warning text-dark p-2 w-100">AXA Mandiri</span>
                  </div>
                  <div className="col">
                    <span className="badge bg-warning text-dark p-2 w-100">Prudential Indonesia</span>
                  </div>
                  <div className="col">
                    <span className="badge bg-warning text-dark p-2 w-100">BPJS Non-Mandiri (Kelas 1)</span>
                  </div>
                  <div className="col">
                    <span className="badge bg-warning text-dark p-2 w-100">Adira Insurance</span>
                  </div>
                </div>
                <blockquote className="blockquote small mt-3 border-start border-3 ps-3 text-muted">
                  <p className="mb-0">Mohon konfirmasi status polis Anda dengan pihak administrasi sebelum hari janji temu.</p>
                </blockquote>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-content">
            <p>© 2025 Team Medicine | Juan</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Administrasi;
