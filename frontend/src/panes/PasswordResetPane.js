import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

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
        {FORM_ERRORS // eslint-disable-line no-undef
          ? <p dangerouslySetInnerHTML={{ __html: FORM_ERRORS }}/> // eslint-disable-line no-undef
          : null} // eslint-disable-line no-undef
        <form className={this.props.classes.form} method={'POST'}>
          <input
            type={'hidden'}
            value={CSRF_TOKEN} // eslint-disable-line no-undef
            name={'csrfmiddlewaretoken'}/>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput"
              placeholder="Username" autoFocus name={'email'}/>
          </div>
          <button type="submit" className="btn btn-dark">Reset password</button>
        </form>
      </div>
    )
  }
}

PasswordResetPane.propTypes = {}

PasswordResetPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetPane)
