import React, { useEffect } from "react";
import "../../styles/StyleM.css";
import Vitamin from "../../assets/Vitamin.jpg";
import PeralatanMedis from "../../assets/Peralatan Medis.jpg";
import ProdukHerbal from "../../assets/Produk Herbal.jpg";

function Produk() {
  useEffect(() => {
    document.title = "Produk Kesehatan | Team Medicine";
  });

  return (
    <>
      <div className="maulana-page">
        <header className="text-center py-5" style={{ marginTop: "80px" }}>
          <h1>Produk Kesehatan</h1>
          <p className="lead text-secondary">Temukan produk medis terpercaya untuk mendukung gaya hidup sehat Anda.</p>
        </header>

        <main className="container my-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <img src={Vitamin} className="card-img-top rounded-top-5" alt="Vitamin" />
                <div className="card-body">
                  <h5>Vitamin & Suplemen</h5>
                  <p>Lengkapi kebutuhan nutrisi Anda dengan vitamin berkualitas untuk daya tahan tubuh optimal.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <img src={PeralatanMedis} className="card-img-top rounded-top-5" alt="Peralatan medis" />
                <div className="card-body">
                  <h5>Peralatan Medis</h5>
                  <p>Dari tensimeter hingga masker medis — alat yang praktis, akurat, dan mudah digunakan di rumah.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 rounded-5">
                <img src={ProdukHerbal} className="card-img-top rounded-top-5" alt="Produk herbal" />
                <div className="card-body">
                  <h5>Produk Herbal</h5>
                  <p>Berbahan alami yang membantu menjaga keseimbangan tubuh dan mengurangi stres harian.</p>
                </div>
              </div>
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

export default Produk;
