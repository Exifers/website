import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import ChangePasswordForm from '../forms/ChangePasswordForm'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class PasswordChangePane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <ChangePasswordForm/>
      </div>
    )
  }
}

PasswordChangePane.propTypes = {}

PasswordChangePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangePane)
