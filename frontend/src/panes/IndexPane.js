import React, { Component } from 'react'
import LargeLink from '../elements/buttons'
import withStyles from 'react-jss'
import classNames from 'classnames'
import PitchTitle from '../elements/PitchTitle'

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
    marginBottom: '150px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '48px'
  },
  title: {
    textShadow: '2px 2px 3px #ccc',
    textAlign: 'center'
  },
  presentationPane: {
    marginBottom: '150px'
  },
  cybersecurityImage: {
    width: '500px',
    height: 'auto',
    marginTop: '20px'
  }
}

class IndexPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <PitchTitle className={classNames('mx-auto', this.props.classes.title)}>A serious game in virtual
          reality about cybersecurity !</PitchTitle>

        <LargeLink className={this.props.classes.tryButton} to={'/download'}>
          TRY OUT NOW !
        </LargeLink>
      </div>
    )
  }
}

export default withStyles(styles)(IndexPane)
