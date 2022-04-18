import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import ACSS from "./Components/ACSS"
import Songsaver from "./Components/Songsaver"
import Winc from "./Components/Winc"
import Superpy from "./Components/Superpy"
import Dashboard from "./Components/Dashboard"
import Certificate from "./Components/Certificate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acss" element={<ACSS />} />
          <Route path="/songsaver" element={<Songsaver />} />
          <Route path="/winc" element={<Winc />} />
          <Route path="/superpy" element={<Superpy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
