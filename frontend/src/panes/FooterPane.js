import React, { Component } from 'react'
import { compose } from 'redux'
import withStyles from 'react-jss'
import classNames from 'classnames'
import '../resources/images/cyber_background.png'
import InnerFooter from '../components/InnerFooter'

const styles = {
  footerPanel: {
    backgroundColor: 'white',
    height: '180px',
    display: 'flex'
  }
}

class FooterPane extends Component {
  render () {
    return (
      <div className={classNames(this.props.classes.footerPanel)}>
        <InnerFooter/>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(FooterPane)
