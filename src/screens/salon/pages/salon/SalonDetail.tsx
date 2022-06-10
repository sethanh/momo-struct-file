import { Colors, Container, Fonts, fontSize, horizontalScale, IC, formatMoney,formatFlash } from '@src/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { salonConst } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import {actionAddCart,actionCart} from '@src/screens'

var findIndex = (products:any, id:string) => {
  var result = 0;
  products.forEach((product:any) => {
      if (product.id === id) {
          result = product.quantify;
      }
  });
  return result;
}

const SalonPage = ({ route }: any) => {
  const { params } = route
  const { options, promotions, services,products } = salonConst
  const dispatch = useDispatch()

  const [option, setOption] = useState('Khuyến mãi')
  const [fillService, setFillService] = useState(0)

  const [count,setCount] = useState(0)

  const cart =useSelector((state: any) => {
    return state.cart.data
  })
  
  const handleAddCard = (item: any) =>{
    dispatch(actionAddCart(item))
  }


  useEffect(() => {
    const timer = setInterval(() => {
        setCount(prevCount=>prevCount+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    };
  }, [])

  const onSwitch = (value: string) => {
    switch (value) {
      case 'Khuyến mãi':
        return renderPromotionView()
        break;
      case 'Dịch vụ':
        return renderServiceView()
        break;
      case 'Sản phẩm':
        return renderProductView()
        break;
      default:
        break;
    }
  }

  const renderOptionsItem = ({ item }: any) => (
    <TouchableOpacity style={[styles.bgOptions, styles.row]} onPress={() => setOption(item)}>
      <Text style={[styles.txtSelected, item === option && { color: Colors.TAB.ACTIVE }]}>{item}</Text>
      <Text style={[styles.txtSelected, styles.mgsltxt, { color: Colors.TXT.GRAY }]}>|</Text>
    </TouchableOpacity>
  )

  const renderFlashView=(value:number)=>{
    var rt=formatFlash(value-count>0?value-count:0)
    return(
    <View style={[styles.bgFlash]}>
      <Text style={[styles.txtFlash]}>{rt[0]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[1]}</Text>
      <Text style={[styles.hpFlash]}>:</Text>
      <Text style={[styles.txtFlash]}>{rt[2]}</Text>
    </View>
  )}

  const renderCardItem = (id:string)=>{
    let quantify= findIndex(cart,id)
    if(quantify){
      return (
        <View style={styles.qtfCart} >
          <Text style={styles.txtCart}>{quantify}</Text>
        </View>
      )
    }
    return null
  }
  const renderItemPromotion = ({ item }: any) => (
    <View style={{ paddingVertical: horizontalScale(16) }}>
      <ImageBackground
        style={[styles.bgPromotion]}
        source={item.image}
        imageStyle={styles.imPromotion}
      >
        <View style={[styles.bgPro]}>
          <Text style={[styles.txtpromo]}>Giảm {item.promotion} %</Text>
        </View>
        {renderFlashView(item.flash)}
      </ImageBackground>
      <View style={[styles.row, styles.space, { alignItems: 'center' }]}>
        <View>
          <Text style={[styles.txtTitle, styles.marginTxt]}>{item.name}</Text>
          <View style={[styles.row, { marginVertical: horizontalScale(6) }]}>
            <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price * (100 - item.promotion) / 100)}đ</Text>
            <Text style={[styles.txtAd, styles.txtpreprice]}>{formatMoney(item.price)}đ</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.bgAddCard]} onPress={()=>handleAddCard(item)}>
          {renderCardItem(item.id)}
          <IC.IconCart />
        </TouchableOpacity>

      </View>
    </View>
  )

  const renderPromotionView = () => (
    <View style={[styles.padding, {flex: 1}]}>
      <FlatList
        data={promotions}
        renderItem={renderItemPromotion}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )

  const renderOptionsService = ({ item }: any) => (
    <TouchableOpacity style={[styles.bgService, styles.row, item.id === fillService && { backgroundColor: Colors.BUTTON.BLUE }]} onPress={() => setFillService(item.id)}>
      <Text style={[item.id === fillService && { color: Colors.hFFFFFF }]}>{item.name}</Text>
    </TouchableOpacity>
  )

  const renderProductView = () => (
    <View style={[{ paddingLeft: horizontalScale(16),flex:1 }]}>
      <View style={{ marginVertical: horizontalScale(16) }}>
        <FlatList
          data={products}
          renderItem={renderOptionsService}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={products[fillService].data}
          renderItem={renderItemService}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )

  const renderServiceView = () => (
    <View style={[{ paddingLeft: horizontalScale(16),flex:1 }]}>
      <View style={{ marginVertical: horizontalScale(16) }}>
        <FlatList
          data={services}
          renderItem={renderOptionsService}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={services[fillService].data}
          renderItem={renderItemService}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )

  const renderItemService = ({ item }: any) => (
    <View style={[styles.bgSalon, styles.row]}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon, !item.time&&{justifyContent:'center'}]}>
        <View style={[styles.row,]}>
          <Text style={[styles.mgTxt, styles.txtTitle]}>
            {item.name}
          </Text>
          {
            item.promotion&&
            <View style={[styles.bgpromo]}>
            <Text style={[styles.txtpromo]}>-{item.promotion}%</Text>
          </View>
          }
        </View>
        {item.promotion &&
          <View style={[styles.row, { marginVertical: horizontalScale(6) }]}>
            <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price * (100 - item.promotion) / 100)}đ</Text>
            <Text style={[styles.txtAd, styles.txtpreprice]}>{formatMoney(item.price)}đ</Text>
          </View>
          || <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price)}đ</Text>
        }
        {
          item.time&&
          <View style={[styles.row]}>
            <IC.IconClock />
            <Text style={[styles.txtAd]}>{item.time} phút</Text>
          </View>
        }
      </View>
      <TouchableOpacity style={[styles.bgAddCard, { alignSelf: 'center' }]} 
        onPress={()=>handleAddCard(item)}>
        {renderCardItem(item.id)}
        <IC.IconCart />
      </TouchableOpacity>
    </View>
  )

  return (
    <Container.Salon headerShow title='salon' showLeft data={params}>
      <View style={styles.container}>
        <View style={[styles.row, styles.mgsl]}>
          <FlatList
            data={options}
            renderItem={renderOptionsItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View style={styles.line}></View>
        {onSwitch(option)}
      </View>
    </Container.Salon>
  )
}

