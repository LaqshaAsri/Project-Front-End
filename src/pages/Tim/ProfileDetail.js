import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { teamData } from "./TeamData";
import ProfilDokter from "../../assets/Profil Dokter.jpg";
import "../../styles/StyleT.css";

const ProfileDetail = () => {
  const { id } = useParams();
  const person = teamData[id];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!person) {
    return (
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <h2>Profil tidak ditemukan</h2>
        <Link to="/tim" className="btn btn-primary mt-3">Kembali ke Tim</Link>
      </div>
    );
  }

  return (
    <div className="tubagus-page">
      <div className="split-header" style={{ marginTop: "55px", background: person.themeColor }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <img src={ProfilDokter} alt={person.name} className="detail-photo-split d-block mx-auto mx-md-0" />
              <h1>
                <span style={{ color: "white" }}>{person.name}</span>
              </h1>
              <p className="lead fw-light text-white-50">{person.role}</p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
              <h5 className="fw-bold mb-1 text-white">Pengalaman: {person.experience}</h5>
              <p className="mb-3 text-white-50">{person.focus}</p>
              <Link to="/kontak" 
                className="btn fw-bold rounded-pill px-4 py-2" 
                style={{ backgroundColor: "#86bef6ff", color: "#3c6cefff", border: "none" }}>
                {person.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="container my-5 content-section">
        <ul className="nav nav-tabs mb-4 custom-tabs" id="profileTabs" role="tablist">
          <li className="nav-item">
            <button className="nav-link active fw-bold" id="tentang-tab" data-bs-toggle="tab" data-bs-target="#tentang" type="button" role="tab">
              Tentang
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link fw-bold" id="spesialis-tab" data-bs-toggle="tab" data-bs-target="#spesialis" type="button" role="tab">
              Spesialisasi
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link fw-bold" id="pendidikan-tab" data-bs-toggle="tab" data-bs-target="#pendidikan" type="button" role="tab">
              Pendidikan
            </button>
          </li>
        </ul>

        <div className="tab-content profile-tab-content p-4 shadow-sm rounded bg-white">
          <div className="tab-pane fade show active" id="tentang" role="tabpanel">
            <h3 className="section-title" style={{ color: person.accentColor }}>Filosofi Pelayanan</h3>
            <p>{person.philosophy}</p>
            <p>{person.philosophyDetail}</p>
          </div>

          <div className="tab-pane fade" id="spesialis" role="tabpanel">
            <h3 className="section-title" style={{ color: person.accentColor }}>Bidang Keahlian</h3>
            <ul className="list-group list-group-flush">
              {person.skills.map((skill, index) => (
                <li key={index} className="list-group-item d-flex align-items-center border-0">
                  <i className={`fas ${skill.icon} me-3`} style={{ color: person.accentColor }}></i>
                  {skill.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-pane fade" id="pendidikan" role="tabpanel">
            <h3 className="section-title" style={{ color: person.accentColor }}>Jejak Akademik</h3>
            {person.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <p className="fw-bold mb-0">{edu.title}</p>
                <p className="text-secondary"><small>{edu.detail}</small></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content" style={{ paddingTop: "15px" }}>
          <p>© 2025 Team Medicine | Tubagus</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfileDetail;