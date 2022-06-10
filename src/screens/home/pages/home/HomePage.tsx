import { useNavigation } from '@react-navigation/native'
import { Container, horizontalScale, IC, Colors, fontSize, Fonts, Screens, formatMoney, formatFlash } from '@src/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { homeConst } from '../../constants'

const HomePage = () => {

  const navigation = useNavigation<any>()
  const { promotions, offers } = homeConst
  const [count,setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
        setCount(prevCount=>prevCount+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    };
  }, [])

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }


  const onHandleSelected = (title: string) => {
    switch (title) {
      case "Salon":
        handleNavigator(Screens.SALON_PAGE)
        break
      default:
        break
    }
  }

  const renderFlashView=(value:number)=>{
    var rt=formatFlash(value-count)
    return(
    <View style={[styles.bgFlash]}>
      <Text style={[styles.txtFlash]}>{rt[0]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[1]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[2]}</Text>
    </View>
  )}

  const renderViewItemSelected = (title: string, Icon: React.FC<SvgProps>, colors: string) => (
    <TouchableOpacity style={[styles.bgItemSelected, { backgroundColor: colors }]} onPress={() => onHandleSelected(title)}>
      <Text style={[styles.txtItemSelected]}>{title}</Text>
      <Icon />
    </TouchableOpacity>)

  const renderViewSelected = () => (
    <View style={[styles.selected, styles.paddingLeft]}>
      {renderViewItemSelected('Salon', IC.IconSalon, Colors.PANEL.BLUE)}
      {renderViewItemSelected('Nail', IC.IconNail, Colors.PANEL.YELLOW)}
      {renderViewItemSelected('Spa', IC.IconSpa, Colors.PANEL.PINK)}
    </View>
  )

  const renderItemPromotion = ({ item }: any) => (
    <TouchableOpacity>
      <ImageBackground
        style={[styles.bgPromotion]}
        source={item.image}
        imageStyle={styles.imPromotion}
      >
        <View style={[styles.bgPro]}>
          <Text style={[styles.txtpromo]}>Giảm {item.promotion} %</Text>
        </View>
      </ImageBackground>
      <Text style={[styles.txtTitle, styles.marginTxt]}>{item.name}</Text>
      <View style={[styles.row, { marginVertical: horizontalScale(6) }]}>
        <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price * (100-item.promotion) / 100)}đ</Text>
        <Text style={[styles.txtAd, styles.txtpreprice]}>{formatMoney(item.price)}đ</Text>
      </View>
      <View style={[styles.row]}>
        <IC.IconLocation />
        <Text style={[styles.txtAd]}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  )

  const renderItemOffer = ({ item }: any) => (
    <TouchableOpacity>
      <ImageBackground
        style={[styles.bgOffer]}
        source={item.image}
        imageStyle={styles.imgOffer}
      >
      </ImageBackground>
      <Text style={[
        styles.txtTitle,
        { color: item.unit === 0 ? Colors.PANEL.BLUE : item.unit === 1 ? Colors.PANEL.YELLOW : Colors.PANEL.PINK }
      ]}>
        {item.unit === 0 ? "Salon" : item.unit === 1 ? 'Spa' : 'Nail'}
      </Text>
      <Text style={[styles.txtTitle, { marginBottom: horizontalScale(6) }]}>{item.name}</Text>
      <View style={styles.row}>
        <IC.IconLocation />
        <Text style={[styles.txtAd]}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  )

  const renderPromotionView = () => (
    <View style={[styles.paddingLeft, styles.paddingBottom]}>
      <FlatList
        data={promotions}
        renderItem={renderItemPromotion}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
  const renderOfferView = () => (
    <View style={[styles.paddingLeft, styles.paddingBottom]}>
      <FlatList
        data={offers}
        renderItem={renderItemOffer}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )

  const renderTitleView = (title: string,flash?:number) => (
    <View style={[styles.bgtxtoffer, styles.row, { marginBottom: horizontalScale(12) }]}>
      <View style={[styles.row]}>
        <Text style={[styles.txtof1]}>{title}</Text>
        {flash&&renderFlashView(flash-count>0?flash-count:0)}
      </View>
      <TouchableOpacity>
        <IC.IconNext/>
      </TouchableOpacity>
    </View>
  )

  return (
    <Container.Home headerShow>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {renderViewSelected()}
          {renderTitleView('Flash Sale',20211)}
          {renderPromotionView()}
          <View style={[styles.line]}/>
          {renderTitleView('Địa điểm nhiều deal hot')}
          {renderOfferView()}
        </View>
      </ScrollView>
    </Container.Home>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: horizontalScale(80)
  },
  paddingLeft: {
    paddingLeft: horizontalScale(16),
  },
  selected: {
    paddingTop: horizontalScale(12),
    paddingBottom: horizontalScale(20),
    paddingRight: horizontalScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgItemSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: horizontalScale(4.5),
    borderRadius: 6,
    justifyContent: 'center',
  },
  txtItemSelected: {
    marginRight: horizontalScale(12),
    fontSize: fontSize(16),
    color: Colors.TXT.BLACK,
    fontFamily: Fonts.Roboto,
    fontWeight: '400'
  },
  row: {
    flexDirection: 'row'
  },
  bgtxtoffer: {
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16)
  },
  txtof1: {
    fontSize: fontSize(20),
    lineHeight: fontSize(28),
    fontWeight: '700',
    fontFamily: Fonts.Roboto,
    color: 'black'
  },
  txtof2: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontWeight: '400',
    fontFamily: Fonts.Roboto,
    color: Colors.TAB.UNACTIVE
  },
  bgPromotion: {
    width: horizontalScale(288),
    height: horizontalScale(164),
    marginRight: horizontalScale(12),
    borderRadius: 16,
    padding: horizontalScale(10)
  },
  imPromotion: {
    borderRadius: 16
  },
  bgPro: {
    backgroundColor: Colors.TXT.RED,
    paddingVertical: horizontalScale(4),
    borderRadius: 6,
    width: horizontalScale(70),
    justifyContent: 'center',
    alignItems: 'center'
  },
  paddingBottom: {
    paddingBottom: horizontalScale(20)
  },
  bgOffer: {
    width: horizontalScale(164),
    height: horizontalScale(164),
    marginRight: horizontalScale(12),
    borderRadius: 10,
  },
  imgOffer: {
    borderRadius: 10
  },
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
  marginTxt: {
    marginTop: horizontalScale(8)
  },
  txtAd: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontWeight: '400',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.UNACTIVE,
    marginLeft: horizontalScale(4)
  },
  txtprice: {
    color: Colors.TXT.RED,
    marginLeft: horizontalScale(0)
  },
  txtpreprice: {
    marginLeft: horizontalScale(10),
    fontSize: fontSize(12),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  txtpromo:{
    fontSize: fontSize(12),
    lineHeight: fontSize(16),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: 'white',
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
    
  },
  bgFlash:{
    flexDirection:'row',
    justifyContent:'center',
    marginLeft: horizontalScale(20)
  },
  line:{
    height: horizontalScale(10),
    width: '100%',
    backgroundColor: Colors.BUTTON.GRAY,
    marginBottom: horizontalScale(16)
  }
})
