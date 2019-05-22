import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

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
    display: 'flex'
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

class NavigationBarLinkGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false
    }

    this.onSubLinkPointerEnter = this.onSubLinkPointerEnter.bind(this)
    this.onSubLinkPointerLeave = this.onSubLinkPointerLeave.bind(this)
  }

  onSubLinkPointerEnter () {
    this.setState({ hovered: true })
  }

  onSubLinkPointerLeave () {
    this.setState({ hovered: false })
  }

  render (props) {
    return (
      <React.Fragment>
        <div className={this.props.classes.navigationLink}
          onPointerEnter={() => this.setState({ hovered: true })}
          onPointerLeave={() => this.setState({ hovered: false })}>
          <span
            className={this.props.classes.navigationLinkContent}>
            {this.props.children}
          </span>
        </div>
        {this.props.subLinks ? this.props.subLinks(
          this.state.hovered,
          this.onSubLinkPointerEnter,
          this.onSubLinkPointerLeave
        ) : null}
      </React.Fragment>
    )
  }
}

NavigationBarLinkGroup.propTypes = {}

NavigationBarLinkGroup.defaultProps = {}

export default compose(
  withStyles(styles)
)(NavigationBarLinkGroup)
