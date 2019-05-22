import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'
import NavLink from 'react-router-dom/es/NavLink'

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

class ProfilePanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <ul className={'list-group'}>
          <li className={'list-group-item'}>Username: {
            USERNAME // eslint-disable-line no-undef
          }</li>
          <li className={'list-group-item'}>Email: {
            EMAIL // eslint-disable-line no-undef
          }</li>
          <li className={'list-group-item'}>
            Password :
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

ProfilePanel.propTypes = {}

ProfilePanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(ProfilePanel)
