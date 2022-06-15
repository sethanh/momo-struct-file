import { Colors, Container, Fonts, fontSize, horizontalScale, IC, Modal, Button, MoreSalonView } from '@src/core'
import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { salonConst } from '../../constants'
import { Slider } from '@miblanchard/react-native-slider'
const SalonPage = () => {


  const [showFill, setShowFill] = useState(false)
  const [sofar, setSoFar] = useState<any>(1)
  const [star, setStar] = useState(0)

  const { infors, fillstar } = salonConst

  const onNoFill = () => {
    setSoFar(1)
    setStar(0)
  }

  const renderItemSalon = ({ item }: any) => (<MoreSalonView item={item}/>)

  const renderStar=(item:string,index:number)=>(
    <TouchableOpacity style={[styles.row, styles.btnFillStar]} key={index}
            onPress={() => { setStar(Number(item)) }}>
            <Text style={[Number(item) === star && { color: Colors.BUTTON.BLUE }]}
            >{Number(item)===3&&'<3' || item} 
            </Text>
            {Number(item) === star && <IC.IconBlueStar /> || <IC.IconGrayStar />}
    </TouchableOpacity>
  )
  const renderFillView = () => (
    <View style={[styles.bgFill, styles.borderTop]}>
      <View style={[styles.row, styles.space]}>
        <TouchableOpacity onPress={() => setShowFill(false)}>
          <IC.IconClose />
        </TouchableOpacity>
        <Text style={[styles.txtTitle, styles.bold]}>Bộ lọc</Text>
        <TouchableOpacity onPress={() => onNoFill()}>
          <Text style={styles.txtTitle}>Xóa</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.txtTitle, styles.bold,{marginVertical: horizontalScale(8)}]}>Vị trí</Text>
      <Text style={[]}>{`Dưới ${(sofar * 10).toFixed(1)} km`}</Text>
      <Slider
        value={sofar}
        onValueChange={value => setSoFar(value)}
      />
      <View style={[styles.line,{marginBottom:horizontalScale(16)}]}></View>
      <Text style={[styles.txtTitle, styles.bold]}>Điểm đánh giá của khách</Text>
      <View style={[styles.row, styles.space, styles.bgBtnFill]}>
        {fillstar.map((item, index) => (
          renderStar(item,index)
        ))}

      </View>
      <Button.Main label='Áp dụng' ></Button.Main>
    </View>
  )

  return (
    <Container.View headerShow title='Danh sách salon' showLeft showRight IconRight={IC.IconFill} onRightClick={() => setShowFill(!showFill)}>
      <View style={styles.container}>
        <View style={styles.line}></View>
        <FlatList
          data={infors}
          renderItem={renderItemSalon}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal.Light visible={showFill} onCloseModal={() => setShowFill(false)}>
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
  },
  btnFillStar: {
    backgroundColor: Colors.BUTTON.GRAY,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: horizontalScale(9.39),
    borderRadius: horizontalScale(4),

  },
  bgBtnFill: {
    marginBottom: horizontalScale(102),
    marginTop: horizontalScale(8)
  },
  bgSlider: {
    backgroundColor: Colors.hFFFFFF,
    elevation: 2,
    shadowColor: Colors.TXT.BLACK,
    shadowOffset: {
      width: 2,
      height: 2
    },
  }
})
