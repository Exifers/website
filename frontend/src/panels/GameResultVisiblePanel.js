import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  wrapper: {
    margin: '100px auto 100px auto',
    textAlign: 'center'
  }
}

class GameResultVisiblePanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <h3>Your score is now visible on the leaderboard.</h3>
        <a href={'/leaderboard'}>Leaderboard</a>
        <br/>
        <a href={'/'}>Home</a>
      </div>
    )
  }
}

GameResultVisiblePanel.propTypes = {}

GameResultVisiblePanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameResultVisiblePanel)
