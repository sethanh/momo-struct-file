import React, { useState} from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigation from './navigation'
import {Screens} from './navigation/constants'

const App = () => {
  const [initialRouteName,] = useState(Screens.BOOKING)
  return (
    <View style={styles.container}>
      <AppNavigation initialRouteName={initialRouteName} />
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})