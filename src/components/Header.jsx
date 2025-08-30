import { useRef } from "react";
import "../styles/Header.css";
import Logo from "../assets/icons/logo.svg";
import WeatherIcon from "../assets/icons/sunny.png";

function Header() {
    const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    dropdownRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="lh-header">
        <div className="container-sm">
          <nav>
            <a href="index.html">
              <img src={Logo} alt="Lonely hearts logo heart pixelated" />
              <h2>LONELY HEARTS</h2>
            </a>

            <div className="lh-hamburger" id="lhHamburger" onClick={toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="lh-dropdown" id="lhMobileMenu" ref={dropdownRef}>
              <a href="#">Home</a>
              <a href="message.html">Message</a>
              <a href="#">Account</a>
              <a href="#">ABOUT LONELY HEARTS DATING</a>
              <a href="#">LOOKING FOR LOVE?</a>
              <a href="#">LOOKING FOR LOVE?</a>
            </div>
          </nav>

          <div className="lh-sub-header d-flex mt-3 justify-content-between">
            <h3 id="current-date">FRI 6th Jun 2025</h3>
            <div className="d-flex">
              <span>LONDON</span>
              <img src={WeatherIcon} alt="Sunny weather" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
