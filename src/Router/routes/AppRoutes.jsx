import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../../views/Home/Home";
import Portofolio from "../../views/Portofolio/Portofolio";
import Vision from "../../views/Vision/Vision";
import News from "../../views/News/News";
import Contact from "../../views/Contact/Contact";

const AppRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nos-projet" element={<Portofolio />} />
      <Route path="/notre-vision" element={<Vision />} />
      <Route path="/nos-actualites" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
