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
  }

  add = () => {
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

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordItemsList,
      staredPassword,
      checkStatus,
    } = this.state
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
            <div className="add-container">
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
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="password"
                />
                <input
                  onChange={this.password}
                  value={passwordInput}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="button" onClick={this.add}>
                Add
              </button>
            </div>
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div>
            <div className="your-password-container">
              <h1>Your Passwords</h1>
              <div className="inputEl-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="password"
                />
                <input type="search" placeholder="Search" />
              </div>
            </div>
            <input type="checkbox" onChange={this.checkedStatus} />
            <ul>
              {passwordItemsList.map(each => (
                <PasswordItem
                  passwordItem={each}
                  key={each.id}
                  status={checkStatus}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordAdd
