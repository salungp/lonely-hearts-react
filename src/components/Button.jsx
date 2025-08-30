import '../styles/Button.css'

function Button(props) {
    return(
    <>
        <button className="lh-button">{props.title}</button>
    </>)
}

export default Button