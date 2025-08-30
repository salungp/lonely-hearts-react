import { useRef } from "react"
import { Link } from 'react-router-dom'
import "../styles/Header.css"
import Logo from "../assets/icons/logo.svg"
import WeatherIcon from "../assets/icons/sunny.png"
import CurrentDate from "./CurrentDate"
import BackIcon from '../assets/icons/back-button-icon.svg'

function Header({ back, backTo }) {
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    dropdownRef.current.classList.toggle("active");
  };

  function BackButton() {
    return (
      back && (
        <Link to={backTo} className="lh-nav-button">
          <img src={BackIcon} alt="Icon back button" />
        </Link>
      )
    );
  }

  return (
    <>
      <header className="lh-header">
        <div className="container-sm">
          <nav>
          <BackButton />

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
          <CurrentDate />
            <div className="d-flex">
              <span>LONDON</span>
              <img src={WeatherIcon} alt="Sunny weather" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
