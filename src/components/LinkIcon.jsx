import '../styles/LinkIcon.css'
import ChainIcon from '../assets/icons/link-icon.svg'

function LinkIcon({ box }) {
    return(
    <>
        <div className='lh-link-icon'>
            <span className='box-icon'>
                <img src={ChainIcon} alt="Link chain icon" />
            </span>
            <span className='text-content'>lonelyhearts.me/box/{box}</span>
        </div>
    </>)
}

export default LinkIcon