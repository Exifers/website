import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'
import NavLink from 'react-router-dom/es/NavLink'
import { withProfile } from '../actions/authentication'
import Skeleton from 'react-loading-skeleton'

const styles = {
  wrapper: {
    maxWidth: '800px',
    margin: 'auto auto',
    padding: '40px'
  },
  dot: {
    fontSize: '8px'
  }
}

const skeleton = (
  <div className={'mx-auto'} style={{ padding: 40, maxWidth: 800 }}>
    <h1><Skeleton count={3}/></h1>
    <h1><Skeleton width={170}/></h1>
    <br/>
    <h1><Skeleton width={170}/></h1>
    <br/>
    <br/>
    <h1><Skeleton width={170}/></h1>
  </div>
)

class ProfilePane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <ul className={'list-group'}>
          <li className={'list-group-item'}>Username: {
            this.props.profile ? this.props.profile.username : null
          }</li>
          <li className={'list-group-item'}>Email: {
            this.props.profile ? this.props.profile.email : null
          }</li>
          <li className={'list-group-item'}>
            Password:{' '}
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
            <i className={classNames('fas fa-circle', this.props.classes.dot)}/>
          </li>
        </ul>
        <br/>
        <NavLink to={'/accounts/password_change/'} type={'button'} className={'btn btn-dark'}>Change
          password</NavLink><br/><br/><br/>
        <NavLink to={'/game_master/token'} type={'button'} className={'btn btn-primary'}>Become game
          master</NavLink><br/><br/><br/><br/>
        <button type={'button'} className={'btn btn-danger'}>Delete account</button>
      </div>
    )
  }
}

ProfilePane.propTypes = {}

ProfilePane.defaultProps = {}

export default compose(
  withStyles(styles),
  withProfile(skeleton)
)(ProfilePane)
