import "./App.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tour from "./pages/Tour";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
