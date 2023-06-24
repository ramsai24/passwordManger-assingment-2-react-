import './index.css'

const PasswordItem = props => {
  const {passwordItem, status, deleteListItem} = props
  const {id, websiteInput, usernameInput, passwordInput} = passwordItem

  const deleteID = () => {
    deleteListItem(id)
  }

  return (
    <li>
      <p>{websiteInput[0].toUpperCase()}</p>
      <div>
        <p>{websiteInput}</p>
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
      <button type="button" data-testid="delete" onClick={deleteID}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
