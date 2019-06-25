import React, { Component } from 'react'
import withStyles from 'react-jss'
import classNames from 'classnames'

const styles = {
  image: {
    width: '100%'
  },
  thumbnail: {
    transition: 'all 0.3s',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  }
}

class Carousel extends Component {
  componentDidMount () {
    $(document).ready(function () { //eslint-disable-line
      $('.carousel-' + this.props.uuid) //eslint-disable-line
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true
        })
    }.bind(this))
  }

  render () {
    return (
      <div className={'carousel-' + this.props.uuid}>
        {this.props.images.map((image, index) => (
          <div
            key={index}
            className={classNames(this.props.classes.thumbnail, 'm-3')}
          >
            <img
              src={image}
              className={this.props.classes.image}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Carousel)
