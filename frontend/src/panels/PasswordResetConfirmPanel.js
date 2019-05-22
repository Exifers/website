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

class PasswordResetConfirmPanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        {FORM_ERRORS // eslint-disable-line no-undef
          ? <p dangerouslySetInnerHTML={{ __html: FORM_ERRORS }}/> // eslint-disable-line no-undef
          : null}
        <form className={this.props.classes.form} method={'POST'}>
          <input
            type={'hidden'}
            value={CSRF_TOKEN} // eslint-disable-line no-undef
            name={'csrfmiddlewaretoken'}/>
          <div className="form-group">
            <label htmlFor="password1Input">New password</label>
            <input type="password" className="form-control" id="password1Input"
              placeholder="New password" autoFocus name={'new_password1'}/>
          </div>
          <div className="form-group">
            <label htmlFor="password2Input">Confirm new password</label>
            <input type="password" className="form-control" id="password2Input"
              placeholder="Confirm new password" name={'new_password2'}/>
          </div>
          <button type="submit" className="btn btn-dark">Reset password</button>
        </form>
      </div>
    )
  }
}

PasswordResetConfirmPanel.propTypes = {}

PasswordResetConfirmPanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetConfirmPanel)
