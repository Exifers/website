import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import PasswordResetForm from '../forms/PasswordResetForm'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class PasswordResetPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <PasswordResetForm/>
      </div>
    )
  }
}

PasswordResetPane.propTypes = {}

PasswordResetPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetPane)
