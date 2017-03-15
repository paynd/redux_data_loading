import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ImagesList from '../components/ImagesList'
import { loadContacts } from '../actions/contacts'

/**
 * Smart component container.
 */
class List extends Component {
  static propTypes = {
    loadContacts: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ImagesList {...this.props} />
    )
  }
}


export default connect(
  state => state.contacts,
  { loadContacts }
)(List)
