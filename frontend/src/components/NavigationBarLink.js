import React, { Component } from 'react'
import withStyles from 'react-jss'
import { NavLink } from 'react-router-dom'

const styles = {
  navigationLink: {
    height: '80px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#6fa3eb',
      textDecoration: 'none'
    },
    '&:hover span': {
      color: 'white !important'
    },
    display: 'flex',
    outline: '0'
  },
  activeNavigationLink: {
    fontWeight: 'bold',
    color: '#4a618a !important'
  },
  navigationLinkContent: {
    margin: 'auto 0px auto 15px',
    textDecoration: 'none',
    color: '#7194d2',
    fontSize: '20px',
    fontFamily: 'Russo One, sans-serif',
    fontStyle: 'italic'
  }
}

class NavigationBarLink extends Component {
  render (props) {
    return (
      <NavLink
        exact to={this.props.to} className={this.props.classes.navigationLink}
        activeClassName={this.props.classes.activeNavigationLink}>
        <span
          className={this.props.classes.navigationLinkContent}>
          {this.props.children}
        </span>
      </NavLink>
    )
  }
}

export default withStyles(styles)(NavigationBarLink)
