import React, { Component } from 'react';
import ImagesList from '../components/ImagesList';
import { loadImages } from '../actions/images';
import { connect } from 'react-redux';

/**
 * Smart component container.
 */
class List extends Component {
  // componentDidMount(){
  //   actions.loadStarted();
  // }

  render() {
    const { result, isLoading } = this.props;
    return (
      <ImagesList
        isLoading={isLoading}
        images={result}
      />
    )
  }
}

export default connect(
  state => state.images,
  { loadImages }
)(List)