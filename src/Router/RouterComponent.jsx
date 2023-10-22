import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "../components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "../components/Footer/Footer";

const RouterComponent = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default RouterComponent;
