import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  wrapper: {
    textAlign: 'center',
    paddingTop: '50px'
  }
}

class PasswordResetDonePanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>An email has been sent to you to reset your password.</div>
    )
  }
}

PasswordResetDonePanel.propTypes = {}

PasswordResetDonePanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetDonePanel)
