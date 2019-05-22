import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'
import { compose } from 'redux'

const styles = {
  language: {
    cursor: 'pointer',
    '&:hover': {
      color: '#fff'
    },
    color: '#ccc',
    fontWeight: 'bold'
  },
  popup: {
    width: '70px',
    color: 'white',
    backgroundColor: ' black',
    border: '3px solid white',
    borderRadius: '5px',
    position: 'absolute'
  },
  lang: {
    padding: '3px',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      backgroundColor: '#8394af'
    }
  }
}

class LanguageSelectionDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false,
      selectedLanguage: 'Fr'
    }

    this.handleClick = this.handleClick.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.setFr = this.setFr.bind(this)
    this.setEn = this.setEn.bind(this)

    this.popupId = this.props.popupId || 'LanguageSelectionDropdownPopup'
    this.span = React.createRef()
  }

  handleClick (event) {
    if (this.state.opened) {
      this.close()
    } else {
      this.open()
    }
  }

  open () {
    let spanRect = this.span.current.getBoundingClientRect()
    let popup = document.createElement('div')
    popup.setAttribute('class', this.props.classes.popup)
    popup.setAttribute('id', this.popupId)
    let top = spanRect.y + spanRect.height + 2
    let left = spanRect.x - spanRect.width
    popup.style.top = top + 'px'
    popup.style.left = left + 'px'
    let enLang = document.createElement('div')
    enLang.setAttribute('class', this.props.classes.lang)
    enLang.innerText = 'En'
    enLang.addEventListener('click', this.setEn)
    let frLang = document.createElement('div')
    frLang.setAttribute('class', this.props.classes.lang)
    frLang.innerText = 'Fr'
    frLang.addEventListener('click', this.setFr)
    popup.appendChild(enLang)
    popup.appendChild(frLang)
    document.getElementById('root').appendChild(popup)
    this.setState({ opened: true })
  }

  close () {
    document.getElementById(this.popupId).remove()
    this.setState({ opened: false })
  }

  setFr () {
    this.setState({ selectedLanguage: 'Fr' })
    this.close()
  }

  setEn () {
    this.setState({ selectedLanguage: 'En' })
    this.close()
  }

  render () {
    return (
      <span className={classNames(this.props.classes.language, this.props.className)} onClick={this.handleClick}
        ref={this.span}>
        {this.state.selectedLanguage} <i className="fas fa-caret-down"/>
      </span>
    )
  }
}

LanguageSelectionDropdown.propTypes = {}

LanguageSelectionDropdown.defaultProps = {}

export default compose(
  withStyles(styles)
)(LanguageSelectionDropdown)
