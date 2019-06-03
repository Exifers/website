import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {}

class RegisterDonePane extends Component {
  render () {
    return (
      <div className={'alert alert-success text-center w-50 mx-auto my-5'}>
        Your account has been successfully created
      </div>
    )
  }
}

RegisterDonePane.propTypes = {}

RegisterDonePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(RegisterDonePane)
