import { Colors, Container, Fonts, fontSize, formatMoney, horizontalScale, IC, Button } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddCart,actionRemoveCart } from '@src/screens'


const CartPage = ({ route }: any) => {
  const { params } = route
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => {
    return state.cart.data
  })

  const handleAddCard = (item: any) =>{
    dispatch(actionAddCart(item))
  }

  const handleRemoveCard = (item: any) =>{
    dispatch(actionRemoveCart(item))
  }

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, styles.mgTxt]}>
      <Icon />
      <Text style={[styles.txtAd]}>{value}</Text>
    </View>
  )
  const renderItemService = ({ item }: any) => (
    <View style={[styles.bgSalon, styles.row]}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon, !item.time && { justifyContent: 'center' }]}>
        <View style={[styles.row,]}>
          <Text style={[styles.mgTxt, styles.txtTitle]}>
            {item.name}
          </Text>
        </View>
        {item.promotion &&
          <View style={[styles.row, { marginVertical: horizontalScale(6) }]}>
            <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price * (100 - item.promotion) / 100)}đ</Text>
            <Text style={[styles.txtAd, styles.txtpreprice]}>{formatMoney(item.price)}đ</Text>
          </View>
          || <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price)}đ</Text>
        }
      </View>

      <View style={[styles.bgAddCard, styles.row]}>
        <TouchableOpacity style={[styles.btnAction,{borderRightWidth: 1}]} 
          onPress={()=>handleRemoveCard(item)}>
          <IC.IconMinus />
        </TouchableOpacity>
        <Text style={[styles.txtQuan]}>{item.quantify}</Text>
        <TouchableOpacity style={[styles.btnAction,,{borderLeftWidth: 1}]}
           onPress={()=>handleAddCard(item)}>
          <IC.IconPlus />
        </TouchableOpacity>
      </View>
    </View>
  )
  const renderAccountView = () => (
    <View style={[{ paddingVertical: horizontalScale(8), paddingHorizontal: horizontalScale(16) }]}>
      <Text style={[styles.txtTitle]}>Thông tin khách hàng</Text>
      <Text style={[styles.txtTitle]}>Thái Duy Hoang</Text>
      <Text style={[styles.txtAd]}>(+84)98661705</Text>
    </View>
  )

  return (
    <Container.View headerShow title='Giỏ hàng' showLeft>
      <View style={styles.container}>
        <View style={[styles.line]} />
        {renderAccountView()}
        <View style={[styles.line, { height: horizontalScale(10) }]} />
        <View style={[styles.row, styles.space, { paddingVertical: horizontalScale(8), paddingHorizontal: horizontalScale(16) }]}>
          <View>
            <Text>{params.name}</Text>
            {renderInfoView(IC.IconLocation, params.address)}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <IC.IconNext />
          </TouchableOpacity>
        </View>
        <View style={[styles.line]} />
        <View style={{ flex: 1, paddingLeft: horizontalScale(16) }}>
          <FlatList
            data={cart}
            renderItem={renderItemService}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={[styles.bgPay]}>
          <View style={[styles.row, styles.space]}>
            <View style={[styles.row]}>
              <Text style={[styles.txtTitle, { fontWeight: '400' }]}>Tổng tiền</Text>
              <Text style={[styles.txtTitle, { fontWeight: '400', color: Colors.TXT.UNACTIVE }]}>(5 sản phẩm)</Text>
            </View>
            <Text style={[styles.txtTitle, { color: Colors.BUTTON.BLUE }]}>{formatMoney(5678889)}đ</Text>
          </View>
          <Button.Main label='Thanh toán' />
        </View>
      </View>
    </Container.View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: horizontalScale(1),
    width: '100%',
    backgroundColor: Colors.BUTTON.GRAY,
  },
  txtAd: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontWeight: '400',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.UNACTIVE,
    marginLeft: horizontalScale(4),
  },
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
  mgTxt: {
    marginBottom: horizontalScale(5)
  },
  row: {
    flexDirection: 'row'
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
  bgPromotion: {
    width: '100%',
    height: horizontalScale(164),
    borderRadius: 16,
    padding: horizontalScale(10)
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
  bgpromo: {
    backgroundColor: Colors.TXT.RED,
    borderRadius: 5,
    paddingHorizontal: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: horizontalScale(8)
  },
  bgPay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: horizontalScale(123),
    paddingTop: horizontalScale(12),
    paddingBottom: horizontalScale(34),
    borderTopWidth: 1,
    borderColor: Colors.BUTTON.GRAY,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.hFFFFFF
  },
  bgAddCard: {
    backgroundColor: Colors.hFFFFFF,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(115),
    height: horizontalScale(32),
    position: 'absolute',
    right: horizontalScale(16),
    bottom: horizontalScale(20),
    borderColor: Colors.BORDER.GRAY,
    borderWidth: 1
  },
  btnAction:{
    flex:1,
    height:horizontalScale(32),
    justifyContent:'center',
    alignItems:'center',
    borderColor: Colors.BORDER.GRAY,
  },
  txtQuan:{
    width: horizontalScale(51),
    height:horizontalScale(32),
    borderRightWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
    lineHeight:horizontalScale(32)
  },

})
