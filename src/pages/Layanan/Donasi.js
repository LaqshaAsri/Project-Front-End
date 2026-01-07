import React, { useState, useEffect } from "react";
import "../../styles/StyleF.css";
import { kirimDonasi } from "../../utilities/JsF.js";

function Donasi() {
  const [totalDonasi, setTotalDonasi] = useState(30245321);
  const [nominal, setNominal] = useState("");

  useEffect(() => {
    document.title = "Donasi | Team Medicine";
  });

  const handleChange = (e) => {
    setNominal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nominalAngka = parseInt(nominal, 10);

    if (!nominalAngka || nominalAngka <= 0) {
      alert("Masukkan nominal donasi yang valid");
      return;
    }

    setTotalDonasi((prev) => prev + nominalAngka);
    setNominal("");

    kirimDonasi(nominalAngka);
  };

  return (
    <>
      <div className="felix-page page-wrapper">
        <main className="page-content bodyy">
          <div className="container mt-4">
            <div className="guide-box">
              <h1 className="text-center mb-3">Bantu Sesama Dengan Donasi</h1>
              <h3 className="text-center mb-3">Donasi Terkumpul (Rp {totalDonasi.toLocaleString("id-ID")})</h3>
              <p className="text-justify">
                Rumah sakit kami memiliki program sosial yang ditujukan untuk membantu pasien kurang mampu agar tetap bisa mendapatkan pelayanan medis yang layak. Setiap rupiah yang kamu donasikan akan sangat berarti bagi mereka yang
                membutuhkan.
              </p>

              <p className="mt-3 text-justify">
                Donasi bisa diberikan dalam bentuk uang tunai, alat kesehatan, atau kebutuhan medis lainnya. Kami juga terbuka untuk kerja sama dengan organisasi atau lembaga sosial yang memiliki visi serupa.
              </p>

              <div className="text-center mt-4">
                <h5>Nomor Rekening Donasi</h5>
                <p>
                  <strong>Bank BRI</strong> - 1234 5678 9100
                </p>
                <p>
                  <strong>Bank Mandiri</strong> - 9876 5432 1011
                </p>
              </div>

              <div className="mt-4">
                <form onSubmit={handleSubmit}>
                  <label className="form-label">Nama Donatur:</label>
                  <input type="text" className="form-control" placeholder="" />

                  <label className="form-label mt-3">Nominal Donasi (Rp):</label>
                  <input type="number" className="form-control" value={nominal} onChange={handleChange} placeholder="" required />

                  <label className="form-label mt-3">Pesan atau Doa:</label>
                  <textarea className="form-control" rows="3" placeholder="(Opsional)"></textarea>

                  <button type="submit" className="btn-toska mt-3 w-100" id="btnDonasi">
                    Kirim Donasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="footer-content">
            <p>© 2025 Team Medicine | Felix</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Donasi;
