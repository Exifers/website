import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import CreateEnterpriseForm from '../forms/CreateEnterpriseForm'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '600px'
  }
}

class EntrepriseCreateAccountPane extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <CreateEnterpriseForm/>
      </div>
    )
  }
}

EntrepriseCreateAccountPane.propTypes = {}

EntrepriseCreateAccountPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(EntrepriseCreateAccountPane)
