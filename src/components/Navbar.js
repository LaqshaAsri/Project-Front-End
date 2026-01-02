import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/StyleL.css";
import Logo from "../assets/Logo.png";

class Navbar extends React.Component {
  closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNavAltMarkup");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  render() {
    return (
      <>
        <div className="laqsha-page">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" className="d-inline-block align-text-top" style={{ width: "35px", marginTop: "-2px" }} />
                Team <strong>Medicine</strong>
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <NavLink to="/beranda" onClick={this.closeNavbar} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    Beranda
                  </NavLink>
                  <NavLink to="/tentang" onClick={this.closeNavbar} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    Tentang
                  </NavLink>
                  <NavLink to="/layanan" onClick={this.closeNavbar} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    Layanan
                  </NavLink>
                  <NavLink to="/tim" onClick={this.closeNavbar} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    Tim
                  </NavLink>
                  <NavLink to="/kontak" onClick={this.closeNavbar} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    Kontak
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
