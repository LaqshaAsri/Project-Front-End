import React from "react";
import "../../styles/StyleJ.css";
import { Link } from "react-router-dom";

class ResepKesehatan extends React.Component {
  render() {
    return (
      <>
        <div className="juan-page">
          <main className="container py-5">
            <header className="text-center mb-5">
              <h1 className="display-5 fw-bold" style={{ color: "#0b7285" }}>
                Resep & Tips Kesehatan Kami 🌿
              </h1>
              <p className="lead text-secondary">Panduan sederhana dari tim dokter untuk meningkatkan kualitas hidup Anda sehari-hari.</p>
            </header>

            <section id="resep-fokus" className="mb-5 p-4 rounded-3 shadow-lg bg-white">
              <h2 className="h4 mb-4 text-center" style={{ color: "#0b7285" }}>
                <i className="fas fa-star me-2"></i> Resep Pilihan Minggu Ini
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card h-100 border-start border-4 border-info card-resep">
                    <div className="card-body">
                      <h5 className="card-title text-info">
                        <i className="fas fa-sun me-2"></i> Resep Pagi: 15 Menit Matahari
                      </h5>
                      <p className="card-text small text-muted">Jemur diri di bawah sinar matahari pagi selama 10-15 menit sebelum pukul 9 pagi untuk sintesis Vitamin D yang optimal.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-start border-4 border-success card-resep">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        <i className="fas fa-heartbeat me-2"></i> Resep Jantung: Jalan Kaki Cepat
                      </h5>
                      <p className="card-text small text-muted">Lakukan jalan kaki cepat (bukan santai) minimal 3 kali seminggu selama 30 menit penuh untuk menjaga kesehatan kardiovaskular.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-start border-4 border-warning card-resep">
                    <div className="card-body">
                      <h5 className="card-title text-warning-dark">
                        <i className="fas fa-brain me-2"></i> Resep Mental: Jurnal 5 Menit
                      </h5>
                      <p className="card-text small text-muted">Tulis 3 hal yang Anda syukuri dan 1 hal yang membuat Anda khawatir setiap malam sebelum tidur untuk melegakan pikiran.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-start border-4 border-danger card-resep">
                    <div className="card-body">
                      <h5 className="card-title text-danger">
                        <i className="fas fa-tint me-2"></i> Resep Hidrasi: Botol Terukur
                      </h5>
                      <p className="card-text small text-muted">Gunakan botol minum dengan tanda jam. Ini adalah cara termudah untuk memastikan Anda mencapai target air harian (sekitar 2.5 liter).</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="artikel-lanjutan" className="p-5 rounded-3 shadow-sm bg-light-subtle text-center">
              <h2 className="h4 mb-3" style={{ color: "#0b7285" }}>
                <i className="fas fa-book-reader me-2"></i> Ingin Lebih Banyak Wawasan?
              </h2>
              <p className="text-muted mb-4">Tim ahli kami rutin memperbarui artikel mendalam tentang pencegahan penyakit dan gaya hidup sehat.</p>
              <Link to="/beranda/artikel" className="btn fw-bold px-4 py-2 rounded-pill buttonStyle">
                Kunjungi Halaman Artikel Kesehatan
              </Link>
              <Link to="/layanan" className="btn btn-outline-primary fw-bold px-4 py-2 rounded-pill ms-3">
                Lihat Layanan Konsultasi
              </Link>
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
}

export default ResepKesehatan;
