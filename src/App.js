import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarItem from "./components/Navbar/NavbarItem";
import Slider from "./components/Slider/Slider";
import Skill from "./components/skills/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Expereince from "./components/Experience/Expereince";
import Feedback from "./components/Feedback/Feedback";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = {
  display: "block",
  margin: "auto",
  inset: 0,
  position: "fixed",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader cssOverride={override} size={20} color="#770ad1" />
      ) : (
        <>
          <NavbarItem />
          <Slider />
          <Skill />
          <About />
          <Expereince />
          <Feedback />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
