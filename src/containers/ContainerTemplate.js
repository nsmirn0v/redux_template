/* @flow */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actionsTemplate'
import ComponentTemplate from '../components/ComponentTemplate'


class ContainerTemplate extends Component {
  render() {
    return <ComponentTemplate {...this.props} />
  }
}

const mapStateToProps = state => state
const mapDispatchToPrpos = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToPrpos,
)(ContainerTemplate)
