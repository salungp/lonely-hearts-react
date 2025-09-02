import '../styles/RadioInput.css'

export default function RadioOption({ id, label, value, selected, onChange }) {
    return (
      <div className="lh-radio" style={{ marginBottom: "20px" }}>
        <input
          className="lh-radio-input"
          type="radio"
          name="replyOption"
          id={id}
          value={value}
          checked={selected === value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="lh-radio-circle"></span>
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  