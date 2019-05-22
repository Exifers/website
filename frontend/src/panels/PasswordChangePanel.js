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

class PasswordChangePanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        {form_errors // eslint-disable-line no-undef
          ? <p
            dangerouslySetInnerHTML={{ __html: form_errors }} // eslint-disable-line no-undef
          />
          : null
        }
        <form className={this.props.classes.form} method={'POST'}>
          <input
            type={'hidden'}
            value={csrf_token} // eslint-disable-line no-undef
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

PasswordChangePanel.propTypes = {}

PasswordChangePanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangePanel)
