import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { get } from '../utils/fetch'
import { setProfile } from '../actions/authentication'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AutoForm, { required } from '../utils/AutoForm'

const styles = {}

const mapDispatchToProps = dispatch => ({
  setProfile: profile => dispatch(setProfile(profile))
})

class LoginForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/login/'}
        method={'POST'}
        onSubmitted={() => {
          get('/rest-auth/user/').then((json) => {
            this.props.setProfile({
              username: json.username,
              email: json.email
            })
            this.props.history.push('/')
          })
        }}
        buttonDisplayText={'Login'}
        feedbackOnValidFields={false}
        fields={[
          {
            name: 'username',
            displayName: 'Username',
            placeholder: 'Username',
            initialValue: '',
            type: 'text',
            clientSideValidation: required,
            serverSideValidation: (value, values) => new Promise(resolve => setTimeout(() => resolve([]), 10))
          },
          {
            name: 'password',
            displayName: 'Password',
            placeholder: 'Password',
            initialValue: '',
            type: 'password',
            clientSideValidation: required,
            serverSideValidation: (value, values) => new Promise(resolve => setTimeout(() => resolve([]), 10))
          }
        ]}
      />
    )
  }
}

LoginForm.propTypes = {}

LoginForm.defaultProps = {}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
  withRouter
)(LoginForm)
