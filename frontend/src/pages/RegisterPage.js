import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import RegisterPanel from '../panels/RegisterPanel'
import BasicLayout from '../layouts/BasicLayout'

const styles = {}

class RegisterPage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<RegisterPanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

RegisterPage.propTypes = {}

RegisterPage.defaultProps = {}

export default compose(
  withStyles(styles)
)(RegisterPage)
