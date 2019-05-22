import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import FooterPanel from '../panels/FooterPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import PasswordChangeDonePanel from '../panels/PasswordChangeDonePanel'

const styles = {}

class PasswordChangeDonePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        footer={<FooterPanel/>}
        navbar={<NavigationBarPanel/>}
        content={<PasswordChangeDonePanel/>}
      />
    )
  }
}

PasswordChangeDonePage.propTypes = {}

PasswordChangeDonePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordChangeDonePage)
