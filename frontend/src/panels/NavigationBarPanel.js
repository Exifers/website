import React, { Component } from 'react'
import { compose } from 'redux'
import withStyles from 'react-jss'
import NavigationBarLink from '../components/NavigationBarLink'
import NavigationBarSubLink from '../components/NavigationBarSubLink'
import NavigationBarSubLinkGroup from '../components/NavigationBarSubLinkGroup'
import NavigationBarLinkGroup from '../components/NavigationBarLinkGroup'

const styles = {
  navigationBarPanel: {
    backgroundColor: '#b4c7e7',
    width: '200px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  separator: {
    backgroundColor: '#a5b5d2',
    height: '1px',
    margin: '0px auto 0px auto',
    width: '100%'
  }
}

class NavigationBarPanel extends Component {
  render () {
    return (
      <div className={this.props.classes.navigationBarPanel}>

        <NavigationBarLink to={'/'}>Home</NavigationBarLink>
        <span className={this.props.classes.separator}/>
        <NavigationBarLink to={'/download'}>Download</NavigationBarLink>
        <span className={this.props.classes.separator}/>
        <NavigationBarLink to={'/documentation'}>Documentation</NavigationBarLink>
        <span className={this.props.classes.separator}/>
        <NavigationBarLinkGroup
          subLinks={(isHovered, onSubLinkPointerEnter, onSubLinkPointerLeave) => (
            <NavigationBarSubLinkGroup
              shouldExtend={isHovered}
              onPointerEnter={onSubLinkPointerEnter}
              onPointerLeave={onSubLinkPointerLeave}>
              <NavigationBarSubLink to={'/articles/ads'}>
                Ads & Popups
              </NavigationBarSubLink>
              <NavigationBarSubLink
                to={'/articles/password'}>
                Passwords
              </NavigationBarSubLink>
              <NavigationBarSubLink
                to={'/articles/virus'}>
                Virus
              </NavigationBarSubLink>
              <NavigationBarSubLink
                to={'/articles/wifi'}>
                Wifi
              </NavigationBarSubLink>
            </NavigationBarSubLinkGroup>
          )}>
          Articles
        </NavigationBarLinkGroup>
        <span className={this.props.classes.separator}/>
        <NavigationBarLink to={'/leaderboard'}>Leaderboard</NavigationBarLink>
        <span className={this.props.classes.separator}/>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(NavigationBarPanel)
