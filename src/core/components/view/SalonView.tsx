import { Colors, Fonts, fontSize, horizontalScale, IC } from '@src/core/utils'
import React from 'react'
import { Text, StyleSheet, ViewStyle, View, TouchableOpacity, Image } from 'react-native'
import { SvgProps } from 'react-native-svg';

interface IProps {
  container?: ViewStyle
  image?: any
  name?: string
  address: string
}

const SalonView = (props: IProps) => {
  const { container, image,name, address } = props
  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, { alignItems: 'center' }]}>
      <Icon />
      <Text style={[styles.fontct, styles.txtunat, { marginTop: horizontalScale(4) }]}>{` ${value}`}</Text>
    </View>
  )

  return (
    <View style={[styles.row, styles.space, styles.bgrd,container]}>
      <View style={[styles.row]}>
        {image&&<Image source={image} style={[styles.logo]} />}
        <View>
          <Text style={[styles.font, styles.tt500]}>{name}</Text>
          {renderInfoView(IC.IconLocation, address)}
        </View>
      </View>
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <IC.IconNext />
      </TouchableOpacity>
    </View>
  )
}

export default SalonView

SalonView.defaultProps = {
  container: {}
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  space: {
    justifyContent: 'space-between'
  },
  center: {
    alignSelf: 'center'
  },
  chirldCT: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tt400: {
    fontWeight: '400'
  },
  tt500: {
    fontWeight: '500'
  },
  tt700: {
    fontWeight: '700'
  },
  font: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: Fonts.Roboto
  },
  txtbl: {
    color: Colors.TXT.BLACK
  },
  txtat: {
    color: Colors.BUTTON.BLUE
  },
  txtunat: {
    color: Colors.TAB.UNACTIVE
  },
  bgrd: {
    paddingVertical: horizontalScale(8),
    paddingHorizontal: horizontalScale(16)
  },
  fontct: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: Fonts.Roboto
  },
  logo: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(8),
    marginRight: horizontalScale(12)
  }
})
