import { Colors, Container, Fonts, fontSize, horizontalScale, IC,IMAGE } from '@src/core'
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

const ProfilePage = () => {
  const renderAccountView=()=>(
    <View style={[styles.bg]}>
      <View style={[styles.row,styles.bgItem,{alignItems: 'center'}]}>
        <Image source={IMAGE.BgAvatar} style={[styles.avatar]} />
        <Text style={[styles.fontlg,styles.tt700,styles.txtbl]}>{`  Thái Hoàng  `}</Text>
        <TouchableOpacity>
          <IC.IconEdit/>
        </TouchableOpacity>
      </View>
      <View style={[styles.line]}></View>
      {renderAccountInfo('Điện thoại','086961705')}
      <View style={[styles.line,{marginLeft: horizontalScale(16)}]}></View>
      {renderAccountInfo('Email','thanhse123@gmail.com',true)}
    </View>
  )
  const renderAccountInfo=(title:string,value:string,mail?:boolean)=>(
      <View style={[styles.row,styles.space,styles.bgInfo]}>
        <Text>{title}</Text>
        <Text>{`****${value.slice(mail?value.length-12:value.length-6,value.length)}`}</Text>
      </View>
  )

  const renderItemView=(Icon: React.FC<SvgProps>, title: string)=>(
    <TouchableOpacity style={[styles.row,styles.bgItem,{alignItems: 'center'}]}>
      <Icon/>
      <Text style={[styles.font,styles.tt400,styles.txtbl]}>
        {`   ${title}`}
      </Text>
    </TouchableOpacity>
  )


  return (
    <Container.View headerShow  title='Tài khoản'>
    <View style={styles.container}>
      {renderAccountView()}
      <View style={[styles.line,{height:horizontalScale(10)}]}></View>
      <View style={[styles.bg]}>
        {renderItemView(IC.IconProductAC,'Lịch sử đơn hàng')}
        <View style={[styles.line]}></View>
        {renderItemView(IC.IconTimeAC,'Lịch hẹn của tôi')}
        <View style={[styles.line]}></View>
        {renderItemView(IC.IconLayerAC,'Gói dịch vụ của tôi')}
      </View>
      <View style={[styles.line,{height:horizontalScale(10)}]}></View>
      <View style={[styles.bg]}>
        {renderItemView(IC.IconLocationAC,'Địa chỉ giao hàng')}
      </View>
      <View style={[styles.line,{height:horizontalScale(10)}]}></View>
      <View style={[styles.bg]}>
        {renderItemView(IC.IconQuestionAC,'Hướng dẫn sử dụng')}
      </View>
    </View>
   </Container.View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BUTTON.GRAY,
    padding: horizontalScale(16)
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
  line: {
    height: horizontalScale(1),
    width: '100%',
    backgroundColor:  Colors.BUTTON.GRAY,
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
  bg:{
    borderRadius: 6,
    backgroundColor: Colors.hFFFFFF
  },
  bgItem:{
    paddingHorizontal: horizontalScale(16),
    paddingVertical: horizontalScale(12)
  },
  bgInfo:{
    paddingHorizontal: horizontalScale(16),
    paddingVertical: horizontalScale(12)
  },
  fontlg: {
    fontSize: fontSize(20),
    lineHeight: fontSize(28),
    fontFamily: Fonts.Roboto
  },
  avatar:{
    width: horizontalScale(60),
    height: horizontalScale(60)
  }
})
