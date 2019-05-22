import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import { NavLink, Redirect } from 'react-router-dom'

const styles = {
  wrapper: {
    margin: 'auto auto',
    padding: '15px',
    maxWidth: '400px'
  }
}

class GameMasterTokenPanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clicked: false,
      token: ''
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleKeyDown (event) {
    if (event.key === 'Enter') {
      this.setState({ clicked: true })
    }
  }

  handleChange (event) {
    this.setState({
      token: event.target.value
    })
  }

  render () {
    if (this.state.clicked) {
      return (
        <Redirect to={'/game_master/' + this.state.token + '/'} push/>
      )
    }

    return (
      <div className={this.props.classes.wrapper}>
        <div className={this.props.classes.form}>
          <div className="form-group">
            <label htmlFor="tokenInput">Game token</label>
            <input type="text" className="form-control" id="tokenInput"
              placeholder="Game token" value={this.state.token} autoFocus name={'game_token'}
              onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
          </div>
          <NavLink to={'/game_master/' + this.state.token + '/'} type="button"
            className="btn btn-dark">Validate</NavLink>
        </div>
      </div>
    )
  }
}

GameMasterTokenPanel.propTypes = {}

GameMasterTokenPanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(GameMasterTokenPanel)
