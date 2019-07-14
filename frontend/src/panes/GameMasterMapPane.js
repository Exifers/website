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
  constructor (props) {
    super(props)

    this.state = {
      x: 100,
      y: 500
    }
  }

  componentDidMount () {
    let wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
    let webSocket = new WebSocket(
      wsScheme + '://' + window.location.host + '/ws/game-master/position/')

    webSocket.onmessage = (e) => {
      const message = JSON.parse(JSON.parse(e.data).message)
      const x = parseInt(message.x)
      const y = parseInt(message.y)
      this.setState({ x, y })
    }

    webSocket.onClose = () => console.warn('Websocket closed unexpectedly')
  }

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
          <circle cx={this.state.x} cy={this.state.y} r={'20'} fill={'#eeaaaa'}/>
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
