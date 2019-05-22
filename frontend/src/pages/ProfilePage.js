import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import ProfilePanel from '../panels/ProfilePanel'
import HeaderPanel from '../panels/HeaderPanel'
import BasicLayout from '../layouts/BasicLayout'

const styles = {}

class ProfilePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<ProfilePanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

ProfilePage.propTypes = {}

ProfilePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(ProfilePage)
