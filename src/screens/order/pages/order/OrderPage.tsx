import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const OrderPage = () => {

  return (
    <View style={styles.container}>
      <Text >OrderPage</Text>
    </View>
  )
}

export default OrderPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
})
