import { Colors, Fonts, fontSize, horizontalScale,formatFlash  } from '@src/core/utils'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ViewStyle, View } from 'react-native'

interface IProps {
  container?: ViewStyle;
  value: number
}

const FlashView = (props: IProps) => {
  const [count,setCount] = useState(0)
  const { container, value } = props
  const rt=formatFlash(value-count>0?value-count:0)

  useEffect(() => {
    const timer = setInterval(() => {
        setCount(prevCount=>prevCount+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    };
  }, [])

  return (
    <View style={[styles.bgFlash,container]}>
      <Text style={[styles.txtFlash]}>{rt[0]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[1]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[2]}</Text>
    </View>
  )
}

export default FlashView

FlashView.defaultProps = {
  container: {}
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: horizontalScale(6),
    backgroundColor: Colors.BUTTON.BLUE,
    height: horizontalScale(44),
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: fontSize(16),
    color: Colors.hFFFFFF,
    fontFamily: Fonts.Roboto,
    fontWeight: '700'
  },
  bgFlash:{
    flexDirection:'row',
    justifyContent:'center',
    marginLeft: horizontalScale(20)
  },
  txtFlash:{
    backgroundColor: Colors.TXT.BLACK,
    color: Colors.hFFFFFF,
    paddingHorizontal: horizontalScale(5),
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    fontWeight: '700',
    fontFamily: Fonts.Roboto,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf:'center'
  },
  hpFlash:{
    color:Colors.TXT.BLACK,
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    fontFamily: Fonts.Roboto,
    marginHorizontal: horizontalScale(4),
    fontWeight: '500',
  }
})
