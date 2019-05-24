import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import NavLink from 'react-router-dom/es/NavLink'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class RegisterPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <form className={this.props.classes.form} method={'POST'}>
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input type="text" className="form-control" id="usernameInput"
              placeholder="Username" autoFocus name={'username'}/>
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput"
              placeholder="Email" name={'email'}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input type="password" className="form-control" id="passwordInput"
              placeholder="Password" name={'password'}/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPasswordInput">Confirm password</label>
            <input type="password" className="form-control" id="confirmPasswordInput"
              placeholder="Confirm password" name={'password_confirm'}/>
          </div>
          <button type="submit" className="btn btn-dark">Register</button>
        </form>
        <NavLink to={'/accounts/login/'}>Login</NavLink>
      </div>
    )
  }
}

RegisterPane.propTypes = {}

RegisterPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(RegisterPane)
