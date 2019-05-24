import React, { Component } from 'react'
import '../resources/css/loader.css'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'
import { withLeaderboardEntries, withWebsocketLeaderboardEntries } from '../actions/leaderboard'
import LeaderboardRow from '../elements/LeaderboardRow'

const styles = {
  cell: {
    borderBottom: '1px solid rgba(100, 100, 100, 0.3)'
  },
  leaderboard: {
    textAlign: 'center'
  },
  header: {
    fontSize: '17px',
    fontWeight: 'bold'
  },
  input: {
    marginTop: '40px',
    width: '180px',
    marginBottom: '15px'
  }
}

export class Leaderboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const value = event.target.value
    this.setState({ search: value })
  }

  render () {
    const leaderboardEntries = this.props.leaderboardEntries

    const searchFilter = (entry) => {
      if (this.state.search === '') {
        return true
      }
      try {
        return entry.pseudo.toUpperCase().includes(this.state.search.toUpperCase())
      } catch (e) {
        return true
      }
    }

    const nonEmptyFilter = (entry) => entry.gameResults.length > 0

    const globalScoreSort = (entry1, entry2) => {
      const globalScore1 = globalScore(entry1)
      const globalScore2 = globalScore(entry2)
      return globalScore1 < globalScore2 ? 1
        : globalScore1 === globalScore2 ? 0
          : -1
    }

    const globalScore = (entry) => (
      Math.max(...entry.gameResults.map(
        current => (
          current.stage1Score +
          current.stage2Score +
          current.stage3Score +
          current.stage4Score
        )
      )) / 4
    )

    return (
      <React.Fragment>
        <div className={classNames('container', this.props.classes.leaderboard)}>
          <div className={classNames('row', this.props.classes.header)}>
            <div className={classNames('col-sm p-1', this.props.classes.cell)}>
              Pseudo
            </div>
            <div className={classNames('col-sm p-1', this.props.classes.cell)}>
              Best average score
            </div>
            <div className={classNames('col-sm p-1', this.props.classes.cell)}>
              Number of games
            </div>
          </div>
          {leaderboardEntries
            .filter(nonEmptyFilter)
            .filter(searchFilter)
            .sort(globalScoreSort)
            .map((entry) => (
              <LeaderboardRow
                key={entry.pseudo}
                entry={entry}
                globalScore={globalScore}
              />
            ))
          }
        </div>
        <input
          type={'text'} className={this.props.classes.input} value={this.state.search}
          onChange={this.handleChange} placeholder={'Search pseudo'}/>
        <small>Click on a pseudo to see score details.</small>
      </React.Fragment>
    )
  }
}

Leaderboard.defaultProps = {
  classes: {},
  leaderboardEntries: []
}

export default compose(
  withWebsocketLeaderboardEntries,
  withLeaderboardEntries,
  withStyles(styles)
)(Leaderboard)
