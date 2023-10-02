import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo/logo_big_givi.png";
import LogoSmall from "../../assets/Logo/logo_small_givi.png";

import "./Header.scss";

const Header = () => {
  const [changeLogo, setChangeLogo] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setChangeLogo(true);
    } else {
      setChangeLogo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className={changeLogo ? "header__logo--small" : "header__logo"}>
        <Link to="/">
          <img src={changeLogo ? LogoSmall : Logo} alt="logo givi" />
        </Link>
      </div>
      <ul className="header__items">
        <li className="header__item">
          <Link className="item__link" to="/nos-projet">
            Nos projets
          </Link>
        </li>
        <li className="header__item">
          <Link className="item__link" to="/notre-vision">
            Notre vision
          </Link>
        </li>
        <li className="header__item">
          <Link className="item__link" to="/nos-actualites">
            Nos actualités
          </Link>
        </li>
        <li className="header__item">
          <Link className="item__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
