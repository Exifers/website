import React, { Component } from 'react'
import classNames from 'classnames'
import withStyles from 'react-jss'

const styles = {
  pitchTitle: {
    fontFamily: 'Russo One, sans-serif',
    fontSize: '35px'
  }
}

class PitchTitle extends Component {
  render () {
    return (
      <div className={classNames('m-3', this.props.classes.pitchTitle, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(PitchTitle)
