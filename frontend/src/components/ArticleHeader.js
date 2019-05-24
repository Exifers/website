import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  header: {
    fontSize: '29px',
    color: '#555',
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '1rem'
  }
}

class ArticleHeader extends Component {
  render () {
    return (
      <h3 className={this.props.classes.header}>{this.props.children}</h3>
    )
  }
}

ArticleHeader.defaultProps = {}

export default compose(
  withStyles(styles)
)(ArticleHeader)
