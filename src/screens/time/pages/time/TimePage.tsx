import { Container } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TimePage = () => {

  return (
    <Container.View headerShow  title='Lịch hẹn của tôi' >
    <View style={styles.container}>
      <Text >lịch hẹn</Text>
    </View>
   </Container.View>
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
