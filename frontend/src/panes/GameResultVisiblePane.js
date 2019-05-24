import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  wrapper: {
    margin: '100px auto 100px auto',
    textAlign: 'center'
  }
}

class GameResultVisiblePane extends Component {
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

GameResultVisiblePane.propTypes = {}

GameResultVisiblePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameResultVisiblePane)
