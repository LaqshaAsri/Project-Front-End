import React from "react";
import "../../styles/StyleM.css";
import { Link } from "react-router-dom";
import TimDokter from "../../assets/Tim Dokter.jpeg";
class Tentang extends React.Component {
  render() {
    return (
      <>
        <title>Tentang | Team Medicine</title>
        <div className="maulana-page">
          <header className="text-center py-5 bg-light" style={{ marginTop: "70px" }}>
            <h1>Tentang Kami</h1>
            <p className="lead text-secondary">Solusi kesehatan modern untuk kehidupan yang lebih baik.</p>
          </header>

          <main className="container my-2">
            <div className="row align-items-sm-start justify-content-center g-5 text-center text-md-start">
              <div className="col-md-5">
                <img src={TimDokter} alt="Tim Dokter" className="img-fluid rounded shadow w-100" />
              </div>
              <div className="col-md-5">
                <h3>Visi Kami</h3>
                <p>Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan memanfaatkan teknologi medis terkini.</p>

                <h3 className="mt-4">Misi Kami</h3>
                <ul>
                  <li>Mengedukasi masyarakat tentang pentingnya kesehatan preventif.</li>
                  <li>Menyediakan produk medis berkualitas tinggi.</li>
                  <li>Mempermudah akses konsultasi kesehatan online.</li>
                </ul>
                <h3>Produk Kami</h3>
                <p>
                  Temukan produk medis terpercaya untuk mendukung gaya hidup sehat Anda. (
                  <Link to={"/layanan/produk"} className="link1">
                    Produk Kami
                  </Link>
                  )
                </p>
                <p>
                  Temukan resep kesehatan terbaik yang telah kami uji. (
                  <Link to={"/layanan/resepkesehatan"} className="link1">
                    Resep Kesehatan
                  </Link>
                  )
                </p>
                <h3>Lisensi & Sertifikasi</h3>
                <p>
                  Seluruh produk dan layanan kami telah terlisensi dan tersertifikasi sesuai standar nasional maupun internasional, menjamin mutu dan kepercayaan Anda. (
                  <Link to={"lisensi"} className="link1">
                    Lisensi & Sertifikasi Kami
                  </Link>
                  )
                </p>
                <h3>Mitra & Kerja Sama</h3>
                <p>
                  Kami membangun kerja sama dengan berbagai pihak untuk menghadirkan pelayanan kesehatan yang lebih baik, inovatif, dan berkelanjutan bagi semua. (
                  <Link to={"mitra"} className="link1">
                    Mitra & Kerja Sama Kami
                  </Link>
                  )
                </p>
              </div>
            </div>
          </main>

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

export default Tentang;
