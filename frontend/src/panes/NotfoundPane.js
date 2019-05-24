import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'

const styles = {
  wrapper: {
    margin: '100px auto 100px auto',
    textAlign: 'center'
  },
  glyphicon: {
    fontSize: '100px',
    margin: '20px'
  }
}

class NotfoundPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <h1>Error 404 : Page not found !</h1>
        <h5>Looks like this page doesn't exist.</h5>
        <i className={classNames('fas fa-sad-tear', this.props.classes.glyphicon)}/><br/>
        <a href={'/'}>Home</a>
      </div>
    )
  }
}

NotfoundPane.propTypes = {}

NotfoundPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(NotfoundPane)
