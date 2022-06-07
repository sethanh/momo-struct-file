import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container } from '@src/core'

const WalletPage = () => {

  return (
    <Container.View headerShow  title='Yêu thích'>
      <View style={styles.container}>
        <Text >walletPage</Text>
      </View>
    </Container.View>
  )
}

export default WalletPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
})
