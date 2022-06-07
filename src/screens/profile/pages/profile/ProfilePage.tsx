import { Container } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ProfilePage = () => {

  return (
    <Container.View headerShow  title='Tài khoản'>
    <View style={styles.container}>
      <Text >Tài khoản</Text>
    </View>
   </Container.View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
})
