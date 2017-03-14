import React, { Component } from 'react'
import { ListView, StyleSheet, Text, View } from 'react-native'

import RowItemRenderer from './rowItem'
import Footer from './footer'

export default class ImagesListComponent extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        this.props.images
      ])
    }
  }

  render () {
    return (
      <View style={{flex: 10, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data => <RowItemRenderer {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderFooter={() => <Footer isLoading={ this.props.isLoading } />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  },
})