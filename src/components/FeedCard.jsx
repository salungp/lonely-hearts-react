import { Link } from "react-router-dom";
import '../styles/FeedCard.css'
import Logo from '../assets/icons/logo.svg'
import eyeIcon from '../assets/icons/eye-icon.svg'
import shareIcon from '../assets/icons/share.svg'

function FeedCard(props) {
    return(
    <>
        <Link to={props.link} className="lh-feed-card lh-feed-featured text-decoration-none text-dark">
            <div>
                <h2><b>{props.person}</b> Blue eyes, long legs, shorter patience for...</h2>
            
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex align-items-center">
                    <img src={Logo} className="lh-small-icon me-2" alt="Love lonely heart symbol" />
                    <span>{props.loves}</span>
                </div>
                    
                <div className="d-flex align-items-center">
                    <img src={eyeIcon} className="lh-small-icon me-2" alt="View icon" />
                    <span>{props.views}</span>
                </div>
                    
                <div>
                    <img src={shareIcon} className="lh-small-icon" alt="Share icon" />
                    </div>
                </div>
            </div>
        </Link>
    </>)
}

export default FeedCard;