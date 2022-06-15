import { useNavigation } from '@react-navigation/native'
import { Container, horizontalScale, IC, Colors, fontSize, Fonts, Screens, formatMoney, FLashView, Modal, Form } from '@src/core'
import React, { useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { homeConst } from '../../constants'

interface FormValue {
  search: ''
}

const HomePage = () => {

  const navigation = useNavigation<any>()
  const { promotions, offers, khuvucs } = homeConst

  const form = useForm<FormValue>({
    defaultValues: {},
    mode: 'onChange'
  })

  const [khuvuc, setKhuvuc] = useState(3)
  const [showFill, setShowFill] = useState(false)
  const [txtSearch, setTxtSearch] = useState('')
  const [keyboard,setKeyBoard]= useState(false)

  const khuvucFill = useMemo(() => {
    const result: any = khuvucs.filter(od => od.toLowerCase().search(txtSearch.toLowerCase()) !== -1);
    return result
  }, [khuvucs, txtSearch])

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }

  const onSearchChange = (e: any) => {
    const { nativeEvent } = e
    const { text } = nativeEvent
    setTxtSearch(text)
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

  const onSetKhuvuc = (value: number) => {
    setKhuvuc(value)
    setKeyBoard(false)
    setShowFill(false)
  }
  const onSetShowFill= (value:boolean)=>{
    setKeyBoard(false)
    setShowFill(false)
  }

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
        <Text style={[styles.txtAd, styles.txtprice]}>{formatMoney(item.price * (100 - item.promotion) / 100)}đ</Text>
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

  const renderTitleView = (title: string, flash?: number) => (
    <View style={[styles.bgtxtoffer, styles.row, { marginBottom: horizontalScale(12) }]}>
      <View style={[styles.row]}>
        <Text style={[styles.txtof1]}>{title}</Text>
        {flash && <FLashView value={flash}></FLashView>}
      </View>
      <TouchableOpacity>
        <IC.IconNext />
      </TouchableOpacity>
    </View>
  )

  const renderButtonSetStatus = ({ item }: any) => (
    <TouchableOpacity onPress={() => onSetKhuvuc(khuvucs.indexOf(item))}
      style={[styles.bgSetStatus, styles.row, styles.space]}>
      <Text style={[khuvucs[khuvuc] === item && styles.txtat]}>{item}</Text>
      {khuvucs[khuvuc] === item && <IC.IconTick />}
    </TouchableOpacity>
  )
  const renderFillView = () => (
      <View style={[styles.bgFill, styles.borderTop,keyboard&&styles.openKeyboard]}>
        <TouchableOpacity style={[{ alignSelf: 'center', marginBottom: horizontalScale(11) }]}
          onPress={() => onSetShowFill(false)}>
          <IC.IconHide />
        </TouchableOpacity>
        <View style={[styles.row, styles.space, { alignItems: 'center', paddingHorizontal: horizontalScale(16) }]}>
          <TouchableOpacity onPress={() => onSetShowFill(false)}>
            <IC.IconClose />
          </TouchableOpacity>
          <Text style={[styles.font, styles.tt700, styles.txtbl]}>Chọn khu vực</Text>
          <View></View>
        </View>
        <View style={{ paddingHorizontal: horizontalScale(16), paddingVertical: horizontalScale(8) }}>
          <FormProvider {...form}>
            <Form.TextInput
              name='search'
              LeftIcon={IC.IconSearchNBG}
              placeholder="Tìm kiếm..."
              contentStyle={styles.search}
              onChange={(e) => onSearchChange(e)}
              onFocus={()=>setKeyBoard(true)}
            />
          </FormProvider>
        </View>
        <FlatList
          data={khuvucFill}
          renderItem={renderButtonSetStatus}
        />
      </View>
  )

  return (
    <Container.Home headerShow khuvuc={khuvucs[khuvuc]} onRightClick={() => { setShowFill(true) }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {renderViewSelected()}
          {renderTitleView('Flash Sale', 20211)}
          {renderPromotionView()}
          <View style={[styles.line]} />
          {renderTitleView('Địa điểm nhiều deal hot')}
          {renderOfferView()}
        </View>
      </ScrollView>
      <Modal.Light visible={showFill} onCloseModal={() => setShowFill(false)}>
        {renderFillView()}
      </Modal.Light>
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
  txtpromo: {
    fontSize: fontSize(12),
    lineHeight: fontSize(16),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: 'white',
  },
  txtFlash: {
    backgroundColor: Colors.TXT.BLACK,
    color: Colors.hFFFFFF,
    paddingHorizontal: horizontalScale(5),
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    fontWeight: '700',
    fontFamily: Fonts.Roboto,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  hpFlash: {
    color: Colors.TXT.BLACK,
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    fontFamily: Fonts.Roboto,
    marginHorizontal: horizontalScale(4),
    fontWeight: '500',

  },
  bgFlash: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: horizontalScale(20)
  },
  line: {
    height: horizontalScale(10),
    width: '100%',
    backgroundColor: Colors.BUTTON.GRAY,
    marginBottom: horizontalScale(16)
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
  txtbl: {
    color: Colors.TXT.BLACK
  },
  txtat: {
    color: Colors.BUTTON.BLUE
  },
  txtunat: {
    color: Colors.TAB.UNACTIVE
  },
  boderHead: {
    borderBottomWidth: horizontalScale(3),
    borderBottomColor: Colors.BUTTON.BLUE
  },
  lineCl: {
    height: '100%',
    width: 1,
    backgroundColor: Colors.BUTTON.GRAY,
  },
  fontct: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: Fonts.Roboto
  },
  font: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: Fonts.Roboto
  },
  bgrd: {
    paddingVertical: horizontalScale(8),
  },
  logo: {
    width: horizontalScale(74),
    height: horizontalScale(74),
    borderRadius: horizontalScale(8),
    marginRight: horizontalScale(12)
  },
  bgSalon: {
    paddingHorizontal: horizontalScale(16),
    borderBottomWidth: horizontalScale(10),
    borderBottomColor: Colors.BUTTON.GRAY,
  },
  pdvr: {
    paddingVertical: horizontalScale(12),
  },
  bgFill: {
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: horizontalScale(30),
    paddingTop: horizontalScale(9),
  },
  borderTop: {
    borderTopLeftRadius: horizontalScale(16),
    borderTopRightRadius: horizontalScale(16)
  },
  bgSetStatus: {
    marginLeft: horizontalScale(16),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: Colors.BUTTON.GRAY,
    paddingVertical: horizontalScale(12),
    paddingRight: horizontalScale(16)
  },
  space: {
    justifyContent: 'space-between'
  },
  search: {
    backgroundColor: Colors.BUTTON.GRAY,
  },
  openKeyboard:{
    flex:1,
    marginTop:horizontalScale(50)
  }
})
