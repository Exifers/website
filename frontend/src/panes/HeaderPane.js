import React, { Component } from 'react'
import { compose } from 'redux'
import withStyles from 'react-jss'
import logo from '../resources/images/logo.png'
import NavLink from 'react-router-dom/es/NavLink'
import '../resources/css/main.css'
import classNames from 'classnames'
import SearchInput from '../components/SearchInput'
import FacebookLink from '../elements/FacebookLink'
import TwitterLink from '../elements/TwitterLink'
import AuthenticationLinks from '../components/AuthenticationLinks'
import NavigationBarPane from './NavigationBarPane'

const styles = {
  headerPanel: {
    backgroundColor: 'black',
    height: '180px',
    borderBottom: '5px solid #ffc000'
  },
  logo: {
    maxHeight: '180px',
    outline: '0'
  },
  search: {
    marginTop: '2px'
  },
  language: {
    float: 'right'
  },
  iconsWrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    top: '20px',
    right: '25px',
    height: '50px'
  },
  languageWrapper: {
    width: '45px'
  },
  facebook: {
    marginRight: '15px'
  },
  twitter: {
    marginRight: '15px'
  },
  logoNavlink: {
    outline: '0'
  },
  linksWrapper: {
    width: '160px',
    display: 'flex'
  },
  navbar: {
    position: 'absolute',
    top: '20px',
    left: '200px'
  }
}

class HeaderPane extends Component {
  render () {
    return (
      <div className={classNames(this.props.classes.headerPanel, 'cyberBackground')}>
        <NavLink exact to={'/'} className={this.props.classes.logoNavlink}>
          <img src={logo} alt={'logo'} className={this.props.classes.logo}/>
        </NavLink>
        <NavigationBarPane className={this.props.classes.navbar}/>
        <div className={this.props.classes.iconsWrapper}>
          <TwitterLink to={'https://twitter.com/Cyberstories1'}
            className={classNames(this.props.classes.twitter)}/>
          <FacebookLink to={'https://www.facebook.com/Cyberstories-299621230935351/'}
            className={this.props.classes.facebook}/>
          <SearchInput className={classNames(this.props.classes.search)}/>
          <div className={this.props.classes.linksWrapper}>
            <AuthenticationLinks/>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(HeaderPane)
