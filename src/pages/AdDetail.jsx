import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Header from "../components/Header"
import LinkIcon from "../components/LinkIcon"
import Button from "../components/Button"
import BoxNumber from "../components/BoxNumber"
import Carousel from '../components/Carousel'
import heartIcon from "../assets/icons/heart.svg"
import heartFillIcon from "../assets/icons/heart-fill.svg"
import shareIcon from "../assets/icons/share.svg"
import "../styles/AdDetail.css"

function AdDetail() {
  const [like, setLike] = useState(false);
  const images = [
    "images/ad-image.png",
    "images/ad-detail-2.png",
    "images/ad-detail-3.png",
    "images/ad-detail-4.png",
    "images/ad-image.png",
    "images/ad-detail-2.png",
    "images/ad-detail-3.png",
    "images/ad-detail-4.png",
  ];
  const navigate = useNavigate()

  return (
    <>
      <Header back={true} backTo="/"></Header>
      <div className="container">
        <div className="ad-content">
          <h1 className="ad-title">
            Patricia, 46, F, LONDON, semi-retired gold digger
          </h1>
          <Carousel images={images} itemsPerView={4} />
          <p>
            Blue eyes, long legs, shorter patience for broke men. Three
            ex-husbands, zero regrets. Seeks wealthy gentlement who knows
            investments appreciate.
          </p>
          <div className="d-flex justify-content-center">
            <BoxNumber>{8888}</BoxNumber>
          </div>
          <LinkIcon box={8888}></LinkIcon>
        </div>
      </div>
      <div className="bottom d-flex" style={{ gap: "12px" }}>
        <Button
          type="icon"
          color="red"
          onClick={() => {
            setLike(!like);
          }}
        >
          <img src={like ? heartFillIcon : heartIcon} alt="Heart icon" />
        </Button>
        <Button type="default" color="red" onClick={() => { navigate('/reply') }}>
          Reply ad
        </Button>
        <Button type="icon" color="green">
          <img src={shareIcon} alt="Share icon" />
        </Button>
      </div>
    </>
  );
}

export default AdDetail;
