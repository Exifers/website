import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import classNames from 'classnames'

const styles = {}

class EmailThumbnail extends Component {
  render () {
    return (
      <div className={classNames('card', this.props.className)}>
        <h6 className={'card-title p-2 m-2'}>{this.props.email.object}</h6>
      </div>
    )
  }
}

EmailThumbnail.propTypes = {}

EmailThumbnail.defaultProps = {
  email: { object: 'Hello', message: 'This is an email', id: 0 }
}

export default compose(
  withStyles(styles)
)(EmailThumbnail)
