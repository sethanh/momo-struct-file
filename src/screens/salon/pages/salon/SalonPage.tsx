import { Colors, Container, Fonts, fontSize, horizontalScale, IC, IMAGE } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import {salonConst} from '../../constants'

const SalonPage = () => {

  const {infors} = salonConst

  const renderItemSalon = ({item}:any) => (
    <TouchableOpacity style={[styles.bgSalon, styles.row]}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon]}>
        <Text style={[styles.mgTxt,styles.txtTitle]}>
          {item.name}
        </Text>
        {renderInfoView(IC.IconLocation, item.address)}
        <View style={[styles.row, styles.mgTxt,{marginBottom:horizontalScale(10)}]}>
          {renderInfoView(IC.IconStar, `${item.star}(${item.quantify})`)}
          {renderInfoView(IC.IconArrowss, item.far)}
        </View>
        {renderInfoView(IC.IconClock, item.open)}
       
      </View>
    </TouchableOpacity>
  )
  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row,styles.mgTxt]}>
      <Icon />
      <Text style={[styles.txtAd]}>{value}</Text>
    </View>
  )
  return (
    <Container.View headerShow title='Danh sách salon' showLeft showRight IconRight={IC.IconFill}>
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

export default SalonPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: horizontalScale(16)
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.TXT.GRAY
  },
  mgTop: {
    marginTop: horizontalScale(16)
  },
  logo: {
    width: horizontalScale(74),
    height: horizontalScale(74),
    borderRadius: horizontalScale(12)
  },
  bgSalon: {
    paddingVertical: horizontalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.TXT.GRAY
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoSalon: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: horizontalScale(14)
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
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
})
