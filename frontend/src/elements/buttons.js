import React, { Component } from 'react'
import classNames from 'classnames'
import withStyles from 'react-jss'
import Link from 'react-router-dom/es/Link'

class LargeLink extends Component {
  render () {
    const { className, to, ...rest } = this.props
    return (
      <Link
        to={to}
        className={classNames('btn btn-dark', this.props.classes.largeButton, className)} {...rest}>
        <span className={this.props.classes.content}>{this.props.children}</span>
      </Link>
    )
  }
}

LargeLink.styles = {
  largeButton: {
    width: '220px',
    height: '80px',
    display: 'flex'
  },
  content: {
    margin: 'auto'
  }
}

export default withStyles(LargeLink.styles)(LargeLink)
