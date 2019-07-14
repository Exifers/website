import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import GameMasterEmailPane from './GameMasterEmailPane'
import GameMasterMapPane from './GameMasterMapPane'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '600px'
  }
}

class GameMasterPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <GameMasterEmailPane/>
        <GameMasterMapPane className={'mt-5'}/>
      </div>
    )
  }
}

GameMasterPane.propTypes = {}

GameMasterPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterPane)
