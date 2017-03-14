'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import ImagesListComponent from '../components/imagesListComponent';
import * as actions from '../actions/actionCreators';
import { connect } from 'react-redux';

/**
 * Smart component container.
 */
class ListContainer extends Component {
  render() {
    const { state, actions } = this.props;
    return (
      <ImagesListComponent
        isLoading={state.isLoading}
        images={state.images}
        />
    );
  }
}

export default connect(state => ({
    state: state,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ListContainer);