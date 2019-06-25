import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import classNames from 'classnames'

const styles = {
  map: {
    height: '800px',
    width: '800px'
  }
}

class GameMasterMapPane extends Component {
  render () {
    return (
      <div className={classNames(this.props.className)}>
        <svg className={this.props.classes.map}>
          <rect width={'600'} height={'20'} x={'0'} fill={'#aaa'}/>
          <rect width={'20'} height={'600'} x={'0'} fill={'#aaa'}/>
          <rect width={'20'} height={'300'} x={'200'} y={'0'} fill={'#aaa'}/>
          <rect width={'300'} height={'20'} y={'280'} x={'200'} fill={'#aaa'}/>
          <rect width={'40'} height={'20'} y={'280'} x={'540'} fill={'#aaa'}/>
          <rect width={'20'} height={'600'} x={'580'} fill={'#aaa'}/>
          <rect width={'600'} height={'20'} x={'0'} y={'580'} fill={'#aaa'}/>
          <circle cx={'100'} cy={'500'} r={'20'} fill={'#eeaaaa'}/>
        </svg>
      </div>
    )
  }
}

GameMasterMapPane.propTypes = {}

GameMasterMapPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterMapPane)