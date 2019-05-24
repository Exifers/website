import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {}

class GameMasterPane extends Component {
  render () {
    return (
      <div>Game master at {this.props.match.params.token}</div>
    )
  }
}

GameMasterPane.propTypes = {}

GameMasterPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterPane)
