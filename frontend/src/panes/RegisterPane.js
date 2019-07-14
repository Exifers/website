import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import RegisterForm from '../forms/RegisterForm'
import { NavLink } from 'react-router-dom'

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
        <RegisterForm/>
        <NavLink to={'/enterprise/account/create/'}>Create enterprise account</NavLink>
      </div>
    )
  }
}

RegisterPane.propTypes = {}

RegisterPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(RegisterPane)
