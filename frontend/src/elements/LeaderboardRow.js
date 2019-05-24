import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'
import GrowingBar from './GrowingBar'

const styles = {
  bar: {
    marginLeft: '100px'
  },
  pseudo: {
    cursor: 'pointer',
    color: 'grey',
    '&:hover': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'grey'
    }
  },
  cell: {
    borderBottom: '1px solid rgba(100, 100, 100, 0.3)'
  }
}

class LeaderboardRow extends Component {
  render () {
    const entry = this.props.entry

    const globalScore = this.props.globalScore

    return (
      <div className={'row'}>
        <div
          className={classNames('col-sm p-1', this.props.classes.cell)}>
          <NavLink to={`/leaderboard/${entry.id}/`} className={this.props.classes.pseudo}>
            {entry.pseudo}
          </NavLink>
        </div>
        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
          <GrowingBar value={globalScore(entry)} className={this.props.classes.bar}/>
        </div>
        <div className={classNames('col-sm p-1', this.props.classes.cell)} data-test-class={'numberOfGamesCell'}>
          {entry.gameResults.length > 10 ? '10+' : entry.gameResults.length}
        </div>
      </div>
    )
  }
}

LeaderboardRow.propTypes = {}

LeaderboardRow.defaultProps = {
  entry: {},
  globalScore: () => 0
}

export default compose(
  withStyles(styles)
)(LeaderboardRow)
