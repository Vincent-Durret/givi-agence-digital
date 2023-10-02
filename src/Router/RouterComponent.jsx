import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import Home from "../views/Home/Home";
import Portofolio from "../views/Portofolio/Portofolio";
import Vision from "../views/Vision/Vision";
import News from "../views/News/News";
import Contact from "../views/Contact/Contact";

const RouterComponent = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nos-projet" element={<Portofolio />} />
        <Route exact path="/notre-vision" element={<Vision />} />
        <Route exact path="/nos-actualites" element={<News />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
