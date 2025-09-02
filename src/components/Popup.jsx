import "../styles/Popup.css" // Popup.jsx
import closeIcon from '../assets/icons/x-bold.svg'


export default function Popup({ popupState, onClose, children }) {
    const activeClass = popupState ? "lh-popup full-height active" : "lh-popup full-height"

    return (
      <div className={activeClass}>
        <div className="lh-popup-header">
          <button onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
  
        {/* Body */}
        <div className="lh-popup-body">{children}</div>
      </div>
    );
  }
  
  