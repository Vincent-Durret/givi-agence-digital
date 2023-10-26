import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo/logo_big_givi.png";
import LogoSmall from "../../assets/Logo/logo_small_givi.png";

// import "./Header.scss";

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
    <div className="fixed t-0 l-0 w-full h-[20vh] bg-white flex items-center justify-evenly flex-row z-10 transition-all duration-300">
      <div className="relative w-[12rem]">
        <Link to="/">
          <img
            className={`${
              changeLogo ? "hidden" : "block"
            }  transition-all duration-300`}
            src={Logo}
            alt="logo givi"
          />
          <img
            className={`${
              changeLogo ? "block" : "hidden"
            } transition-all duration-300`}
            src={LogoSmall}
            alt="logo givi small"
          />
        </Link>
      </div>
      <ul className="w-1/2 flex items-center justify-between flex-row">
        <li className="text-[1.2rem]">
          <Link className="text-black" to="/nos-projet">
            Nos projets
          </Link>
        </li>
        <li className="header__item">
          <Link className="text-black" to="/notre-vision">
            Notre vision
          </Link>
        </li>
        <li className="header__item">
          <Link className="text-black" to="/nos-actualites">
            Nos actualités
          </Link>
        </li>
        <li className="header__item">
          <Link className="text-black" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
