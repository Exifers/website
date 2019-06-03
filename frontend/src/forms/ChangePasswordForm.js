import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { combineValidators, required, sameAs } from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {}

class ChangePasswordForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/password/change/'}
        method={'POST'}
        onSubmitted={() => {
          this.props.history.push('/accounts/password_change/done/')
        }}
        buttonDisplayText={'Change password'}
        fields={[
          {
            name: 'old_password',
            displayName: 'Old password',
            placeholder: 'Old password',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          },
          {
            name: 'new_password1',
            displayName: 'New password',
            placeholder: 'New password',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          },
          {
            name: 'new_password2',
            displayName: 'New password confirm',
            placeholder: 'New password confirm',
            initialValue: '',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('new_password1', 'The password is different')
            ])
          }
        ]}
      />
    )
  }
}

ChangePasswordForm.propTypes = {}

ChangePasswordForm.defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(ChangePasswordForm)