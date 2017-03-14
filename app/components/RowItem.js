/**
 * Created by paynd on 24.02.17.
 */
import React from 'react'
import { View, Text, StyleSheet, Image, PropTypes } from 'react-native'

/**
 * @param data expects to contain url, thumbnailUrl, text
 * @constructor
 */
const RowItem = (data) => (
  <View style={styles.container}>
    <Image source={{ uri: data.data }} style={styles.photo} />
    <Text style={styles.text}>
      Lorem Ipsum
    </Text>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    height: 60,
    marginLeft: 12,
    padding: 10,
    fontSize: 16,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
})

export default RowItem
