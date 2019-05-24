import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  warning: {
    backgroundColor: '#ee9c41',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    color: 'white',
    padding: '15px'
  }
}

class ArticleWarning extends Component {
  render () {
    return (
      <div className={this.props.classes.warning}>{this.props.children}</div>
    )
  }
}

ArticleWarning.propTypes = {}

ArticleWarning.defaultProps = {}

export default compose(
  withStyles(styles)
)(ArticleWarning)
