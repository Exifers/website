import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import NavLink from 'react-router-dom/es/NavLink'
import { Field, Form, Formik } from 'formik'
import { valuesToFormData } from '../utils/formData'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class LoginPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <Formik
          onSubmit={(values, actions) => {
            values['csrfmiddlewaretoken'] = CSRF_TOKEN // eslint-disable-line no-undef
            fetch('/accounts/login/', {
              method: 'POST',
              body: valuesToFormData(values)
            })
              .then(response => response.json())
              .then(json => {
                actions.setSubmitting(false)
              })
              .catch(error => {
                console.log(error)
                actions.setSubmitting(false)
                actions.setErrors(error)
              })
          }}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form className={this.props.classes.form}>
              <Field type="text" className="form-control" id="usernameInput"
                placeholder="Username" autoFocus name={'username'}/>
              {errors.username && touched.username && <div>{errors.username}</div>}
              <Field type="password" className="form-control" id="passwordInput"
                placeholder="Password" name={'password'}/>
              <button type="submit" disabled={isSubmitting} className="btn btn-dark">Login</button>
            </Form>
          )}
        </Formik>
        <NavLink to={'/accounts/password_reset/'}>Lost password ?</NavLink>
      </div>
    )
  }
}

LoginPane.propTypes = {}

LoginPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(LoginPane)
