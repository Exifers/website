import React, { Component } from 'react'
import { compose } from 'redux'
import withStyles from 'react-jss'
import NavigationBarLink from '../components/NavigationBarLink'
import classNames from 'classnames'

const styles = {
  navigationBarPanel: {
    display: 'flex',
    flexDirection: 'row'
  }
}

class NavigationBarPane extends Component {
  render () {
    return (
      <div className={classNames(this.props.classes.navigationBarPanel, this.props.className)}>
        <NavigationBarLink to={'/'}>Home</NavigationBarLink>
        <NavigationBarLink to={'/download'}>Download</NavigationBarLink>
        <NavigationBarLink to={'/documentation'}>Documentation</NavigationBarLink>
        <NavigationBarLink to={'/articles'}>Articles</NavigationBarLink>
        <NavigationBarLink to={'/leaderboard'}>Leaderboard</NavigationBarLink>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(NavigationBarPane)
