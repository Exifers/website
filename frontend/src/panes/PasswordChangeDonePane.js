import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  wrapper: {
    textAlign: 'center',
    paddingTop: '50px'
  }
}

class PasswordChangeDonePane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>Password change done !</div>
    )
  }
}

PasswordChangeDonePane.propTypes = {}

PasswordChangeDonePane.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangeDonePane)
