// TagSelectorPopup.jsx
import { useState } from "react";
import Popup from "../components/Popup";
import '../styles/TagSelectorPopup.css'

export default function TagSelectorPopup({ popupState, onClose, onApply }) {
  const [screen, setScreen] = useState(1);
  const [selected, setSelected] = useState("");
  const classActive = popupState;

  const screenOneTags = [
    "CYCLING", "COUNTRY WALKS", "WEEKENDS AWAY", "PHOTOGRAPHY", "READING",
    "LITERATURE", "FASHION", "FINE DINING", "CINEMA", "MOVIES"
  ];
  const screenTwoTags = [
    "Nurse", "Doctor", "Secretary", "Manager", "Videographer", "Athlete"
  ];

  const tags = screen === 1 ? screenOneTags : screenTwoTags;

  return (
    <Popup onClose={onClose} popupState={classActive}>
      <h2 className="lh-title mb-3" style={{ textAlign: "left" }}>
        {screen === 1 ? "I love" : "Looking for"}
      </h2>

      <div className="tags-container">
        {tags.map((tag) => (
          <div
            key={tag}
            className={`lh-tag ${selected === tag ? "active" : ""}`}
            onClick={() => setSelected(tag)}
          >
            {tag}
          </div>
        ))}
      </div>

      {screen === 1 ? (
        <button
          className="lh-button"
          onClick={() => setScreen(2)}
          disabled={!selected}
        >
          Continue
        </button>
      ) : (
        <button
          className="lh-button"
          onClick={() => onApply(selected)}
          disabled={!selected}
        >
          Apply
        </button>
      )}
    </Popup>
  );
}
