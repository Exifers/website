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
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  }
}

class Slider extends Component {
  componentDidMount () {
    $(document).ready(() => { //eslint-disable-line
      $('.slider-' + this.props.uuid) //eslint-disable-line
        .slick({
          centerPadding: '5px 20px',
          centerMode: true,
          dots: true,
          slidesToShow: 5,
          focusOnSelect: true,
          infinite: false,
          asNavFor: '.carousel-' + this.props.uuid
        })
        .on('beforeChange', (event, slick, currentSlide, nextSlide) => this.props.beforeChange(nextSlide))
        .on('afterChange', (event, slick, currentSlide) => this.props.afterChange(currentSlide))
    })
  }

  render () {
    return (
      <div className={'slider-' + this.props.uuid}>
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

Slider.defaultProps = {
  uuid: 0,
  beforeChange: () => {},
  afterChange: () => {}
}

export default withStyles(styles)(Slider)
