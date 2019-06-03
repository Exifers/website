import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAjaxStoreData, updateAjaxStoreData } from '../actions/actions'
import LoadingRing from '../elements/LoadingRing'

export const withAjaxStoreData = (id, url, config = {}) => (WrappedComponent) => {
  const mapStateToProps = state => ({
    loading: state.ajax[id] && state.ajax[id].loading,
    error: state.ajax[id] && state.ajax[id].error,
    response: state.ajax[id] && state.ajax[id].response
  })

  const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchAjaxStoreData(id, url))
  })

  return (
    connect(mapStateToProps, mapDispatchToProps)(
      class extends Component {
        componentDidMount () {
          if (!this.props.response && !this.props.loading && !this.props.error) {
            this.props.fetch(id, url)
          }
        }

        render () {
          if (this.props.response) {
            return <WrappedComponent {...{ [id]: this.props.response }} {...this.props}/>
          }

          if (this.props.error && !config.renderOnError) {
            return (
              <div>An error has occurred : {String(this.props.error)}</div>
            )
          }

          if (this.props.error && config.renderOnError) {
            return <WrappedComponent {...{ [id]: this.props.response }} error={this.props.error} {...this.props}/>
          }

          if (this.props.loading) {
            return config.skeleton || (
              <React.Fragment>
                <br/>
                <LoadingRing/>
              </React.Fragment>
            )
          }

          return null
        }
      }
    )
  )
}

export const withWebSocketStoreData = (id, url) => (WrappedComponent) => {
  const mapStateToProps = state => ({
    response: state.ajax[id] && state.ajax[id].response
  })

  const mapDispatchToProps = dispatch => ({
    update: (response) => dispatch(updateAjaxStoreData(id, response))
  })

  return (
    connect(mapStateToProps, mapDispatchToProps)(
      class extends Component {
        componentDidMount () {
          let wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
          let webSocket = new WebSocket(
            wsScheme + '://' + window.location.host +
            url)

          webSocket.onmessage = (e) => {
            this.props.update(JSON.parse(JSON.parse(e.data).message))
          }

          webSocket.onClose = () => console.warn('Websocket closed unexpectedly')
        }

        render () {
          return (
            <WrappedComponent {...{ [id]: this.props.response }} {...this.props}>
              {this.props.children}
            </WrappedComponent>
          )
        }
      }
    )
  )
}
