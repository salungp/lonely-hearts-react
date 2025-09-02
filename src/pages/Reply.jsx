import { useState } from "react";
import Header from "../components/Header";
import RadioOption from "../components/RadioInput";
import { useNavigate } from "react-router-dom";

export default function ReplyOptions() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selected) {
      navigate('/' + selected);
    } else {
      alert("Please select an option first!");
    }
  };

  return (
    <>
      <Header back={true} backTo="/ad-detail"></Header>
      <div className="container">
      <h1 className="lh-title mb-3">
            Enter PO Box Number
          </h1>

        <RadioOption
          id="one"
          label="I'll write it"
          value="write-ad"
          selected={selected}
          onChange={setSelected}
        />

        <RadioOption
          id="two"
          label="Help me write it"
          value="help-write-ad"
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
