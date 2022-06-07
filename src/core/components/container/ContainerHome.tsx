import { Colors, fontSize, heightSatusbar, horizontalScale, IconBack,Fonts } from '@src/core/utils'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, StatusBar, View, TouchableOpacity, Text, ViewStyle } from 'react-native'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null
  headerShow?: boolean
  title?: string
  showLeft?: boolean
  showRight?: boolean
  onRightClick?: () => void
  styleView?: ViewStyle
  IconRight?: any
}

const ContainerView = (props: ContainerProps) => {
  const { children, headerShow, title, showRight, onRightClick, styleView, IconRight,showLeft } = props
  const navigation = useNavigation()


  return (
    <View
      style={[styles.container, styleView]}
    >
      <View>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          {
          }
      </View>
      {children}
    </View>
  )
}

export default ContainerView

ContainerView.defaultProps = {
  headerShow: false,
  title: '',
  showRight: false,
  onRightClick: () => { },
  styleView: {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.hFFFFFF
  },
  content: {
    paddingHorizontal: horizontalScale(22),
    paddingTop: heightSatusbar + horizontalScale(15),
    alignItems: 'center',
    paddingBottom: horizontalScale(15),
  },
  label: {
    color: Colors.h151515,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight:'700',
    fontFamily: Fonts.Roboto
  },
  btnBack: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    left: horizontalScale(22)
  },
  btnMore: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    right: horizontalScale(22)
  }
})