import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import BasicLayout from '../layouts/BasicLayout'
import HeaderPanel from '../panels/HeaderPanel'
import NavigationBarPanel from '../panels/NavigationBarPanel'
import FooterPanel from '../panels/FooterPanel'
import GameMasterPanel from '../panels/GameMasterPanel'

const styles = {}

class GameMasterPage extends Component {
  render () {
    return (
      <BasicLayout
        header={<HeaderPanel/>}
        footer={<FooterPanel/>}
        content={<GameMasterPanel {...this.props}/>}
        navbar={<NavigationBarPanel/>}
      />
    )
  }
}

GameMasterPage.propTypes = {}

GameMasterPage.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterPage)
