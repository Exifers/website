import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import RegisterForm from '../forms/RegisterForm'

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
      </div>
    )
  }
}

RegisterPane.propTypes = {}

RegisterPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(RegisterPane)
