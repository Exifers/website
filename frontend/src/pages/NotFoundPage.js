import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import NotfoundPanel from '../panels/NotfoundPanel'

const styles = {}

class NotFoundPage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<NotfoundPanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

NotFoundPage.propTypes = {}

NotFoundPage.defaultProps = {}

export default compose(
  withStyles(styles)
)(NotFoundPage)
