import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { combineValidators, minimalLength, required, sameAs } from '../utils/AutoForm'

const styles = {}

class PasswordResetConfirmForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/password/reset/confirm/'}
        method={'POST'}
        fields={[
          {
            name: 'uid',
            type: 'hidden',
            initialValue: this.props.uid
          },
          {
            name: 'token',
            type: 'hidden',
            initialValue: this.props.token
          },
          {
            name: 'new_password1',
            displayName: 'New password',
            placeholder: 'New password',
            initialValue: '',
            type: 'password',
            clientSideValidation: minimalLength(8)
          },
          {
            name: 'new_password2',
            displayName: 'New password confirm',
            initialValue: '',
            placeholder: 'New password confirm',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('new_password1', 'Confirmed password is different')
            ])
          }
        ]}
      />
    )
  }
}

PasswordResetConfirmForm.propTypes = {}

PasswordResetConfirmForm.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetConfirmForm)
