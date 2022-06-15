import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Colors, Container, horizontalScale, MoreSalonView } from '@src/core'
import {favoriteConst} from '../../constants'

const FavouritePage = () => {
  const {infors} = favoriteConst
  const renderItemSalon = ({ item }: any) => (<MoreSalonView item={item} love container={styles.mgL}/>)
  return (
    <Container.View headerShow  title='Yêu thích'>
      <View style={styles.container}>
      <View style={styles.line}></View>
        <FlatList
          data={infors}
          renderItem={renderItemSalon}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container.View>
  )
}

export default FavouritePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.TXT.GRAY
  },
  mgL:{
    marginLeft: horizontalScale(16)
  }
})
