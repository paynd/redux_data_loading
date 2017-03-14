import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#8E8E8E',
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const footer = (props) => {
  if (props.isLoading) {
    return (<View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>)
  }
  return <Text style={styles.text}>Loaded</Text>
}

export default footer