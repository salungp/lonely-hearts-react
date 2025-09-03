import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import Header from "../components/Header";
import mailIcon from "../assets/images/envelope-icon.png";
import flowerIcon from "../assets/icons/flower-png.png";
import gpayIcon from "../assets/icons/google-pay.png";
import applePayIcon from "../assets/icons/apple-pay.png";
import Popup from "../components/Popup";
import "react-phone-input-2/lib/style.css";
import "../styles/Button.css";
import "../styles/Offer.css";


function Offer() {
  const [activeItem, setItem] = useState(0);
  const [popup, setPopup] = useState(false);
  const [phone, setPhone] = useState("");
  useEffect(() => {}, [activeItem]);

  const offerItemData = [
    {
      id: 1,
      name: "Featured reply",
      description: "Blue eyes, long legs, shorter patience for broke men three",
      price: 50,
      image: mailIcon,
    },
    {
      id: 2,
      name: "Send a real red rose",
      description: "Blue eyes, long legs, shorter patience for broke men three",
      price: 60,
      image: flowerIcon,
    },
    {
      id: 3,
      name: "Send as a letter",
      description: "Blue eyes, long legs, shorter patience for broke men three",
      price: 120,
      image: mailIcon,
    },
  ];

  const offerItem = offerItemData.map((item) => (
    <div
      key={item.id}
      className={`lh-feed-card ${
        item.id == activeItem ? "lh-active-feed" : ""
      }`}
      style={{ gap: "16px", alignItems: "flex-start", marginBottom: "12px" }}
      onClick={() => {
        setItem(item.id);
      }}
    >
      <div className="lh-feed-icon">
        <img src={item.image} alt="Envelope icon" />
      </div>

      <div className="lh-feed-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  const activePrice = offerItemData.filter((item) => item.id === activeItem);

  return (
    <>
      <Header back={true} backTo="/write-ad"></Header>
      <div className="container-sm">
        <h1 className="lh-title mb-3">Stand out</h1>
        {offerItem}
        <h2 className="lh-offer-price mb-3">
          {activeItem != 0
            ? "$" + activePrice.map((item) => item.price)
            : "$50"}
        </h2>
        <div
          className="form-check d-flex justify-content-center mb-4"
          style={{ gap: "10px" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="checkDefault"
          />
          <label className="form-check-label text-transform-uppercase">
            Agree with terms & condition
          </label>
        </div>
        <button
          className="lh-button mb-2"
          id="payWithApple"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          <img
            className="lh-button-icon-img"
            src={gpayIcon}
            alt="Pay with apple pay"
          />
          with apple pay
        </button>
        <button className="lh-button mb-4" id="payWithGoogle" onClick={() => {
                setPopup(!popup);
            }}>
          <img
            className="lh-button-icon-img"
            src={applePayIcon}
            alt="Pay with apple pay"
          />
          with apple google
        </button>
      </div>

      <Popup
        popupState={popup}
        onClose={() => {
          setPopup(!popup);
        }}
      >
        <h2 className="lh-title" style={{ textAlign: "left" }}>
          Before continue
        </h2>

        <div className="lh-input-group mb-3">
          <label
            htmlFor="name"
            style={{ textAlign: "left", width: "100%", marginBottom: "6px" }}
          >
            Name
          </label>
          <input
            type="text"
            className="lh-input"
            placeholder="Enter your name"
            name="name"
          />
        </div>

        <div className="lh-input-group mb-3 position-relative">
          <label
            htmlFor="name"
            style={{ textAlign: "left", width: "100%", marginBottom: "6px" }}
          >
            Phone number
          </label>
          <div className="position-relative">
            <PhoneInput
              country={"us"} // default country
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="lh-input lh-input-tel"
              containerClass="lh-input-group"
              buttonClass="lh-tel-button"
            />
          </div>
        </div>

        <button className="lh-button">Sign up</button>
      </Popup>
    </>
  );
}

export default Offer;
