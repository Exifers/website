import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'

const styles = {
  navigationBarSubLinkGroup: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '0',
    transition: 'all 0.5s'
  },
  extended: {
    height: '200px'
  }
}

class NavigationBarSubLinkGroup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }

    this.handlePointerEnter = this.handlePointerEnter.bind(this)
    this.handlePointerLeave = this.handlePointerLeave.bind(this)
  }

  handlePointerEnter (event) {
    this.setState({ hovered: true })
    if (this.props.onPointerEnter) {
      this.props.onPointerEnter(event)
    }
  }

  handlePointerLeave (event) {
    this.setState({ hovered: false })
    if (this.props.onPointerLeave) {
      this.props.onPointerLeave(event)
    }
  }

  render () {
    return (
      <div
        className={
          classNames(
            this.props.classes.navigationBarSubLinkGroup,
            this.props.shouldExtend ? this.props.classes.extended : null
          )
        }
        onPointerEnter={this.handlePointerEnter}
        onPointerLeave={this.handlePointerLeave}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(NavigationBarSubLinkGroup)
