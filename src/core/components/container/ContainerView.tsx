import { Colors, Fonts, fontSize, heightSatusbar, horizontalScale, IconBack } from '@src/core/utils'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, StatusBar, View, TouchableOpacity, Text, ViewStyle } from 'react-native'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null
  headerShow?: boolean
  title?: string
  showRight?: boolean
  onRightClick?: () => void
  styleView?: ViewStyle
}

const ContainerView = (props: ContainerProps) => {
  const { children, headerShow, title, showRight, onRightClick, styleView } = props
  const navigation = useNavigation()

  const onPressGoBack = () => {
    navigation.goBack()
  }

  return (
    <View
      style={[styles.container, styleView]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {
        headerShow && <View style={styles.content}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={onPressGoBack}
          >
            <IconBack />
          </TouchableOpacity>

          <Text style={styles.label}>{title}</Text>

          {
            showRight && (
              <TouchableOpacity
                style={styles.btnMore}
                onPress={onRightClick}
              >
              </TouchableOpacity>
            )
          }
        </View>
      }
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
    paddingHorizontal: horizontalScale(24),
    paddingTop: heightSatusbar + horizontalScale(15),
    alignItems: 'center'
  },
  label: {
    color: Colors.h151515,
    fontSize: fontSize(16),
    fontFamily: Fonts.Helvetica_Bold,
  },
  btnBack: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    left: horizontalScale(24)
  },
  btnMore: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    right: horizontalScale(24)
  }
})