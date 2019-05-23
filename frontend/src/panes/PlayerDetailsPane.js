import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'
import GameResult from '../components/GameResult'
import { withLeaderboardEntries } from '../actions/leaderboard'

const styles = {
  wrapper: {
    marginTop: '30px',
    textAlign: 'center',
    paddingBottom: '100px',
    display: 'flex',
    flexDirection: 'column'
  },
  gameResult: {
    marginBottom: '3rem'
  },
  returnButton: {
    color: '#7194d2',
    transition: 'all 0.4s',
    '&:hover': {
      color: '#4a618a',
      textDecoration: 'none'
    }
  },
  gameResultWrapper: {}
}

class PlayerDetailsPane extends Component {
  render () {
    const playerId = this.props.match.params.playerId
    const playerData = this.props.leaderboardEntries.find(current => current.id === parseInt(playerId))

    // todo: redirect to 404 if player is not found in leaderboardEntries

    const averageScoreSort = (gr1, gr2) => {
      return averageScore(gr1) < averageScore(gr2)
    }

    const averageScore = (current) => (
      (current.stage1Score +
        current.stage2Score +
        current.stage3Score +
        current.stage4Score) / 4
    )

    return (
      <div className={this.props.classes.wrapper}>
        <h3>{playerData.pseudo}</h3>
        <div className={'mx-auto'}>
          {playerData.gameResults.sort(averageScoreSort).map((gameResult, index) => (
            <div key={index} className={index !== 0 ? this.props.classes.gameResultWrapper : ''}>
              {index === 0 ? (
                <h6>Best score : {averageScore(gameResult)} %</h6>
              ) : index === 1 ? (
                <h6>Other scores :</h6>
              ) : null}
              <GameResult
                className={this.props.classes.gameResult}
                key={index}
                date={gameResult.date}
                results={[
                  gameResult.stage1Score,
                  gameResult.stage2Score,
                  gameResult.stage3Score,
                  gameResult.stage4Score
                ]}
              />
            </div>
          ))}
        </div>
        <NavLink to={'/leaderboard'} className={this.props.classes.returnButton}>Back</NavLink>
      </div>
    )
  }
}

PlayerDetailsPane.propTypes = {}

PlayerDetailsPane.defaultProps = {}

export default compose(
  withLeaderboardEntries,
  withStyles(styles)
)(PlayerDetailsPane)
