import { useState, useRef } from "react"
import '../styles/Input.css'
import '../styles/PinInput.css'
import '../styles/Button.css'

function PinInput({ length = 5, correctPin = "12345" }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // {text, type}
  const inputsRef = useRef([]);

  // Handle typing
  const handleChange = (e, index) => {
    const val = e.target.value;

    if (!/^\d$/.test(val)) {
      return; // only allow single digit
    }

    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);

    // Move focus to next input
    if (index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace and arrow keys
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newValues = [...values];
  
      if (values[index]) {
        newValues[index] = ""; // clear current field
        setValues(newValues);
      } else if (index > 0) {
        newValues[index - 1] = ""; // clear previous field
        setValues(newValues);
        inputsRef.current[index - 1].focus();
      }
    }
  
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  
    if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  

  // Handle paste event
  const handlePaste = (e, index) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const newValues = [...values];
    pasted.split("").forEach((digit, i) => {
      if (index + i < length) {
        newValues[index + i] = digit;
      }
    });
    setValues(newValues);

    const nextIndex = Math.min(index + pasted.length, length - 1);
    inputsRef.current[nextIndex].focus();
  };

  // Submit handler
  const handleSubmit = async () => {
    const pin = values.join("");
    if (pin.length !== length) {
      setMessage({ text: "⚠️ Please fill all digits", type: "danger" });
      return;
    }

    setLoading(true);
    setMessage(null);

    await new Promise((res) => setTimeout(res, 1000)); // simulate delay

    if (pin === correctPin) {
      setMessage({ text: "✅ Box found, redirecting...", type: "success" });
      setTimeout(() => {
        window.location.href = "ad-detail.html";
      }, 1500);
    } else {
      setMessage({ text: "❌ The PIN is incorrect.", type: "danger" });
      // flash error animation
    }

    setLoading(false);
  };

  const allFilled = values.every((val) => val !== "");

  return (
    <div>
      {/* PIN inputs */}
      <div className="pin-container d-flex mb-4">
        {values.map((val, i) => (
          <input
            key={i}
            type="text"
            className={`lh-input pin-input-field ${val ? "filled" : ""}`}
            maxLength="1"
            inputMode="numeric"
            value={val}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e, i)}
            ref={(el) => (inputsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* Submit button */}
      <div className="d-grid gap-2 mb-3">
        <button
          className="lh-button"
          disabled={!allFilled || loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Verifying...
            </>
          ) : (
            "View Message"
          )}
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className={`alert alert-${message.type} mb-0`}>{message.text}</div>
      )}
    </div>
  );
}

export default PinInput;
