import React, { Component } from 'react'
import { ListView, StyleSheet, Text, View } from 'react-native'
import RowItem from './RowItem'
import Footer from './Footer'

export default class ImagesList extends Component {
  componentWillMount(){
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  renderRow = (data) => (
    <RowItem data={data} />
  )

  renderSeparator = (sectionId, rowId)  => (
    <View key={rowId} style={styles.separator} />
  )

  renderFooter = ()  => (
    <Footer isLoading={ this.props.isLoading } />
  )

  render () {
    return (
      <View style={{flex: 10, paddingTop: 22}}>
        <ListView
          dataSource={this.ds.cloneWithRows(
            this.props.images
          )}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          renderFooter={this.renderFooter}
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