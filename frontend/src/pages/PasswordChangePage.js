import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import FooterPanel from '../panels/FooterPanel'
import PasswordChangePanel from '../panels/PasswordChangePanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'

const styles = {}

class PasswordChangePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        footer={<FooterPanel/>}
        navbar={<NavigationBarPanel/>}
        content={<PasswordChangePanel/>}
      />
    )
  }
}

PasswordChangePage.propTypes = {}

PasswordChangePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangePage)
