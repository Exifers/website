import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import PlayerDetails from '../components/PlayerDetails'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  }
}

class PlayerDetailsPane extends Component {
  render () {
    return (
      <PlayerDetails playerId={this.props.match.params.playerId}/>
    )
  }
}

PlayerDetailsPane.propTypes = {}

PlayerDetailsPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PlayerDetailsPane)
