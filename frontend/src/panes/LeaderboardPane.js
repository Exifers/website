import React, { Component } from 'react'
import Leaderboard from '../components/Leaderboard'
import withStyles from 'react-jss'
import classNames from 'classnames'
import PitchTitle from '../elements/PitchTitle'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  }
}

class LeaderboardPane extends Component {
  render () {
    return (
      <div className={classNames('m-4 w-75 mx-auto', this.props.classes.wrapper)}>
        <br/>
        <PitchTitle className={'text-center'}>Leaderboard</PitchTitle>
        <br/>
        <Leaderboard/>
      </div>
    )
  }
}

export default withStyles(styles)(LeaderboardPane)
