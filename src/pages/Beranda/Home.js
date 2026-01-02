import React from "react";
import "../../styles/StyleL.css";
import Profil1 from "../../assets/Profil1.png";
import Profil2 from "../../assets/Profil2.png";
import Profil3 from "../../assets/Profil3.png";
import Wawasan1 from "../../assets/Wawasan1.png";
import Wawasan2 from "../../assets/Wawasan2.png";
import Wawasan3 from "../../assets/Wawasan3.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="laqsha-page">
          <main style={{ marginTop: "80px" }}>
            <div className="card1 mt-4 py-5 px-md-5 px-3 rounded-4">
              <div className="row align-items-center">
                <div className="col-md-7 text-white mb-4 mb-md-0">
                  <h1 className="display-5 fw-semibold">Team Medicine — Tim Profesional untuk Kesehatan Anda</h1>
                  <p className="lead">Kami adalah tim medis multidisiplin yang siap membantu pencegahan, diagnosis, dan perawatan dengan pendekatan manusiawi.</p>
                  <Link to={"/tim"} className="btn btn-accent me-2 btn1" style={{ fontWeight: 700 }}>
                    Lihat Tim
                  </Link>
                  <Link to={"/kontak"} className="btn btn-outline-light me-2" style={{ fontWeight: 700 }}>
                    Buat Janji
                  </Link>
                  <Link to={"jadwal"} className="btn btnjadwal " style={{ fontWeight: 700 }}>
                    Lihat Jadwal Dokter
                  </Link>
                </div>
                <div className="col-md-5">
                  <div className="bg-white p-4 rounded-3 shadow-sm">
                    <h5 className="fw-bold mb-3" style={{ color: "#0b7285" }}>
                      Layanan Unggulan
                    </h5>
                    <ul className="mb-2">
                      <li className="list">Pemeriksaan Kesehatan Umum</li>
                      <li className="list">Konsultasi Spesialis</li>
                      <li className="list">Telemedicine dan Follow-up</li>
                    </ul>
                    <p className="mb-0">
                      <small>Jam layanan: Senin–Sabtu, 08:00–17:00</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1 mt-4 rounded-4 p-5" style={{ background: "linear-gradient(90deg, #b6b1b1, #c2bbbb)" }}>
              <div style={{ color: "#0b7285" }}>
                <h1 className="display-5 fw-medium mb-5">Apa Kata Pasien Kami</h1>
                <div className="row g-4 justify-content-center" style={{ color: "black" }}>
                  <div className="col-md-4 d-flex">
                    <div className="grid shadow-sm p-3 flex-fill d-flex flex-column justify-content-between">
                      <img src={Profil1} className="profil d-block" alt="Foto Pasien 1" />
                      <p className="rating mt-2 text-center">★★★★☆</p>
                      <div className="card-body">
                        <p className="card-text">Pelayanan sangat profesional dan ramah/guna mudah mengerti merasa jauh lebih tenang setiap konsultasi.</p>
                      </div>
                      <span className="iden fw-semibold mt-auto pt-2">Budi P, Bekasi</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="grid shadow-sm p-3 flex-fill d-flex flex-column justify-content-between">
                      <img src={Profil2} className="profil d-block" alt="Foto Pasien 2" />
                      <p className="rating mt-2 text-center">★★★★★</p>
                      <div className="card-body">
                        <p className="card-text">Proses diagnosis cepat. Team-Team Medicine berikan pendidikan pendidikan humanis.</p>
                      </div>
                      <span className="iden fw-semibold mt-auto pt-2">Rina S, Jakarta Selatan</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="grid shadow-sm p-3 flex-fill d-flex flex-column justify-content-between">
                      <img src={Profil3} className="profil d-block" alt="Foto Pasien 3" />
                      <p className="rating mt-2 text-center">★★★★⯪</p>
                      <div className="card-body">
                        <p className="card-text">Saya menghubungi untuk permintaan perubahan jadwal. Respon dari Tim sangat cepat dan membantu, prosesnya mudah dan sederhana. Terima kasih banyak, Tim!</p>
                      </div>
                      <span className="iden fw-semibold mt-auto pt-2">Keluarga Adi, Jakarta</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link to={"testimoni"} className="link1 fs-5" style={{ color: "#0b7285" }}>
                    Lihat Rating Lainnya...
                  </Link>
                </div>
              </div>
            </div>
            <div className="card1 mt-4 mt-5 rounded-4 p-5" style={{ background: "white" }}>
              <div style={{ color: "#0b7285" }}>
                <h1 className="display-5 fw-medium mb-5">Artikel Terbaru Dari Team Medicine</h1>
                <div className="row g-4 justify-content-center">
                  <div className="col-12 col-md-4 d-flex">
                    <div className="grid shadow-md flex-fill d-flex flex-column justify-content-between p-4 text-black">
                      <img src={Wawasan1} className="news mb-3 mx-auto d-block" alt="Artikel 1" />
                      <div className="flex-grow-1">
                        <p className="card-text">5 Tips Sederhana Menjaga Imunitas di Musim Hujan</p>
                        <span className="iden fw-semibold mt-auto text-center">10 Oktober 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="grid shadow-md flex-fill d-flex flex-column justify-content-between p-4 text-black">
                      <img src={Wawasan2} className="news mb-3 mx-auto d-block" alt="Artikel 2" />
                      <div className="flex-grow-1">
                        <p className="card-text">Panduan Lengkap: Kapan Sebaiknya Menentukan Telemedicine?</p>
                        <span className="iden fw-semibold mt-auto text-center">28 September 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 d-flex">
                    <div className="grid shadow-md flex-fill d-flex flex-column justify-content-between p-4 text-black">
                      <img src={Wawasan3} className="news mb-3 mx-auto d-block" alt="Artikel 3" />
                      <div className="flex-grow-1">
                        <p className="card-text">Mengenal Tanda-tanda Awal Penyakit Jantung yang Seringkali Terabaikan</p>
                        <span className="iden fw-semibold mt-auto text-center">10 Agustus 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", paddingTop: "25px" }}>
                  <Link to={"artikel"} className="btn2">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="footer-content">
              <p>© 2025 Team Medicine | Laqsha</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Home;
