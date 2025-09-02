import { useState } from "react";
import Header from "../components/Header";
import RadioOption from "../components/RadioInput";
import { useNavigate } from "react-router-dom";

export default function ReplyOptions() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selected) {
      navigate("/");
    } else {
      alert("Please select an option first!");
    }
  };

  return (
    <>
      <Header back={true} backTo="/ad-detail"></Header>
      <div className="container">
      <h1 className="lh-title">
            Enter PO Box Number
          </h1>

        <RadioOption
          id="one"
          label="I'll write it"
          value="reply-first.html"
          selected={selected}
          onChange={setSelected}
        />

        <RadioOption
          id="two"
          label="Help me write it"
          value="reply-second.html"
          selected={selected}
          onChange={setSelected}
        />
      </div>

      <div className="bottom d-flex" style={{ gap: "12px" }}>
        <div className="container">
          <button id="ctaButton" className="lh-button" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
