import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import PasswordResetCompletePanel from '../panels/PasswordResetCompletePanel'

const styles = {}

class PasswordResetCompletePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<PasswordResetCompletePanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

PasswordResetCompletePage.propTypes = {}

PasswordResetCompletePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordResetCompletePage)
