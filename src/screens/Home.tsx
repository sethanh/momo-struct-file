import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../components'


const Home = () => {
  const data = useSelector((state: any) => {
    return state
  })
  console.log('ss', data)
  return (
    <Container.Main headerShow title="Home" styleTitle={styles.title}>
      <View style={styles.container}>
        <View style={[styles.contentBg, styles.clPink]}>
          <Text>Home</Text>
        </View>
      </View>
    </Container.Main>
  );
};

const styles = StyleSheet.create({
  appStyle: {
    flex: 1
  },
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
  },
  title:{
    color: 'black'
  }
});

export default Home;