export default SalonPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: horizontalScale(66),
    height: horizontalScale(66),
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
    paddingLeft: horizontalScale(14),
    justifyContent: 'space-between'
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
  bgFill: {
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: horizontalScale(40),
    paddingTop: horizontalScale(24),
    paddingHorizontal: horizontalScale(16)
  },
  space: {
    justifyContent: 'space-between'
  },
  bold: {
    fontWeight: '700',
  },
  boderTop: {
    borderTopLeftRadius: horizontalScale(16),
    borderTopRightRadius: horizontalScale(16)
  },
  mgsl: {
    marginVertical: horizontalScale(8),
    paddingLeft: horizontalScale(16)
  },
  bgOptions: {

  },
  txtSelected: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '400',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
  mgsltxt: {
    marginHorizontal: horizontalScale(12)
  },
  bgPromotion: {
    width: '100%',
    height: horizontalScale(164),
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
    paddingBottom: horizontalScale(40)
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
  marginTxt: {
    marginTop: horizontalScale(8)
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
  txtpromo: {
    fontSize: fontSize(12),
    lineHeight: fontSize(16),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: 'white',
  },
  padding: {
    paddingLeft: horizontalScale(16),
  },
  bgAddCard: {
    backgroundColor: Colors.BUTTON.BLUE,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(32),
    height: horizontalScale(32),
    marginRight: horizontalScale(16)
  },
  bgService: {
    paddingHorizontal: horizontalScale(16),
    height: horizontalScale(32),
    backgroundColor: Colors.BUTTON.GRAY,
    marginRight: horizontalScale(8),
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgpromo:{
    backgroundColor: Colors.TXT.RED,
    borderRadius: 5,
    paddingHorizontal: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:horizontalScale(8)
  },
  bgFlash:{
    position: 'absolute',
    bottom: horizontalScale(16),
    right: horizontalScale(32),
    flexDirection:'row'
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
    overflow: 'hidden'
  },
  hpFlash:{
    color:Colors.TXT.BLACK,
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    fontFamily: Fonts.Roboto,
    marginHorizontal: horizontalScale(4),
    fontWeight: '500',
  },
  qtfCart:{
    position:'absolute',
    width: horizontalScale(16),
    height: horizontalScale(16),
    backgroundColor: Colors.TXT.RED,
    right: -horizontalScale(8),
    top: -horizontalScale(8),
    zIndex:100,
    borderRadius: horizontalScale(8)
  },
  txtCart:{
    color: 'white',
    alignSelf:'center'
  }
})
