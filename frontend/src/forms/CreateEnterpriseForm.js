import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm, { combineValidators, minimalLength, required, sameAs } from '../utils/AutoForm'

const styles = {}

class CreateEnterpriseForm extends Component {
  render () {
    return (
      <AutoForm
        url={'/rest-auth/registration/'}
        method={'POST'}
        buttonDisplayText={'Create enterprise account'}
        fields={[
          {
            name: 'name',
            displayName: 'Enterprise name',
            placeholder: 'Enterprise name',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'description',
            displayName: 'Description',
            placeholder: 'Description',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'addressline1',
            displayName: 'Address line 1',
            placeholder: 'Address line 1',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'addressline2',
            displayName: 'Address line 2',
            placeholder: 'Address line 2',
            initialValue: '',
            type: 'text',
            clientSideValidation: () => []
          },
          {
            name: 'addressline3',
            displayName: 'Address line 3',
            placeholder: 'Address line 3',
            initialValue: '',
            type: 'text',
            clientSideValidation: () => []
          },
          {
            name: 'city',
            displayName: 'City',
            placeholder: 'City',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'country',
            displayName: 'Country',
            placeholder: 'Country',
            initialValue: '',
            type: 'text',
            clientSideValidation: required
          },
          {
            name: 'password1',
            displayName: 'Password',
            placeholder: 'Password',
            initialValue: '',
            type: 'password',
            clientSideValidation: minimalLength(8)
          },
          {
            name: 'password2',
            displayName: 'Password confirm',
            initialValue: '',
            placeholder: 'Password confirm',
            type: 'password',
            clientSideValidation: combineValidators([
              required,
              sameAs('password1', 'Confirmed password is different')
            ])
          }
        ]}
        onSubmitted={() => {
          this.props.history.push('/accounts/register/done/')
        }}
      />
    )
  }
}

CreateEnterpriseForm.propTypes = {}

CreateEnterpriseForm.defaultProps = {}

export default compose(
  withStyles(styles)
)(CreateEnterpriseForm)
