import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import classNames from 'classnames'
import map from '../resources/images/map.jpeg'

const styles = {
  map: {
    height: 245,
    width: 755,
    position: 'absolute',
    top: 0,
    zIndex: 1
  },
  svgMap: {
    height: 245,
    width: 755,
    position: 'absolute',
    zIndex: 2,
    top: 0
  },
  mapWrapper: {
    width: 755,
    height: 245,
    position: 'relative'
  },
  beacon: {
    backgroundColor: 'red',
    width: '8px',
    height: '8px',
    borderRadius: '4px',
    boxShadow: '0px 0px 4px 4px rgba(255, 0, 0, 0.8)',
    position: 'absolute'
  }
}

class GameMasterMapPane extends Component {
  constructor (props) {
    super(props)

    this.state = {
      x: 350,
      y: 50
    }

    this.webSocket = null
  }

  componentDidMount () {
    let wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
    this.webSocket = new WebSocket(
      wsScheme + '://' + window.location.host + '/ws/game-master/position/')

    this.webSocket.onmessage = (e) => {
      const message = JSON.parse(JSON.parse(e.data).message)
      const x = parseInt(message.x)
      const y = parseInt(message.y)
      this.setState({ x, y })
    }

    this.webSocket.onClose = () => {
      console.warn('Websocket closed unexpectedly')
      this.websocket = null
    }
  }

  componentWillUnmount () {
    this.webSocket.close()
  }

  render () {
    return (
      <div className={classNames(this.props.classes.mapWrapper, this.props.className)}>
        <div className={this.props.classes.svgMap}>
          <div className={this.props.classes.beacon} style={{ top: this.state.y, left: this.state.x }}/>
        </div>
        <img src={map} className={this.props.classes.map}/>
      </div>
    )
  }
}

GameMasterMapPane.propTypes = {}

GameMasterMapPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterMapPane)
