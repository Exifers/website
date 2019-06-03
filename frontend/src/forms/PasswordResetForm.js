import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { validEmail } from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {}

class PasswordResetForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/password/reset/'}
        method={'POST'}
        fields={[
          {
            name: 'email',
            displayName: 'Email',
            placeholder: 'Email',
            initialValue: '',
            type: 'text',
            clientSideValidation: validEmail
          }
        ]}
        onSubmitted={() => {
          this.props.history.push('/accounts/password_reset/done/')
        }}
        buttonDisplayText={'Reset password'}
      />
    )
  }
}

PasswordResetForm.propTypes = {}

PasswordResetForm.defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(PasswordResetForm)
