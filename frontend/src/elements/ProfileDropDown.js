import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { getCookie } from '../utils/cookie'
import { connect } from 'react-redux'
import { setLoggedOut } from '../actions/authentication'

const styles = {
  button: {
    paddingLeft: '10px',
    paddingRight: '10px',
    fontWeight: 'bold',
    width: '160px',
    color: '#ccc',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff'
    }
  }
}

const mapDispatchToProps = dispatch => ({
  setProfile: profile => dispatch(setLoggedOut(profile))
})

class ProfileDropDown extends Component {
  constructor (props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout () {
    fetch('/rest-auth/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCookie('csrftoken')
      }
    })
      .then(response => response.json())
      .then(() => {
        this.props.setProfile(null)
      })
      .catch(() => {
        // todo : handle error
      })
  }

  render () {
    return (
      <div className={'dropdown'}>
        <div className={this.props.classes.button} id={'profileDropDownButton'}
          data-toggle={'dropdown'} aria-haspopup={'true'} aria-expanded={'false'}>
          <i className="fas fa-user"/> {this.props.profile.username} <i className="fas fa-caret-down"/>
        </div>

        <div className={'dropdown-menu'} aria-labelledby={'profileDropDownButton'}>
          <Link className={'dropdown-item'} to={'/accounts/profile/'}>Profile</Link>
          <Link className={'dropdown-item'} to={'/game_master/token/'}>Master a game</Link>
          <Link className={'dropdown-item'} to={'/'}>My games</Link>
          <Link className={'dropdown-item'} to={'/'} onClick={this.handleLogout}>Logout</Link>
        </div>
      </div>
    )
  }
}

ProfileDropDown.propTypes = {}

ProfileDropDown.defaultProps = {
  profile: {}
}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(ProfileDropDown)
