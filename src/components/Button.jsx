import '../styles/Button.css'

function Button({ type = 'default', color = '', children, onClick }) {
  function defineButtonType() {
    if (type === 'default') {
      return 'lh-button '
    } else if (type === 'icon') {
      return 'lh-button-icon '
    }
    return 'lh-button'
  }

  return (
    <button 
      className={defineButtonType() + color} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
