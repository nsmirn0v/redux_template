/* @flow */

import React, { Component } from 'react'

export default class ComponentTemplate extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.actionName()
    }, 1000)
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <p>
          <span style={{ color: '#777' }}>TODO:</span>
          <strong style={{ color: '#333' }}>implement me</strong>
        </p>
        <p>
          <span style={{ color: '#777' }}>Value:</span>
          <strong style={{ color: '#333' }}>{this.props.value}</strong>
        </p>
      </div>
    )
  }
}
