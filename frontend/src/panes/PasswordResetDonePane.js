import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  wrapper: {
    textAlign: 'center',
    paddingTop: '50px'
  }
}

class PasswordResetDonePane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>An email has been sent to you to reset your password.</div>
    )
  }
}

PasswordResetDonePane.propTypes = {}

PasswordResetDonePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetDonePane)
