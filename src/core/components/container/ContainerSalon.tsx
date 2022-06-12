import { Colors, fontSize, heightSatusbar, horizontalScale, IconBack, IC, Fonts } from '@src/core/utils'
import React,{useMemo} from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, StatusBar, View, TouchableOpacity, Text, ViewStyle, Image, ImageBackground } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { Form,Screens } from '@src/core'
import { SvgProps } from 'react-native-svg'
import { useDispatch, useSelector } from 'react-redux'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null
  headerShow?: boolean
  title?: string
  showLeft?: boolean
  showRight?: boolean
  onRightClick?: () => void
  styleView?: ViewStyle
  IconRight?: any
  data?: any
}
interface FormValue {
  search: ''
}

const ContainerView = (props: ContainerProps) => {
  const { children, onRightClick, styleView, IconRight, data } = props
  const navigation = useNavigation<any>()

  const form = useForm<FormValue>({
    defaultValues: {},
    mode: 'onChange'
  })
  const cart =useSelector((state: any) => {
    return state.cart.data
  })

  const total = useMemo(()=>{
    const result:any= cart.reduce((result:any,prod:any)=>{
       return result+ prod.quantify
    },0);
    return result;
  },[cart])

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.rowSalon, styles.mgTxt]}>
      <Icon />
      <Text style={[styles.txtAd]}>{value}</Text>
    </View>
  )

  const renderItemSalon = (item: any) => (
    <View style={[styles.bgSalon, styles.rowSalon]}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon]}>
        <Text style={[styles.mgTxt, styles.txtTitle]}>
          {item.name}
        </Text>
        {renderInfoView(IC.IconWLocation, item.address)}
        <View style={[styles.rowSalon, styles.mgTxt, { marginBottom: horizontalScale(10) }]}>
          {renderInfoView(IC.IconStar,`${item.star} ( ${item.quantify} đánh giá)`)}
          <Text style={[styles.txtAd,{marginRight:4}]}>|</Text>
          {renderInfoView(IC.IconWClock, item.open)}
        </View>
      </View>
    </View>
  )
  const onPressGoBack = () => {
    navigation.goBack()
  }
  return (
    <View
      style={[styles.container, styleView]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ImageBackground
        style={[styles.bgOffer]}
        source={data.bgImage}
        imageStyle={styles.imgOffer}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.content}>
          <View style={[styles.row]}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={onPressGoBack}
            >
              <IC.IconWhiteBack />
            </TouchableOpacity>
            <View style={styles.viewSearch}>
              <FormProvider {...form}>
                <Form.TextInput
                  name='search'
                  LeftIcon={IC.IconSearchSL}
                  placeholder="Tìm trong cửa hàng ..."
                  contentStyle={styles.search}
                  opacity={true}
                />
              </FormProvider>
            </View>
            <TouchableOpacity 
            onPress={()=>total?navigation.navigate(Screens.CART_DETAIL,data):null}>
              {total?
              <View style={styles.qtfCart} >
                <Text style={styles.txtCart}>{total}</Text>
              </View>
              :null
              }
              
              <IC.IconCart style={{ marginLeft: horizontalScale(19) }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IC.IconHear style={{ marginLeft: horizontalScale(19) }} />
            </TouchableOpacity>
          </View>
          {renderItemSalon(data)}
        </View>
      </ImageBackground>

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
  styleView: {},
  data: {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.hFFFFFF
  },
  content: {
    paddingHorizontal: horizontalScale(16),
    paddingTop: heightSatusbar + horizontalScale(15),
    paddingBottom: horizontalScale(15),
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between'
  },
  label: {
    color: Colors.TAB.UNACTIVE,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '700',
  },
  btnBack: {
  },
  btnMore: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    right: horizontalScale(22)
  },
  logo: {
    width: horizontalScale(66),
    height: horizontalScale(66),
  },
  bgOffer: {
    width: '100%',
    height: horizontalScale(219),
  },
  imgOffer: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewSearch: {
    flex: 1,
    marginLeft: horizontalScale(20)
  },
  search: {
    height: horizontalScale(32)
  },
  bgSalon: {
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
    color: Colors.hFFFFFF,
    marginLeft: horizontalScale(4)
  },
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.hFFFFFF
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
  rowSalon:{
    flexDirection: 'row'
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