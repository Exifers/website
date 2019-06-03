import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { withProfile } from '../actions/authentication'
import LoginRegisterLinks from '../elements/LoginRegisterLinks'
import ProfileDropDown from '../elements/ProfileDropDown'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const styles = {
  profile: {
    marginLeft: '3px'
  }
}

const skeleton = (
  <span className={'mx-auto'}>
    <SkeletonTheme color={'#111'} highlightColor={'#333'}>
      <Skeleton width={110}/>
    </SkeletonTheme>
  </span>
)

class AuthenticationLinks extends Component {
  render () {
    return (
      this.props.profile ? (
        <ProfileDropDown className={this.props.classes.profile} profile={this.props.profile}/>
      ) : (
        <LoginRegisterLinks/>
      )
    )
  }
}

AuthenticationLinks.propTypes = {}

AuthenticationLinks.defaultProps = {}

export default compose(
  withStyles(styles),
  withProfile(skeleton)
)(AuthenticationLinks)
