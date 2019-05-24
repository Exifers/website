import React, { Component } from 'react'
import { compose } from 'redux'
import withStyles from 'react-jss'
import classNames from 'classnames'
import '../resources/images/cyber_background.png'
import InnerFooter from '../components/InnerFooter'

const styles = {
  footerPanel: {
    backgroundColor: 'black',
    height: '180px',
    borderTop: '5px solid #ffc000',
    display: 'flex'
  }
}

class FooterPane extends Component {
  render () {
    return (
      <div className={classNames(this.props.classes.footerPanel, 'cyberBackground')}>
        <InnerFooter/>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(FooterPane)
