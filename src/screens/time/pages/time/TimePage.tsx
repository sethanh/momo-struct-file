import { useNavigation } from '@react-navigation/native'
import { Colors, Container, Fonts, fontSize, horizontalScale, IC, Screens } from '@src/core'
import React,{useState} from 'react'
import { StyleSheet, View, Text,TouchableOpacity, FlatList } from 'react-native'
import {timeConst} from './../../constants'

const TimePage = () => {

  const {times,appointments}= timeConst  
  const [head,setHead]= useState('Sắp tới')

  const navigation = useNavigation<any>()

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }
  
  const renderTimeHead=(item:any,index:number)=>(
    <TouchableOpacity key={index} onPress={()=>setHead(item.title)} 
      style={[head===item.title&&styles.boderHead,styles.btnHead]}>
      <Text style={
        [styles.font,styles.tt500,styles.txtunat,
          head===item.title&& styles.txtat,{textAlign:'center'}]}
        >{item.title}</Text>
    </TouchableOpacity>
  )

  const renderTitleView=(item:any,data:any)=>(
    <TouchableOpacity style={{paddingRight:horizontalScale(16),paddingTop: horizontalScale(16)}}
    onPress={()=>handleNavigator(Screens.APPOITMENT_DETAIL,data)}
    >
      <View style={[styles.row,styles.space]}>
        <Text style={[styles.font,styles.tt500]}>{item.date}</Text>
        <View style={[styles.status,item.status===2?styles.bgCheck:item.status===1?styles.bgConfirm:styles.bgWait]}>
          <Text style={[styles.fontct,styles.tt400,{color:Colors.hFFFFFF}]}>
            {item.status===2?'Check in':item.status===1?'Đã xác nhận':'Chờ xác nhận'}
          </Text>
        </View>
      </View>
      <Text style={[styles.fontct,styles.tt400,styles.txtat]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  )

  const renderServiceView=(item:any, index: number)=>(
    <View style={[styles.bgService]} key={index}>
      <View style={[styles.row,styles.space,]}>
        <Text style={[styles.font,styles.tt500]}>
          {item.name}
        </Text>
        <View style={[styles.row]}>
          <IC.IconTimer/>
          <Text style={[styles.fontct,styles.tt400,styles.txtunat]}>
          {` ${item.time} phút`}
          </Text>
        </View>
      </View>
      <Text style={[styles.fontct,styles.tt400,styles.txtunat,!item.staff&&{color:Colors.TXT.ORANGE}]}>
        {item.staff||'Chưa xếp nhân viên'}
      </Text>
    </View>
  )
  
  const renderAddressView=(item:any)=>(
    <View style={[styles.row,{paddingVertical: horizontalScale(12),paddingRight: horizontalScale(16)}]}>
      <IC.IconLocation/>
      <Text style={[styles.fontct,styles.tt400,styles.txtunat]}>
      {item.address}
      </Text>
    </View>
  )

  const renderContent=({item}:any)=>(
    <View style={styles.bgContent}>
      {renderTitleView(item.salons,item)}
      {/* {renderServiceView(service01)} */}
      {item.service.map((it:any,index:number)=>(renderServiceView(it,index)))}
      {renderAddressView(item.salons)}
    </View>
  )

  return (
    <Container.View headerShow  title='Lịch hẹn của tôi' >
    <View style={styles.container}>
      <View  style={[styles.row,styles.space]}>
        {times.map((item,index)=>(renderTimeHead(item,index)))}
      </View>
      <View style={[styles.line,{height:horizontalScale(10)}]} />
      <FlatList
        data={appointments}
        renderItem={renderContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
   </Container.View>
  )
}

export default TimePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flexDirection:'row'
  },
  space:{
    justifyContent:'space-between'
  },
  center:{
    alignSelf:'center'
  },
  chirldCT:{
    justifyContent: 'center',
    alignItems:'center'
  },
  tt400:{
    fontWeight:'400'
  },
  tt500:{
    fontWeight:'500'
  },
  tt700:{
    fontWeight:'700'
  },
  font:{
    fontSize: fontSize(16),
    lineHeight:fontSize(24),
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  },
  txtat:{
    color: Colors.BUTTON.BLUE
  },
  txtunat:{
    color: Colors.TAB.UNACTIVE
  },
  boderHead:{
    borderBottomWidth: horizontalScale(3),
    borderBottomColor:Colors.BUTTON.BLUE
  },
  line: {
    height: horizontalScale(1),
    width: '100%',
    backgroundColor: Colors.BUTTON.GRAY,
  },
  btnHead:{
    flex: 1,
    paddingVertical: horizontalScale(10)
  },
  fontct:{
    fontSize: fontSize(14),
    lineHeight:fontSize(20),
    fontFamily: Fonts.Roboto
  },
  bgService:{
    paddingRight: horizontalScale(16),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor:Colors.BUTTON.GRAY,
    paddingVertical: horizontalScale(12),

  },
  status:{
    paddingHorizontal: horizontalScale(12),
    paddingVertical: horizontalScale(2),
    borderRadius: 6
  },
  bgCheck:{
    backgroundColor: Colors.BUTTON.CHECK
  },
  bgConfirm:{
    backgroundColor: Colors.BUTTON.BLUE
  },
  bgWait:{
    backgroundColor: Colors.BUTTON.SGRAY
  },
  bgContent:{
    paddingLeft: horizontalScale(16),
    borderBottomWidth: horizontalScale(10),
    borderBottomColor:Colors.BUTTON.GRAY,
  }
})
