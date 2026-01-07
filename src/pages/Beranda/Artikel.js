import React from "react";
import "../../styles/StyleL.css";
import Wawasan1 from "../../assets/Wawasan1.png";
import Wawasan2 from "../../assets/Wawasan2.png";
import Wawasan3 from "../../assets/Wawasan3.png";
import Wawasan4 from "../../assets/Wawasan4.png";
import Wawasan5 from "../../assets/Wawasan5.png";
import Wawasan6 from "../../assets/Wawasan6.png";
import Wawasan7 from "../../assets/Wawasan7.png";
import Wawasan8 from "../../assets/Wawasan8.png";
import Wawasan9 from "../../assets/Wawasan9.png";

class Artikel extends React.Component {
  render() {
    return (
      <>
        <title>Artikel Kesehatan | Team Medicine</title>
        <div className="laqsha-page">
          <main style={{ marginTop: "83px" }}>
            <div className="card1 mt-4 py-5 px-md-5 px-3 rounded-4">
              <div className="row align-items-center">
                <div style={{ color: "white", textAlign: "center" }}>
                  <h1 className="display-5 title">Artikel Edukasi Kesehatan📖</h1>
                  <p className="lead" style={{ fontSize: "30px", fontStyle: "italic" }}>
                    Pelajari berbagai tips dan informasi seputar kesehatan dari para ahli kami.
                  </p>
                </div>
              </div>
            </div>
            <div className="card1 mt-4 py-5 px-md-5 px-3 rounded-4" style={{ background: "linear-gradient(45deg, #ff9900, #ffcc33)" }}>
              <div className="row align-items-center">
                <h1 className="display-5" style={{ color: "white", fontWeight: "600" }}>
                  Artikel Terbaru Dari Team Medicine
                </h1>
                <div className="d-flex justify-content-center gap-4 flex-wrap mt-2">
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan1} className="news" alt="wawasan1" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">5 Tips Menjaga Imunitas di Musim Hujan</h5>
                      <p className="card-text text-muted desc">Langkah sederhana agar tubuh tetap sehat di tengah cuaca tak menentu.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        10 Oktober 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan2} className="news" alt="wawasan2" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Kapan Sebaiknya Melakukan Telemedicine?</h5>
                      <p className="card-text text-muted desc">Pelajari manfaat dan waktu yang tepat menggunakan layanan digital ini.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        28 September 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan3} className="news" alt="wawasan3" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Waspadai Gejala Awal Penyakit Jantung</h5>
                      <p className="card-text text-muted desc">Kenali tanda-tanda awal agar bisa segera ditangani dengan tepat.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        10 Agustus 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan4} className="news" alt="wawasan4" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Pola Makan Seimbang untuk Tubuh Lebih Bugar</h5>
                      <p className="card-text text-muted desc">Pelajari pentingnya mengatur asupan gizi harian agar tubuh tetap sehat dan bertenaga.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        23 Agustus 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan5} className="news" alt="wawasan5" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Pentingnya Tidur Cukup bagi Kesehatan Mental dan Fisik</h5>
                      <p className="card-text text-muted desc">Ketahui dampak kurang tidur dan cara memperbaiki pola tidur agar kualitas hidup meningkat.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        5 September 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan6} className="news" alt="wawasan6" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Bahaya Merokok bagi Jantung dan Paru-Paru</h5>
                      <p className="card-text text-muted desc">Temukan fakta ilmiah tentang dampak merokok serta tips efektif untuk berhenti dari kebiasaan ini.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        18 Oktober 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan7} className="news" alt="wawasan7" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Manfaat Meditasi untuk Mengurangi Stres dan Kecemasan</h5>
                      <p className="card-text text-muted desc">Pelajari bagaimana meditasi membantu menjaga ketenangan pikiran dan kesehatan emosional.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        9 November 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan8} className="news" alt="wawasan8" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Pentingnya Minum Air yang Cukup Setiap Hari</h5>
                      <p className="card-text text-muted desc">Cari tahu berapa banyak air yang dibutuhkan tubuh dan tanda-tanda dehidrasi yang harus diwaspadai.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        21 Desember 2025
                      </span>
                    </div>
                  </div>
                  <div className="card shadow-lg gridArc text-light" style={{ border: "none" }}>
                    <img src={Wawasan9} className="news" alt="wawasan9" />
                    <div className="card-body d-flex flex-column gridOverlay" style={{ marginTop: "-35px" }}>
                      <h5 className="card-title">Olahraga Ringan yang Bisa Dilakukan di Rumah</h5>
                      <p className="card-text text-muted desc">Kenali berbagai jenis olahraga sederhana untuk menjaga kebugaran tanpa perlu ke gym.</p>
                      <span className="iden" style={{ textAlign: "center" }}>
                        25 Desember 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div className="footer-content" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <p>© 2025 Team Medicine | Laqsha</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Artikel;
