import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {}

class GameMasterPanel extends Component {
  render () {
    return (
      <div>Game master at {this.props.match.params.token}</div>
    )
  }
}

GameMasterPanel.propTypes = {}

GameMasterPanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterPanel)
