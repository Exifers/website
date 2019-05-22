import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  info: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
    backgroundColor: '#73d779',
    color: 'white',
    padding: '15px'
  }
}

class ArticleInfo extends Component {
  render () {
    return (
      <div className={this.props.classes.info}>{this.props.children}</div>
    )
  }
}

ArticleInfo.propTypes = {}

ArticleInfo.defaultProps = {}

export default compose(
  withStyles(styles)
)(ArticleInfo)
