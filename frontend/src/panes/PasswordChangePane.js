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

class PasswordChangePane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        {FORM_ERRORS // eslint-disable-line no-undef
          ? <p
            dangerouslySetInnerHTML={{ __html: FORM_ERRORS }} // eslint-disable-line no-undef
          />
          : null
        }
        <form className={this.props.classes.form} method={'POST'}>
          <input
            type={'hidden'}
            value={CSRF_TOKEN} // eslint-disable-line no-undef
            name={'csrfmiddlewaretoken'}
          />
          <div className="form-group">
            <label htmlFor="usernameInput">Old password</label>
            <input type="password" className="form-control" id="usernameInput"
              placeholder="Old password" autoFocus name={'old_password'}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">New password</label>
            <input type="password" className="form-control" id="passwordInput"
              placeholder="New password" name={'new_password1'}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Confirm new password</label>
            <input type="password" className="form-control" id="passwordInput"
              placeholder="Confirm new password" name={'new_password2'}/>
          </div>
          <button type="submit" className="btn btn-dark">Change password</button>
        </form>
      </div>
    )
  }
}

PasswordChangePane.propTypes = {}

PasswordChangePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangePane)
