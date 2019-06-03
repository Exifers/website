import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import NavLink from 'react-router-dom/es/NavLink'
import LoginForm from '../forms/LoginForm'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class LoginPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <LoginForm/>
        <NavLink to={'/accounts/password_reset/'}>Lost password ?</NavLink>
      </div>
    )
  }
}

LoginPane.propTypes = {}

LoginPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(LoginPane)
