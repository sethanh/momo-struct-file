import { Container } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const OrderPage = () => {

  return (
    <Container.View headerShow  title='Lịch sử đơn hàng'>
    <View style={styles.container}>
      <Text >Đơn hàng</Text>
    </View>
   </Container.View>
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
