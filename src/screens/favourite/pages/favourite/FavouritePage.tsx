import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container } from '@src/core'

const FavouritePage = () => {

  return (
    <Container.View headerShow  title='Yêu thích'>
      <View style={styles.container}>
        <Text >FavouritePage</Text>
      </View>
    </Container.View>
  )
}

export default FavouritePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
})
