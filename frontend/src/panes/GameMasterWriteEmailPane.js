import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import AutoForm from '../utils/AutoForm'
import { withRouter } from 'react-router-dom'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class GameMasterWriteEmailPane
  extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <AutoForm
          fields={[
            {
              name: 'object',
              displayName: 'Object',
              placeholder: 'Object',
              initialValue: '',
              type: 'text'
            },
            {
              name: 'message',
              displayName: 'Message',
              placeholder: 'Message',
              initialValue: '',
              type: 'textarea'
            }
          ]}
          url={'/gamemaster/emails/'}
          method={'POST'}
          onSubmitted={() => {this.props.history.push('/game_master/AVFFRE/')}}
          buttonDisplayText={'Create Email'}
          clientSideValidation={() => []}
          serverSideValidation={() => new Promise(resolve => setTimeout(() => resolve([])))}
          feedbackOnValidFields={false}
        />
      </div>
    )
  }
}

GameMasterWriteEmailPane
  .propTypes = {}

GameMasterWriteEmailPane
  .defaultProps = {}

export default compose(
  withStyles(styles),
  withRouter
)(GameMasterWriteEmailPane)
