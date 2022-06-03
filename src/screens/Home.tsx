import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const data = useSelector((state: any) => {
    return state
  })
  console.log('ss', data)
  return (
    <View style={styles.container}>
      <View style={[styles.contentBg, styles.clPink]}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentBg: {
    flex: 8,
  },
  clBlack: {
    backgroundColor: 'black'
  },
  clPink: {
    backgroundColor: 'pink'
  },
  clGray: {
    backgroundColor: 'gray'
  }
});

export default Home;
