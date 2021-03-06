import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { compose } from 'redux'
import HeaderPane from '../panes/HeaderPane'
import NavigationBarPane from '../panes/NavigationBarPane'
import FooterPane from '../panes/FooterPane'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    position: 'absolute',
    width: '100%'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1'
  },
  header: {
    width: '100%',
    flexGrow: '0'
  },
  content: {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'raw'
  },
  footer: {
    width: '100%',
    flexGrow: '0'
  },
  innerContent: {
    flexGrow: '3'
  },
  rightFiller: {
    width: '200px',
    backgroundColor: '#b4c7e7'
  }
}

class BasicLayout extends Component {
  render () {
    const {
      header,
      content,
      footer
    } = this.props

    return (
      <div className={this.props.classes.wrapper}>
        <div className={this.props.classes.header}>
          {header}
        </div>
        <div className={this.props.classes.body}>
          <div className={this.props.classes.content}>
            <div className={this.props.classes.innerContent}>{content}</div>
          </div>
        </div>
        <div className={this.props.classes.footer}>
          {footer}
        </div>
      </div>
    )
  }
}

BasicLayout.PropsTypes = {
  header: PropTypes.element.required,
  content: PropTypes.element.required,
  footer: PropTypes.element.required,
  navbar: PropTypes.element.required
}

BasicLayout.defaultProps = {
  header: <HeaderPane/>,
  navbar: <NavigationBarPane/>,
  footer: <FooterPane/>
}

export default compose(
  withStyles(styles)
)(BasicLayout)
