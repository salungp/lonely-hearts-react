import "../styles/BoxNumber.css";
import BoxNumberIcon from '../assets/icons/box-no-icon.png'

function BoxNumber({ children }) {
  return (
    <>
      <div className='d-inline-flex lh-box-no'>
        <img src={BoxNumberIcon} alt='Box icon' />
        <span>BOX No. {children}.</span>
      </div>
    </>
  );
}

export default BoxNumber;
