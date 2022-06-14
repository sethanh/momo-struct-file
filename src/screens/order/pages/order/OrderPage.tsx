import { useNavigation } from '@react-navigation/native'
import { Colors, Container, Fonts, fontSize, horizontalScale, IC, Modal, Screens } from '@src/core'
import React,{useMemo,useState} from 'react'
import { StyleSheet, View, Text,TouchableOpacity, Image, FlatList } from 'react-native'
import { SvgProps } from 'react-native-svg'
import {ordersConst} from '../../constants'

const OrderPage = () => {
  const {listorders}= ordersConst
  const [showFill, setShowFill] = useState(false)
  const [status,setStatus]= useState(2)
  
  const navigation = useNavigation<any>()

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }
  
  const data = useMemo(() => {
    if(status===0) return listorders
    const result: any = listorders.filter(od => od.status === status);
    return result
  }, [listorders,status])

  const onSetStatus=(value:number)=>{
    setStatus(value)
    setShowFill(false)
  }
  const renderButtonSetStatus=(title:string,value:number)=>(
      <TouchableOpacity onPress={()=>onSetStatus(value)} 
      style={[styles.bgSetStatus,styles.row,styles.space]}>
        <Text style={[status===value&&styles.txtat]}>{title}</Text>
        {status===value&&<IC.IconTick/>}
      </TouchableOpacity>
  )
  const renderFillView = () => (
    <View style={[styles.bgFill,styles.borderTop]}>
      <View style={[styles.row, styles.space,{alignItems: 'center',paddingHorizontal: horizontalScale(16)}]}>
        <TouchableOpacity onPress={() => setShowFill(false)}>
          <IC.IconClose />
        </TouchableOpacity>
        <Text style={[styles.font,styles.tt700,styles.txtbl]}>Trạng thái đơn hàng</Text>
        <View></View>
      </View>
      {renderButtonSetStatus('Tất cả',0)}
      {renderButtonSetStatus('Chưa thanh toán',1)}
      {renderButtonSetStatus('Đã thanh toán',2)}
    </View>
  )

  const renderHead=(title:string,value?:any)=>(
    <TouchableOpacity style={[{flex:1,paddingHorizontal:horizontalScale(16),paddingVertical: horizontalScale(8)}]} 
    onPress={()=>setShowFill(true)}>
      <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
        {title}
      </Text>
      <View style={[styles.row,styles.space,{alignItems: 'center'}]}>
        <Text style={[styles.font, styles.tt500, styles.txtbl]}>
        {value}
        </Text>
        <IC.IconDown/>
      </View>
    </TouchableOpacity>
  )

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, { alignItems: 'center' }]}>
      <Icon />
      <Text style={[styles.fontct, styles.txtunat, { marginTop: horizontalScale(4) }]}>{` ${value}`}</Text>
    </View>
  )

  const renderSalonView = ({item}:any) => (
    <View style={[styles.bgSalon]}>
      <TouchableOpacity style={[styles.row, styles.space, styles.pdvr]} 
        onPress={()=>handleNavigator(Screens.ORDER_DETAIL,item)}>
        <Text style={[styles.fontct, styles.tt400,styles.txtunat]}>{item.mahd}</Text>
        <Text style={[styles.fontct, styles.tt400,styles.txtunat]}>{item.salons.date}</Text>
      </TouchableOpacity>
      <View style={[styles.line]} />
      <TouchableOpacity style={[styles.row, styles.space, styles.bgrd]} 
        onPress={()=>handleNavigator(Screens.ORDER_DETAIL,item)}>
        <View style={[styles.row,{alignItems:'center'}]}>
          <Image source={item.salons.image} style={[styles.logo]} />
          <View>
            <Text style={[styles.font, styles.tt500]}>{item.salons.name}</Text>
            {renderInfoView(IC.IconLocation, item.salons.address)}
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.line]} />
      <Text style={[styles.pdvr,item.status===2&&{color: Colors.TXT.GREEN}||{color:Colors.TXT.ORANGE}]}>
        {item.status===2&&'Đã thanh toán'||'Chưa thanh toán'}
      </Text>
    </View>
  )

  return (
    <Container.View headerShow  title='Lịch sử đơn hàng'>
    <View style={styles.container}>
    <View style={[styles.line]} />
    <View style={[styles.row]}>
      {renderHead('Trạng thái',status===2?'Đã thanh toán':status===1?'Chưa thanh toán':'Tất cả')}
      <View style={styles.lineCl}></View>
      {renderHead('Thời gian','Tháng 04/2022')}
    </View>
    <View style={[styles.line,{ height: horizontalScale(10) }]} />
      <FlatList
        data={data}
        renderItem={renderSalonView}
        showsVerticalScrollIndicator={false}
      />
      {/* {renderSalonView(listorders[0])} */}
    </View>
    <Modal.Light visible={showFill} onCloseModal={() => setShowFill(false)}>
        {renderFillView()}
    </Modal.Light>
   </Container.View>
  )
}

export default OrderPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: horizontalScale(84)
  },
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
  line: {
    height: horizontalScale(1),
    width: '100%',
    backgroundColor: Colors.BUTTON.GRAY,
  },
  lineCl:{
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
  bgSalon:{
    paddingHorizontal: horizontalScale(16),
    borderBottomWidth: horizontalScale(10),
    borderBottomColor: Colors.BUTTON.GRAY,
  },
  pdvr:{
    paddingVertical: horizontalScale(12),
  },
  bgFill: {
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: horizontalScale(104),
    paddingTop: horizontalScale(24),
  },
  borderTop: {
    borderTopLeftRadius: horizontalScale(16),
    borderTopRightRadius: horizontalScale(16)
  },
  bgSetStatus:{
    marginLeft: horizontalScale(16),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: Colors.BUTTON.GRAY,
    paddingVertical: horizontalScale(12),
    paddingRight: horizontalScale(16)
  }
})
