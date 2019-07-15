import React, { Component } from 'react'
import LargeLink from '../elements/buttons'
import withStyles from 'react-jss'
import classNames from 'classnames'
import office from '../resources/images/office.jpeg'
import scene from '../resources/images/scene.png'
import commonMistake from '../resources/images/common_mistake.jpeg'
import company2 from '../resources/images/company2.jpg'
import subtleThreat from '../resources/images/subtle_threat.jpeg'
import CarouselWithSlider from '../components/CarouselWithSlider'
import { ParallaxBanner } from 'react-scroll-parallax'

const styles = {
  video: {
    margin: '3rem auto 3rem auto !important',
    boxShadow: '10px 5px 10px #aaa'
  },
  tryButton: {
    margin: '2rem auto 2rem auto',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#f2f2f2',
    marginBottom: '150px',
    marginTop: '200px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  presentationPane: {
    marginBottom: '150px'
  },
  cybersecurityImage: {
    width: '500px',
    height: 'auto',
    marginTop: '20px'
  },
  vr: {
    maxHeight: '200px'
  },
  title: {
    zIndex: '1',
    color: 'white',
    margin: '50px 0px 0px 0px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold'
  },
  subTitle: {
    zIndex: '1',
    color: 'white',
    margin: '10px 0px 0px 0px',
    fontFamily: 'Roboto, sans-serif'
  },
  vrImage: {
    zIndex: '0',
    width: '100%'
  },
  vrText: {
    marginLeft: '100px',
    top: '0px',
    position: 'absolute'
  },
  computers: {
    width: '50%',
    margin: 'auto'
  },
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px'
  },
  cards: {
    minWidth: '1100px'
  },
  card: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    '& h3': {
      fontWeight: 'bold'
    }
  },
  cardImage: {
    height: '200px',
    width: '310px'
  },
  cardContent: {
    maxWidth: '500px'
  },
  vrWrapper: {
    position: 'relative',
    marginTop: '100px'
  },
  mainText: {
    zIndex: '1',
    position: 'absolute',
    top: '100px'
  },
  companyImage: {
    zIndex: '0',
    position: 'absolute',
    top: '0px',
    width: '100%'
  },
  logoIcon: {
    maxWidth: '200px',
    marginTop: '100px'
  },
  mainTitle: {
    zIndex: '1',
    color: '#240d3a',
    marginTop: '20px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold'
  },
  carousel: {
    marginTop: '100px',
    margin: 'auto auto'
  }
}

class IndexPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>

        <div className={'position-relative'}>
          <div className={classNames(this.props.classes.mainText, 'text-center w-100')}>
            <h1 className={this.props.classes.mainTitle}>Cybersecurity<br/>training for employees.</h1>
          </div>
          <ParallaxBanner style={{ height: 700 }} tagOuter={'figure'} layers={[{ image: company2, amount: 0.4 }]}/>
        </div>

        <div className={classNames('mx-auto mt-5', this.props.classes.cards)}>
          <div className={classNames('my-4 text-left d-flex flex-row', this.props.classes.card)}>
            <div><img src={scene} className={classNames(this.props.classes.cardImage, 'mr-3')}/></div>
            <div className={this.props.classes.cardContent}>
              <h3>Train in real-life situations</h3>
              <p>Virtual reality offers you a unique way to experience learning in cybersecurity. You'll find yourself
                in
                an office with various characters, and you'll have to take decisions to complete quests without security
                failures.</p>
            </div>
          </div>
          <div className={classNames('my-4 text-right d-flex flex-row justify-content-end', this.props.classes.card)}>
            <div className={this.props.classes.cardContent}>
              <h3>Avoid common mistakes</h3>
              <p>Cyberstories comes shipped with basic scenarios including practice on common security mistakes. Is is
                available for all levels and thus doesn't require advanced knowledge in cybersecurity.</p>
            </div>
            <div><img src={commonMistake} className={classNames(this.props.classes.cardImage, 'ml-3')}/></div>
          </div>
          <div className={classNames('my-4 text-left d-flex flex-row', this.props.classes.card)}>
            <div><img src={subtleThreat} className={classNames(this.props.classes.cardImage, 'mr-3')}/></div>
            <div className={this.props.classes.cardContent}>
              <h3>Detect more subtle threats</h3>
              <p>Once you've gained experience with basic scenarios, you can go into more complex scenarios and become a
                real expert in cybersecurity.</p>
            </div>
          </div>
        </div>

        <div className={this.props.classes.vrWrapper}>
          <ParallaxBanner style={{ height: 500 }} tagOuter={'figure'} layers={[{ image: office, amount: 0.4 }]}/>
          <div className={this.props.classes.vrText}>
            <h1 className={classNames(this.props.classes.title)}>Have a rich experience<br/>in learning cybersecurity
            </h1>
            <h4 className={classNames(this.props.classes.subTitle)}>Learn, practice, share</h4>
          </div>
        </div>

        <CarouselWithSlider className={this.props.classes.carousel}/>

        <LargeLink className={this.props.classes.tryButton} to={'/download'}>
          TRY OUT NOW !
        </LargeLink>
      </div>
    )
  }
}

export default withStyles(styles)(IndexPane)
