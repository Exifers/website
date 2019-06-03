import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { Field, Form, Formik } from 'formik'
import { fetchBase } from './fetch'
import classNames from 'classnames'
import LoadingRing from '../elements/LoadingRing'

const styles = {
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}

class AutoForm extends Component {
  render () {
    return (
      <Formik
        initialValues={this.props.fields.reduce((acc, cur) => {
          acc[cur.name] = cur.initialValue
          return acc
        }, {})}
        validate={(values) => {
          let errors = {}
          this.props.fields.forEach(field => {
            const fieldErrors = field.clientSideValidation(values[field.name], values)
            if (fieldErrors.length > 0) { errors[field.name] = fieldErrors }
          })
          return errors
        }}
        onSubmit={(values, actions) => {
          fetchBase(this.props.url, {
            method: this.props.method,
            body: JSON.stringify(values)
          }).then(this.props.onSubmitted)
            .catch(json => {
              actions.setSubmitting(false)
              actions.setErrors(json)
            })
        }}
      >
        {({ errors, status, touched, isSubmitting }) => (
          <Form>
            {errors.non_field_errors ? errors.non_field_errors.map(
              (error, index) => <div key={index} className={'alert alert-danger'}>{error}</div>
            ) : null}
            {this.props.fields.map((field, index) => (
              <div className={'form-group'} key={index}>
                <Field type={field.type}
                  validate={(values) => field.serverSideValidation(values[field.name], values).then(errors => {
                    if (errors && errors.length > 0) { throw errors }
                  })}
                  className={classNames(
                    'form-control',
                    errors[field.name] && errors[field.name].length && touched[field.name] && 'is-invalid',
                    (!errors[field.name] || !errors[field.name].length) &&
                    touched[field.name] && this.props.feedbackOnValidFields && 'is-valid'
                  )}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoFocus={index === 0}/>
                {errors[field.name] && errors[field.name].length !== 0 && touched[field.name] &&
                <ul className={'invalid-feedback'}>{errors[field.name].map((error, index) =>
                  <li key={index}>
                    {error}
                  </li>)}
                </ul>}
              </div>
            ))}
            <div className={this.props.classes.buttonWrapper}>
              <button type={'submit'} disabled={isSubmitting}
                className={'btn btn-dark'}>{this.props.buttonDisplayText}
              </button>
              {isSubmitting ? <LoadingRing size={'small'} className={'ml-1'}/> : null}
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

AutoForm.propTypes = {}

AutoForm.defaultProps = {
  fields: [
    {
      name: 'username',
      displayName: 'Username',
      placeholder: 'Username',
      initialValue: '',
      type: 'text',
      clientSideValidation: (value, values) => value.length > 0 ? [] : ['This field is required'],
      serverSideValidation: (value, values) => new Promise(resolve => setTimeout(() => resolve([]), 1000))
    },
    {
      name: 'nickname',
      displayName: 'Nickname',
      placeholder: 'Nickname',
      initialValue: '',
      type: 'text',
      clientSideValidation: (value, values) => [],
      serverSideValidation: (value, values) => new Promise(resolve => setTimeout(() => resolve([]), 1000))
    }
  ],
  url: '/my_api/',
  method: 'POST',
  onSubmitted: () => {},
  buttonDisplayText: 'Validate',
  feedbackOnValidFields: true
}

export default compose(
  withStyles(styles)
)(AutoForm)

export const required = (value) => value && value.length > 0 ? [] : ['This field is required']
