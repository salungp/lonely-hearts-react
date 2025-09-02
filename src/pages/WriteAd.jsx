import { useNavigate } from 'react-router-dom'
import Header from "../components/Header";
import Textarea from "../components/Textarea";
import "../styles/Button.css";

function WriteAd() {
    const navigate = useNavigate()

  return (
    <>
      <Header back={true} backTo="/reply"></Header>
      <div className="container">
        <h1 className="lh-title mb-3">I'll write it</h1>
        <Textarea name="ad-value" placeholder="Write your own ad"></Textarea>
      </div>
      <div className="container-sm">
        <div className="bottom">
          <button className="lh-button" onClick={() => { navigate('/preview') }}>View message</button>
        </div>
      </div>
    </>
  );
}

export default WriteAd;
