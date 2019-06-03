import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { required } from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {}

class RegisterForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/registration/'}
        method={'POST'}
        buttonDisplayText={'Register'}
        fields={[
          {
            name: 'username',
            displayName: 'Username',
            placeholder: 'Username',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'email',
            displayName: 'Email',
            placeholder: 'Email',
            initialValue: '',
            type: 'email',
            clientSideValidation: required
          },
          {
            name: 'password1',
            displayName: 'Password',
            placeholder: 'Password',
            initialValue: '',
            type: 'password',
            clientSideValidation: required
          },
          {
            name: 'password2',
            displayName: 'Password confirm',
            initialValue: '',
            placeholder: 'Password confirm',
            type: 'password',
            clientSideValidation: required
          }
        ]}
        onSubmitted={() => {
          this.props.history.push('/accounts/register/done/')
        }}
      />
    )
  }
}

RegisterForm.propTypes = {}

RegisterForm.defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(RegisterForm)
