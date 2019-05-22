import React, { Component } from 'react'
import classNames from 'classnames'
import withStyles from 'react-jss'
import GrowingBar from '../elements/GrowingBar'

const styles = {
  gameResult: {
    display: 'flex',
    flexDirection: 'column',
    width: '160px',
    margin: 'auto auto'
  },
  date: {
    marginTop: '15px',
    color: '#7194d2',
    fontSize: '12px',
    margin: '2Rem'
  }
}

class GameResult extends Component {
  render () {
    return (
      <React.Fragment>
        <span className={this.props.classes.date}>{this.props.date}</span>
        <div className={classNames(this.props.classes.gameResult, this.props.className)}>
          {
            this.props.results.map((result, index) =>
              <GrowingBar value={result} key={index}/>
            )
          }
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(GameResult)
