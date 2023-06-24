import './index.css'

const PasswordItem = props => {
  const {passwordItem, status} = props
  const {websiteInput, usernameInput, passwordInput} = passwordItem

  return (
    <li>
      <p>{websiteInput[0]}</p>
      <div>
        <h1>{websiteInput}</h1>
        <p>{usernameInput}</p>
        <p>
          {status ? (
            passwordInput
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
    </li>
  )
}

export default PasswordItem
