import React, {useEffect} from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LamborghiniSlider from "./components/LSlider";
import FerrariSlider from "./components/FSlider";
import MaseratiSlider from "./components/MasSlider/idex";
import PorscheSlider from "./components/PorshSlider";
import BuggatiSlider from "./components/BugSlider";

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="models" element={<Models />} >
        <Route path="lamborghini" element={<LamborghiniSlider/>} />
        <Route path="ferrari" element={<FerrariSlider />} />
        <Route path="maserati" element={<MaseratiSlider/>} />
        <Route path="porsche" element={<PorscheSlider />} />
        <Route path="bugatti" element={<BuggatiSlider />} />
      </Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
    <Footer navigate={navigate} />
   </div>
  );
}

export default App;
