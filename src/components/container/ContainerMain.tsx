import { Colors, Fonts, fontSize, heightSatusbar, horizontalScale, IconBlackBack } from '../../assets'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleProp,StyleSheet, StatusBar, View, TouchableOpacity, Text, TextStyle } from 'react-native'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null
  headerShow?: boolean
  title?: string
  styleTitle?: StyleProp<TextStyle>
}

const ContainerMain = (props: ContainerProps) => {
  const { children, headerShow, title ,styleTitle} = props
  const navigation = useNavigation()

  const onPressGoBack = () => {
    navigation.goBack()
  }

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {
        headerShow && <View style={styles.content}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={onPressGoBack}
          >
            <IconBlackBack />
          </TouchableOpacity>

          <Text style={[styles.label,styleTitle]}>{title}</Text>
        </View>
      }
      {children}
    </View>
  )
}

export default ContainerMain

ContainerMain.defaultProps = {
  headerShow: false,
  title: '',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BASE_COLOR.GRAY
  },
  content: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: heightSatusbar + horizontalScale(15),
    alignItems: 'center',
    paddingBottom: horizontalScale(15)
  },
  label: {
    color: Colors.hFFFFFF,
    fontSize: fontSize(16),
    fontFamily: Fonts.Helvetica_Bold,
  },
  btnBack: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    left: horizontalScale(24)
  }
})