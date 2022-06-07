import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const WalletPage = () => {

  return (
    <View style={styles.container}>
      <Text >walletPage</Text>
    </View>
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
