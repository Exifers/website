import React, { Component } from 'react'
import BasicLayout from '../layouts/BasicLayout'

export const withBasicLayout = WrappedComponent => class extends Component {
  render () {
    return (
      <BasicLayout
        content={<WrappedComponent {...this.props}>{this.props.children}</WrappedComponent>}
      />
    )
  }
}
