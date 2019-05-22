import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import FeatureCard from '../panels/IndexPanel'

const styles = {}

class IndexPresentationCards extends Component {
  render () {
    return (
      <div
        className="container mx-auto mt-5 cards">
        <div
          className="row">
          <FeatureCard
            title={'Virtual Reality'}
            description={'You play the game in an immersing environment'}/>
          <FeatureCard
            title={'Five different stories'}
            description={'Explore cybersecurity issues through multiple situations'}/>
          <div
            className="w-100">
          </div>
          <FeatureCard
            title={'Leaderboard'}
            description={'Compare your scores with your colleagues'}/>
          <FeatureCard
            title={'Made for companies'}
            description={'Specially adapted for companies and training courses'}/>
        </div>
      </div>
    )
  }
}

IndexPresentationCards.propTypes = {}

IndexPresentationCards.defaultProps = {}

export default compose(
  withStyles(styles)
)(IndexPresentationCards)
