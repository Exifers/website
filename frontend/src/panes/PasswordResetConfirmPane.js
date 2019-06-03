import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import PasswordResetConfirmForm from '../forms/PasswordResetConfirmForm'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class PasswordResetConfirmPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <PasswordResetConfirmForm
          uid={this.props.match.params.uid64}
          token={this.props.match.params.token}
        />
      </div>
    )
  }
}

PasswordResetConfirmPane.propTypes = {}

PasswordResetConfirmPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetConfirmPane)
