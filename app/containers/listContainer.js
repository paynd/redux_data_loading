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
  constructor(props) {
    super(props)
  }

  // componentDidMount(){
  //   actions.loadStarted();
  // }

  render() {
    // const { state, actions } = this.props;
    const state = this.props.state;
    console.log("state: " + state.images)
    return (
      <ImagesListComponent
        isLoading={state.isLoading}
        images={state.images}
        />
    )
  }
}

export default connect(state => ({
    state: state.loader,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ListContainer)