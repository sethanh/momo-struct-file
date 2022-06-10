import { useNavigation } from '@react-navigation/native'
import { Colors, Container, Fonts, fontSize, horizontalScale, IC, Modal, Button,Screens } from '@src/core'
import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity  } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { salonConst } from '../../constants'

const SalonPage = () => {
  const navigation = useNavigation<any>()

  const handleNavigator = (screen: string, data?: any) => {
    data ? navigation.navigate(screen, data) : navigation.navigate(screen)
  }


  const [showFill, setShowFill] = useState(false)

  const { infors } = salonConst

  const renderItemSalon = ({ item }: any) => (
    <TouchableOpacity style={[styles.bgSalon, styles.row]} onPress={()=>handleNavigator(Screens.SALON_DETAIL,item)}>
      <Image source={item.image} style={[styles.logo]} />
      <View style={[styles.infoSalon]}>
        <Text style={[styles.txtTitle]}>
          {item.name}
        </Text>
        {renderInfoView(IC.IconLocation, item.address)}
        <View style={[styles.row]}>
          {renderInfoView(IC.IconStar, `${item.star} (${item.quantify} đánh giá)`)}
          <Text style={{padding:5}}></Text>
          {renderInfoView(IC.IconArrowss, `${item.far} km`)}
        </View>
        {renderInfoView(IC.IconClock, item.open)}

      </View>
    </TouchableOpacity>
  )

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, styles.mgTxt]}>
      <Icon />
      <Text style={[styles.txtAd]}>{value}</Text>
    </View>
  )
  
  const renderFillView = () => (
    <View style={[styles.bgFill, styles.borderTop]}>
      <View style={[styles.row, styles.space]}>
        <TouchableOpacity onPress={()=>setShowFill(false)}>
          <IC.IconClose />
        </TouchableOpacity>
        <Text style={[styles.txtTitle, styles.bold]}>Bộ lọc</Text>
        <Text style={styles.txtTitle}>Xóa</Text>
      </View>
      <Text style={[styles.txtTitle, styles.bold]}>Vị trí</Text>
      <Text style={[styles.txtTitle]}>Dưới 3.5 km</Text>
      <View style={styles.line}></View>
      <Text style={[styles.txtTitle, styles.bold]}>Điểm đánh giá của khách</Text>
      <Button.Main label='Áp dụng'></Button.Main>
    </View>
  )

  return (
    <Container.View headerShow title='Danh sách salon' showLeft showRight IconRight={IC.IconFill} onRightClick={()=>setShowFill(!showFill)}>
      <View style={styles.container}>
        <View style={styles.line}></View>
        <FlatList
          data={infors}
          renderItem={renderItemSalon}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal.Light visible={showFill} onCloseModal={()=>setShowFill(false)}>
          {renderFillView()}
      </Modal.Light>
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
  borderTop: {
    borderTopLeftRadius: horizontalScale(16),
    borderTopRightRadius: horizontalScale(16)
  }
})
