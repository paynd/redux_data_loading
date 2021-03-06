import React, { Component, PropTypes } from 'react'
import { ListView, StyleSheet, View } from 'react-native'
import RowItem from './RowItem'
import Footer from './Footer'

export default class ImagesList extends Component {
  static propTypes = {
    loadContacts: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    this.props.loadContacts()
  }

  handleEndReached = () => {
    if (!this.props.isLoading) {
      this.props.loadContacts()
    }
  }

  renderSeparator = (sectionId, rowId) => (
    <View key={rowId} style={styles.separator} />
  )

  renderFooter = () => (
    <Footer isLoading={this.props.isLoading} />
  )

  renderRow = data => (
    <RowItem data={data} />
  )

  render() {
    return (
      <View style={{ flex: 10, paddingTop: 22 }}>
        <ListView
          dataSource={this.ds.cloneWithRows(
            this.props.result
          )}
          enableEmptySections
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
          renderFooter={this.renderFooter}
          onEndReached={this.handleEndReached}
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
