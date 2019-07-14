import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import EmailThumbnail from '../components/EmailThumbnail'
import { withGameMasterEmails } from '../actions/gamemaster'

const styles = {}

class GameMasterEmailsList extends Component {
  render () {
    return (
      <div className={'mr-2'}>
        {this.props.emails.map(email => (
          <EmailThumbnail email={email} key={email.id} className={'my-2'}/>
        ))}
      </div>
    )
  }
}

GameMasterEmailsList.propTypes = {}

GameMasterEmailsList.defaultProps = {
  emails: [
    { object: 'Hello', message: 'This is an email', id: 0 },
    { object: 'Important stuff', message: 'This is another message', id: 1 }
  ]
}

export default compose(
  withStyles(styles),
  withGameMasterEmails
)(GameMasterEmailsList)
