import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TimePage = () => {

  return (
    <View style={styles.container}>
      <Text >TimePage</Text>
    </View>
  )
}

export default TimePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
})
