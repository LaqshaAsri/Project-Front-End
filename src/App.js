import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// Halaman Beranda
import IndexHome from "./pages/Beranda/IndexHome";
import Home from "./pages/Beranda/Home";
import Jadwal from "./pages/Beranda/Jadwal";
import Testimoni from "./pages/Beranda/Testimoni";
import Artikel from "./pages/Beranda/Artikel";

// Halaman Tentang
import IndexTentang from "./pages/Tentang/IndexTentang";
import Tentang from "./pages/Tentang/Tentang";
import Lisensi from "./pages/Tentang/Lisensi";
import Mitra from "./pages/Tentang/Mitra";

// Halaman Layanan
import IndexLayanan from "./pages/Layanan/IndexLayanan";
import Layanan from "./pages/Layanan/Layanan";
import Produk from "./pages/Layanan/Produk";
import ResepKesehatan from "./pages/Layanan/ResepKesehatan";
import Panduan from "./pages/Layanan/Panduan";
import Administrasi from "./pages/Layanan/Administrasi";
import Riwayat from "./pages/Layanan/Riwayat";
import Promo from "./pages/Layanan/Promo";
import Donasi from "./pages/Layanan/Donasi";

// Halaman Tim
import IndexTeam from "./pages/Tim/IndexTeam";
import Team from "./pages/Tim/Team";
import ProfileDetail from "./pages/Tim/ProfileDetail";
// import DrArsad from "./pages/Tim/DrArsad";
// import DrLaqsha from "./pages/Tim/DrLaqsha";
// import DrJuan from "./pages/Tim/DrJuan";
// import NersMaulana from "./pages/Tim/NersMaulana";
// import NersFelix from "./pages/Tim/NersFelix";

// Halaman Kontak
import IndexKontak from "./pages/Kontak/IndexKontak";
import Kontak from "./pages/Kontak/Kontak";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/beranda" replace />} />
        <Route path="/beranda" element={<IndexHome />}>
          <Route index element={<Home />} />
          <Route path="jadwal" element={<Jadwal />} />
          <Route path="testimoni" element={<Testimoni />} />
          <Route path="artikel" element={<Artikel />} />
        </Route>

        <Route path="/tentang" element={<IndexTentang />}>
          <Route index element={<Tentang />} />
          <Route path="lisensi" element={<Lisensi />} />
          <Route path="mitra" element={<Mitra />} />
        </Route>

        <Route path="/layanan" element={<IndexLayanan />}>
          <Route index element={<Layanan />} />
          <Route path="produk" element={<Produk />} />
          <Route path="resepkesehatan" element={<ResepKesehatan />} />
          <Route path="panduan" element={<Panduan />} />
          <Route path="administrasi" element={<Administrasi />} />
          <Route path="riwayat" element={<Riwayat />} />
          <Route path="promo" element={<Promo />} />
          <Route path="donasi" element={<Donasi />} />
        </Route>

        

        <Route path="/tim" element={<IndexTeam />}>
          <Route index element={<Team />} />
          <Route path=":id" element={<ProfileDetail />} />      
          {/* <Route path="drarsad" element={<DrArsad />} />
          <Route path="drlaqsha" element={<DrLaqsha />} />
          <Route path="drjuan" element={<DrJuan />} />
          <Route path="nersmaulana" element={<NersMaulana />} />
          <Route path="nersfelix" element={<NersFelix />} /> */}
        </Route>

        <Route path="/kontak" element={<IndexKontak />}>
          <Route index element={<Kontak />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
