import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import GameResultVisiblePanel from '../panels/GameResultVisiblePanel'

const styles = {}

class GameResultVisiblePage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        content={<GameResultVisiblePanel/>}
        navbar={<NavigationBarPanel/>}
        footer={<FooterPanel/>}
      />
    )
  }
}

GameResultVisiblePage.propTypes = {}

GameResultVisiblePage.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameResultVisiblePage)
