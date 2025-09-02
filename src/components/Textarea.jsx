import { useState } from "react";
import TagSelectorPopup from "../components/TagSelectorPopup";

export default function Textarea() {
  const [text, setText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleApply = (value) => {
    setText(value);
    setIsPopupOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <textarea
        className="lh-textarea"
        value={text}
        onChange={(e) => {
          if (e.target.value.length <= 100) {
            setText(e.target.value);
          }
        }}
        maxLength={100}
        placeholder="Write your own ad"
      />
      <div className="lh-textarea-info">
        <span>{text.length}</span>/100
      </div>

      <button
        className="d-flex lh-box-no"
        style={{
          position: "absolute",
          bottom: "6px",
          left: "16px",
          zIndex: 99,
        }}
        onClick={() => setIsPopupOpen(true)}
      >
        Help me write
      </button>

      <TagSelectorPopup
        popupState={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onApply={handleApply}
      />
    </div>
  );
}
