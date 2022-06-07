import { Screens} from '@src/core'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import AppNavigation from './navigation'
import { Toast } from '../core/components'

const App = () => {
  const [initialRouteName,] = useState(Screens.HOMEPAGE)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <AppNavigation initialRouteName={initialRouteName} />
      <Toast.Notification />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})