import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

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

class ProfileDropDown extends Component {
  render () {
    return (
      <div className={'dropdown'}>
        <div className={this.props.classes.button} id={'profileDropDownButton'}
          data-toggle={'dropdown'} aria-haspopup={'true'} aria-expanded={'false'}>
          <i className="fas fa-user"/> {this.props.username} <i className="fas fa-caret-down"/>
        </div>

        <div className={'dropdown-menu'} aria-labelledby={'profileDropDownButton'}>
          <Link className={'dropdown-item'} to={'/accounts/profile/'}>Profile</Link>
          <Link className={'dropdown-item'} to={'/game_master/token/'}>Master a game</Link>
          <Link className={'dropdown-item'} to={'/'}>My games</Link>
          <a className={'dropdown-item'} href={'/accounts/logout/'}>Logout</a>
        </div>
      </div>
    )
  }
}

ProfileDropDown.propTypes = {}

ProfileDropDown.defaultProps = {
  username: username || 'unknown' // eslint-disable-line no-undef
}

export default compose(
  withStyles(styles)
)(ProfileDropDown)
