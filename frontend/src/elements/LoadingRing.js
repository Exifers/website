import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const styles = {}

class LoadingRing extends Component {
  render () {
    return (
      <div className={classNames(
        'lds-ring',
        this.props.size === 'small' ? 'lds-ring-sm' : null,
        this.props.className
      )}>
        <div/>
        <div/>
        <div/>
      </div>
    )
  }
}

LoadingRing.propTypes = {
  size: PropTypes.oneOf(['normal', 'small'])
}

LoadingRing.defaultProps = {
  size: 'normal'
}

export default compose(
  withStyles(styles)
)(LoadingRing)
