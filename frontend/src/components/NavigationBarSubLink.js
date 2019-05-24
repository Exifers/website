import React, { Component } from 'react'
import withStyles from 'react-jss'
import { NavLink } from 'react-router-dom'

const styles = {
  navigationBarSubLink: {
    width: '100%',
    margin: 'auto 0px auto 0px',
    paddingLeft: '30px',
    textDecoration: 'none',
    color: '#7194d2',
    fontSize: '18px',
    fontFamily: 'Russo One, sans-serif',
    fontStyle: 'italic',
    height: '50px',
    display: 'flex',
    '& span': {
      marginTop: 'auto',
      marginBottom: 'auto'
    },
    '&:hover': {
      backgroundColor: '#6fa3eb',
      textDecoration: 'none'
    },
    '&:hover span': {
      color: 'white !important'
    }
  },
  activeNavigationBarSubLink: {
    fontWeight: 'bold'
  }
}

class NavigationBarSubLink extends Component {
  render () {
    return (
      <NavLink className={this.props.classes.navigationBarSubLink}
        activeClassName={this.props.classes.activeNavigationBarSubLink}
        exact to={this.props.to}
      >
        <span>{this.props.children}</span>
      </NavLink>
    )
  }
}

NavigationBarSubLink.defaultProps = {
  onPointerEnter: () => {
  },
  onPointerLeave: () => {
  }
}

export default withStyles(styles)(NavigationBarSubLink)
