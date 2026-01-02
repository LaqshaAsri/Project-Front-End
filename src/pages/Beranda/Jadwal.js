import React from "react";
import "../../styles/StyleL.css";
import Dokter from "../../assets/Dokter.jpg";
import { Link } from "react-router-dom";

class Jadwal extends React.Component {
  render() {
    return (
      <>
        <div className="laqsha-page">
          <main style={{ marginTop: "80px" }}>
            <div className="card4 mt-4 py-5 px-md-5 px-3">
              <div className="row g-0 align-items-center h-100 flex-md-row flex-column-reverse text-center text-md-start">
                <div className="col-md-6" style={{ color: "white", padding: "15px 20px 0px 20px" }}>
                  <h1 className="display-5 fw-bold">Temukan Dokter Terbaik untuk Kebutuhan Anda</h1>
                  <p className="lead">Lihat jadwal lengkap kami dan buat janji temu dengan mudah hari ini.</p>
                </div>

                <div className="col-md-6">
                  <img src={Dokter} alt="dokter" className="img-fluid rounded-3" style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} />
                </div>
              </div>
            </div>

            <div className="card5 mt-4 py-5 px-md-5 px-3">
              <div className="text-center text-md-start px-3 px-md-5">
                <h1 className="fw-bold text-primary mb-2">Jadwal Dokter & Layanan</h1>
                <p className="text-muted mb-4">Lihat jadwal dokter kami untuk membuat janji sesuai kebutuhan Anda.</p>
              </div>

              <div className="container my-4">
                <div className="card5 shadow-sm p-3 rounded-4">
                  <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle mb-0">
                      <thead className="table-primary">
                        <tr>
                          <th>Nama Dokter</th>
                          <th>Spesialis</th>
                          <th>Hari</th>
                          <th>Jam</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={"DrArsad"} className="dokter fw-semibold">
                              Dr. Arsad, Sp.PD
                            </Link>
                          </td>
                          <td>Spesialis Penyakit Dalam</td>
                          <td>Senin - Rabu</td>
                          <td>08.00 - 14.00</td>
                          <td style={{ backgroundColor: "#53c4ac" }}>
                            <Link to={"kontak"} className="text-white text-decoration-none fw-semibold d-block py-2">
                              Pesan Sekarang
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={"DrLaqsha"} className="dokter fw-semibold">
                              Dr. Laqsha, Sp.PD
                            </Link>
                          </td>
                          <td>Spesialis Penyakit Dalam</td>
                          <td>Senin - Sabtu</td>
                          <td>09.00 - 17.00</td>
                          <td style={{ backgroundColor: "#53c4ac" }}>
                            <Link to={"kontak"} className="text-white text-decoration-none fw-semibold d-block py-2">
                              Pesan Sekarang
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={"DrJuan"} className="dokter fw-semibold">
                              Dr.Juan, Sp.KJ
                            </Link>
                          </td>
                          <td>Psikiater</td>
                          <td>Selasa - Jumat</td>
                          <td>10.00 - 15.00</td>
                          <td style={{ backgroundColor: "#53c4ac" }}>
                            <Link to={"kontak"} className="text-white text-decoration-none fw-semibold d-block py-2">
                              Pesan Sekarang
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default Jadwal;
