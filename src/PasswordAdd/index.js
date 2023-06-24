import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordAdd extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    staredPassword: '',
    passwordItemsList: [],
    checkStatus: false,
    searchEl: '',
  }

  add = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    this.setState(prev => ({
      passwordItemsList: [
        ...prev.passwordItemsList,
        {
          id: v4(),
          websiteInput,
          usernameInput,
          passwordInput,
        },
      ],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  website = event => this.setState({websiteInput: event.target.value})

  username = event => this.setState({usernameInput: event.target.value})

  password = event => {
    console.log(event.target.value)
    this.setState({
      passwordInput: event.target.value,
      staredPassword: '*'.repeat(event.target.value.length),
    })
  }

  checkedStatus = () =>
    this.setState(prev => ({checkStatus: !prev.checkStatus}))

  deleteItemOnId = id => {
    console.log(id)
    const {passwordItemsList} = this.state

    const updatedList = passwordItemsList.filter(each => id !== each.id)

    this.setState({passwordItemsList: updatedList})
  }

  searchInput = event => {
    // const {passwordItemsList} = this.state

    // const searchreslut = event.target.value
    this.setState({searchEl: event.target.value})

    // const searchedList = passwordItemsList.filter(each =>
    //   each.websiteInput.toLowerCase().includes(searchEl.toLowerCase()),
    // )
    // this.setState({passwordItemsList: searchedList})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordItemsList,
      staredPassword,
      checkStatus,
      searchEl,
    } = this.state

    const filteredList = passwordItemsList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchEl.toLowerCase()),
    )
    console.log(checkStatus)
    console.log(passwordInput, staredPassword)
    return (
      <div className="app-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="top-section">
            <form className="add-container">
              <h1>Add New Password</h1>
              <div className="inputEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  onChange={this.website}
                  value={websiteInput}
                  type="text"
                  placeholder="Enter Website"
                />
              </div>
              <div className="inputEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                />
                <input
                  onChange={this.username}
                  value={usernameInput}
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="inputEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                />
                <input
                  onChange={this.password}
                  value={passwordInput}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" onClick={this.add}>
                Add
              </button>
            </form>
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div>
            <div className="your-password-container">
              <div>
                <h1 id="listLength">Your Passwords</h1>
                <p>{filteredList.length}</p>
              </div>

              <div className="inputEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.searchInput}
                />
              </div>
            </div>
            <input
              id="checkBox"
              type="checkbox"
              onChange={this.checkedStatus}
            />
            <label htmlFor="checkBox">Show Passwords</label>
            <ul>
              {filteredList.length === 0 ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="password-manager-img"
                  />
                  <p>No Passwords</p>
                </div>
              ) : (
                filteredList.map(each => (
                  <PasswordItem
                    passwordItem={each}
                    key={each.id}
                    status={checkStatus}
                    deleteListItem={this.deleteItemOnId}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordAdd
