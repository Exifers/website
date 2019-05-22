import React, { Component } from 'react'
import classNames from 'classnames'
import withStyles from 'react-jss'
import PitchTitle from '../elements/PitchTitle'

const styles = {
  button: {
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    lineHeight: '32px',
    '& i': {
      fontSize: '30px'
    },
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  buttonContainer: {
    maxWidth: '200px'
  },
  wrapper: {
    marginTop: '3rem',
    textAlign: 'center'
  }
}

class DownloadPanel extends Component {
  render () {
    return (
      <div className={this.props.classes.wrapper}>
        <PitchTitle>Download Cyberstories</PitchTitle>
        <div
          className={
            classNames(
              'd-flex flex-column download-container mx-auto mb-5',
              this.props.classes.buttonContainer
            )
          }>
          <a
            href={WINDOWS_BUILD_FILE_URL} // eslint-disable-line no-undef
            download="cyberstories_windows.zip"
            className={classNames('card bg-success mx-auto my-3', this.props.classes.button)}>
            <div
              className="card-body">
              WINDOWS <br/>
              <i className="fas fa-download"/>
            </div>
          </a>
          <a href={MAC_BUILD_FILE_URL} download="cyberstories_mac.zip" // eslint-disable-line no-undef
            className={classNames('card bg-success mx-auto my-3', this.props.classes.button)}>
            <div className="card-body">
              MAC<br/>
              <i className="fas fa-download"/>
            </div>
          </a>
          <a
            href={LINUX_BUILD_FILE_URL} // eslint-disable-line no-undef
            download="cyberstories_linux.zip"
            className={classNames('card bg-success mx-auto my-3', this.props.classes.button)}>
            <div className="card-body">LINUX<br/><i className="fas fa-download"/>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DownloadPanel)
