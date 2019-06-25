import React, { Component } from 'react'
import withStyles from 'react-jss'
import Carousel from './Carousel'
import Slider from './Slider'
import computers from '../resources/images/computers.jpg'
import computers2 from '../resources/images/computers2.jpeg'

const styles = {}

class CarouselWithSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: this.props.images,
      current: 0
    }

    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleImageChange (index) {
    this.setState({ current: index })
  }

  render () {
    return (
      <div style={{ width: 700 }} className={this.props.className}>
        <Carousel uuid={this.props.uuid} images={this.state.images}/>
        <Slider uuid={this.props.uuid} images={this.state.images}
          beforeChange={this.handleImageChange}/>
      </div>
    )
  }
}

CarouselWithSlider.defaultProps = {
  images: [computers, computers2], // list of urls
  uuid: 0
}

export default withStyles(styles)(CarouselWithSlider)
