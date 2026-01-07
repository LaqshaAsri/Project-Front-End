import React from "react";
import "../../styles/StyleL.css";
import { kirimTestimoni } from "../../utilities/JsL.js";
import Profil1 from "../../assets/Profil1.png";
import Profil2 from "../../assets/Profil2.png";
import Profil3 from "../../assets/Profil3.png";
import Profil4 from "../../assets/Profil4.png";
import Profil5 from "../../assets/Profil5.png";
import DefaultProfil from "../../assets/Default Profile.jpg";

class Testimoni extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      kota: "",
      pesan: "",
      rating: "5.0",
      testimoniUser: [],
    };
  }

  renderStar = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return "★".repeat(full) + (half ? "⯪" : "") + "☆".repeat(empty);
  };

  timeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30);
    return `${months} days ago`;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { nama, kota, pesan, rating } = this.state;

    const newTestimoni = {
      nama,
      kota,
      pesan,
      rating: parseFloat(rating),
      time: Date.now(),
    };

    this.setState(
      (prev) => ({
        testimoniUser: [newTestimoni, ...prev.testimoniUser],
        nama: "",
        kota: "",
        pesan: "",
        rating: "5.0",
      }),

      () => {
        kirimTestimoni();
      }
    );
  };

  staticTestimoni = [
    {
      nama: "Budi P",
      kota: "Bekasi",
      pesan: "Pelayanan sangat profesional dan ramah...",
      rating: 4,
      timeText: "2 months ago",
      foto: Profil1,
    },
    {
      nama: "Rina S",
      kota: "Jakarta Selatan",
      pesan: "Proses diagnosis cepat...",
      rating: 5,
      timeText: "1 month ago",
      foto: Profil2,
    },
    {
      nama: "Keluarga Adi",
      kota: "Jakarta",
      pesan: "Respon dari Tim sangat cepat...",
      rating: 4.5,
      timeText: "6 months ago",
      foto: Profil3,
    },
    {
      nama: "Andi P",
      kota: "Bandung",
      pesan: "Pelayanan cukup baik...",
      rating: 3,
      timeText: "3 months ago",
      foto: Profil4,
    },
    {
      nama: "Sinta L",
      kota: "Surabaya",
      pesan: "Dokternya ramah...",
      rating: 3.5,
      timeText: "1 month ago",
      foto: Profil5,
    },
  ];

  render() {
    const allTestimoni = [
      ...this.state.testimoniUser.map((t) => ({
        ...t,
        foto: DefaultProfil,
        timeText: this.timeAgo(t.time),
      })),
      ...this.staticTestimoni,
    ];
    return (
      <>
        <title>Testimoni Pasien | Team Medicine</title>
        <div className="laqsha-page">
          <main style={{ marginTop: "80px" }}>
            <div className="card1 mt-4 py-5 px-md-5 px-3" style={{ background: "none" }}>
              <div style={{ color: "#0b7285" }}>
                <div className="container my-5 text-center">
                  <h1 className="display-5 fw-semibold" style={{ color: "#0b7285" }}>
                    <i className="fa-solid me-2"></i> Testimoni Pasien
                  </h1>
                  <p className="lead fs-5 fst-italic">Pendapat dan pengalaman pasien setelah menggunakan layanan kami.</p>
                </div>
                <div className="container mb-5">
                  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators mb-1">
                      {allTestimoni.map((_, i) => (
                        <button key={i} type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined}></button>
                      ))}
                    </div>
                    <div className="carousel-inner rounded-4">
                      {allTestimoni.map((t, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                          <div className="row justify-content-center">
                            <div className="col-lg-8">
                              <div className="card1 card3 shadow-lg p-4 rounded-4 position-relative">
                                <i className="fas fa-quote-left fa-3x text-muted opacity-25 position-absolute top-0 start-0 m-3"></i>

                                <div className="card3-body">
                                  <div className="headCard">
                                    <p className="rating">{this.renderStar(t.rating)}</p>
                                    <p>{t.timeText}</p>
                                  </div>

                                  <p className="fst-italic fs-5">"{t.pesan}"</p>

                                  <div className="d-flex align-items-center mt-4">
                                    <img src={t.foto} className="rounded-circle me-3" style={{ width: "50px", height: "50px" }} alt="Avatar" />
                                    <div>
                                      <h6 className="mb-0 fw-bold">{t.nama}</h6>
                                      <p className="mb-0">{t.kota}</p>
                                    </div>
                                  </div>
                                </div>

                                <i className="fas fa-quote-right fa-3x text-muted opacity-25 position-absolute bottom-0 end-0 m-3"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card1 mt-4 my-5 py-3 px-md-5 px-3" style={{ background: "none" }}>
              <h2 className="mb-4" style={{ color: "#0b7285" }}>
                Bagikan Pengalaman Anda
              </h2>
              <form onSubmit={this.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="nama" className="form-label">
                      Nama Lengkap
                    </label>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} className="form-control" id="nama" placeholder="Masukkan nama Anda" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="kota" className="form-label">
                      Kota & Provinsi
                    </label>
                    <input type="text" name="kota" value={this.state.kota} onChange={this.handleChange} className="form-control" id="kota" placeholder="Contoh: Jakarta Selatan, DKI Jakarta" required />
                  </div>
                  <div className="col-md-6 mt-2">
                    <label htmlFor="rating" className="form-label">
                      Rating
                    </label>
                    <select name="rating" value={this.state.rating} onChange={this.handleChange} className="form-select">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}.0
                        </option>
                      ))}
                      {[1.5, 2.5, 3.5, 4.5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">
                    Kesan / Pesan
                  </label>
                  <textarea name="pesan" value={this.state.pesan} onChange={this.handleChange} className="form-control" id="pesan" rows="5" placeholder="Bagaimana pengalaman Anda? Ceritakan secara detail..."></textarea>
                </div>
                <button type="submit" className="btn3 btn-dark">
                  Kirim Testimoni
                </button>
              </form>
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

export default Testimoni;
