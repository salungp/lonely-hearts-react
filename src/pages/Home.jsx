import Header from "../components/Header";
import FeedCard from "../components/FeedCard";
import PinInput from "../components/PinInput";
import EnvelopeIcon from "../assets/images/envelope-icon.png";

function Home() {
  return (
    <>
      <Header back={false}></Header>

      <div className="container">
        <div className="d-flex justify-content-center">
          <img
            className="w-50 mb-3"
            src={EnvelopeIcon}
            alt="Envelope image icon in the center"
          />
        </div>

        <h1 className="lh-title mb-3 text-center">Enter PO Box Number</h1>

        <PinInput length={5} correctPin="12345" />

        <div className="mb-3"></div>

        <FeedCard
          link="./ad-detail"
          person="Patricia, 46, F, LONDON, semi-retired gold digger."
          loves={301}
          views={1200}
        ></FeedCard>
        <div className="mb-3"></div>
        <FeedCard
          link="./ad-detail"
          person="Alexa, 40, F, LONDON, semi-retired gold digger."
          loves={120}
          views={1010}
        ></FeedCard>
        <div className="mb-3"></div>
        <FeedCard
          link="./ad-detail"
          person="Samantha, 26, F, LONDON, semi-retired gold digger."
          loves={180}
          views={1021}
        ></FeedCard>
      </div>
    </>
  );
}

export default Home;
