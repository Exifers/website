import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import PasswordResetDonePanel from '../panels/PasswordResetDonePanel'

const styles = {}

class PasswordResetDonePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<PasswordResetDonePanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

PasswordResetDonePage.propTypes = {}

PasswordResetDonePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetDonePage)
