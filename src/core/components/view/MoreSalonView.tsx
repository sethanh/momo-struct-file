import { useNavigation } from '@react-navigation/native';
import { Screens } from '@src/core/constants';
import { Colors, Fonts, fontSize, horizontalScale, IC } from '@src/core/utils'
import React from 'react'
import { Text, StyleSheet, ViewStyle, View, TouchableOpacity, Image } from 'react-native'
import { SvgProps } from 'react-native-svg';

interface IProps {
  container?: ViewStyle
  item: any,
  love?: boolean
}

const MoreSalonView = (props: IProps) => {
  const { item,love,container } = props

  const navigation = useNavigation<any>()

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, styles.mgTxt,{alignItems: 'center' }]}>
      <Icon />
      <Text style={[styles.txtAd]}>{value}</Text>
    </View>
  )

  return (
    <TouchableOpacity style={[styles.bgSalon, styles.row,container]} onPress={() => handleNavigator(Screens.SALON_DETAIL, item)}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon]}>
        <Text style={[styles.txtTitle]}>
          {item.name}
        </Text>
        {renderInfoView(IC.IconLocation, item.address)}
        {renderInfoView(IC.IconStar, `${item.star} (${item.quantify} đánh giá)`)}
        <View style={[styles.row,{alignItems: 'center' }]}>
          {renderInfoView(IC.IconClock, item.open)}
          <Text style={{ padding: 5 }}></Text>
          {renderInfoView(IC.IconArrowss, `${item.far} km`)}
        </View>
      </View>
      {love&&<TouchableOpacity style={[styles.bgHeart]}>
        <IC.IconBlueHeart/>
      </TouchableOpacity>}
    </TouchableOpacity>
  )
}

export default MoreSalonView

MoreSalonView.defaultProps = {
  container: {},
  love: false
}

const styles = StyleSheet.create({
  bgSalon: {
    paddingVertical: horizontalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.TXT.GRAY
  },
  row: {
    flexDirection: 'row'
  },
  mgTxt: {
    marginBottom: horizontalScale(5)
  },
  txtAd: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontWeight: '400',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.UNACTIVE,
    marginLeft: horizontalScale(4)
  },
  logo: {
    width: horizontalScale(74),
    height: horizontalScale(74),
    borderRadius: horizontalScale(12)
  },
  infoSalon: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: horizontalScale(14)
  },
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
  bgHeart:{
    position: 'absolute',
    bottom: horizontalScale(16),
    right: horizontalScale(18)
  }
})
