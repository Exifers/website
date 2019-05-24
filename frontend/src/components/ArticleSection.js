import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'

const styles = {
  section: {
    fontSize: '21px',
    color: '#555',
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '1rem'
  }
}

class ArticleSection extends Component {
  render () {
    return (
      <h4 className={this.props.classes.section}>{this.props.children}</h4>
    )
  }
}

ArticleSection.propTypes = {}

ArticleSection.defaultProps = {}

export default compose(
  withStyles(styles)
)(ArticleSection)
