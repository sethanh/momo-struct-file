import { Colors, Container, Fonts, fontSize, formatMoney, horizontalScale, IC } from '@src/core'
import React, { useMemo, } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { SvgProps } from 'react-native-svg'
// import { timeConst } from './../../constants'

const OrderDetail = ({ route }: any) => {
  const { params } = route
  const { orders, info, salons, note } = params

  const total = useMemo(() => {
    const result: any = orders.reduce((result: any, prod: any) => {
      return result + prod.price* prod.quantify
    }, 0)
    return result
  }, [orders])

  const renderInfoView = (Icon: React.FC<SvgProps>, value: string) => (
    <View style={[styles.row, { alignItems: 'center' }]}>
      <Icon />
      <Text style={[styles.fontct, styles.txtunat, { marginTop: horizontalScale(4) }]}>{` ${value}`}</Text>
    </View>
  )

  const renderSalonView = (item: any) => (
    <View style={[styles.row, styles.space, styles.bgrd]}>
      <View style={[styles.row]}>
        <Image source={item.image} style={[styles.logo]} />
        <View>
          <Text style={[styles.font, styles.tt500]}>{item.name}</Text>
          {renderInfoView(IC.IconLocation, item.address)}
        </View>
      </View>
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <IC.IconNext />
      </TouchableOpacity>
    </View>
  )

  const renderTitleView = (item: any) => (
    <View style={[styles.paddingh, { paddingVertical: horizontalScale(16) }]}>
      <View style={[styles.row, styles.space]}>
        <Text style={[styles.font, styles.tt500]}>
         {item.name}
        </Text>
        <View style={[styles.status, item.status === 2 ? styles.bgCheck : styles.bgWait]}>
          <Text style={[styles.fontct, styles.tt400, { color: Colors.hFFFFFF }]}>
            {item.status === 2 ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </Text>
        </View>
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconPhone />
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {` ${item.phone}`}
        </Text>
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconClock />
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {` ${item.date}`}
        </Text>
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconInvoice />
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {` ${item.mahd}`}
        </Text>
      </View>
    </View>
  )
  const renderNote = (note?: string) => (
    <View style={[styles.bgNote]}>
      <Text style={[styles.fontct, styles.txtunat]}>Ghi chú</Text>
      <Text style={[styles.font, styles.tt400, styles.txtbl]}>{note}</Text>
    </View>
  )

  const renderpayment = (name?: string) => (
    <View style={[styles.bgNote]}>
      <Text style={[styles.fontct, styles.tt500, styles.txtbl]}>PHƯƠNG THỨC THANH TOÁN</Text>
      <View style={[styles.row, styles.space]}>
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>{name || 'Momo'}</Text>
        <Text style={[styles.fontct, styles.tt400, styles.txtbl]}>{`${formatMoney(total)}đ`}</Text>
      </View>

    </View>
  )

  const renderShowData = (title: string, value: string) => (
    <View style={[styles.bgNote]}>
      <Text style={[styles.fontct, styles.tt400, styles.txtbl]}>{title}</Text>
      <View style={[styles.row, styles.space]}>
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>{value}</Text>
      </View>

    </View>
  )


  const renderServiceView = ({ item }: any) => (
    <View style={[styles.bgService]} >
      <View style={[styles.row, styles.space,]}>
        <Text style={[styles.font, styles.tt500]}>
          {item.name}
        </Text>
        <View style={[styles.row]}>
          {/* <IC.IconTimer /> */}
          <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
            {`x ${item.quantify}`}
          </Text>
        </View>
      </View>
      <View style={[styles.row, styles.space,]}>
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {item.staff}
        </Text>
        <Text style={[styles.fontct, styles.tt500, { color: Colors.TXT.BLACK }]}>
          {`${formatMoney(item.price)}đ`}
        </Text>
      </View>
    </View>
  )

  const renderHeaderService = () => (
    <View style={[{ paddingTop: horizontalScale(16) }]}>
      <Text style={[styles.fontct, styles.tt500, { color: Colors.TXT.BLACK }]}>
        THÔNG TIN ĐƠN HÀNG
      </Text>
    </View>
  )

  const renderFooterService = () => (
    <View style={[styles.row, styles.space, { alignItems: 'center', paddingVertical: 2 }]}>
      <Text style={[[styles.fontct, styles.tt400, { color: Colors.TXT.BLACK }]]}>
        Tổng tiền
      </Text>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconPayed />
        <Text style={[styles.font, styles.tt700, { marginLeft: horizontalScale(16), color: Colors.TXT.BLACK }]}>
          {`${formatMoney(total)}đ`}
        </Text>
      </View>
    </View>
  )

  return (
    <Container.View headerShow title="Chi tiết đơn hàng" showLeft >
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      nestedScrollEnabled={true} 
      style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={[styles.line]} />
        {/* <View style={[styles.line, { height: horizontalScale(10) }]} /> */}
        {renderTitleView(params)}
        <View style={[styles.line, { height: horizontalScale(10) }]} />
       
          {renderSalonView(salons)}
          <View style={[styles.line]} />
          <View style={[styles.paddingh]}>
            <FlatList
              data={orders}
              ListHeaderComponent={renderHeaderService}
              renderItem={renderServiceView}
              ListFooterComponent={renderFooterService}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={[styles.line, { height: horizontalScale(10) }]} />
          {renderNote(note)}
          {renderpayment()}
          {renderShowData('PHƯƠNG THỨC GIAO HÀNG', 'giao hàng tiết kiêm')}
          {renderShowData('THỜI GIAN ĐẶT LỊCH', '01/06/2022 12:30')}
      </View>
      </ScrollView>
    </Container.View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: horizontalScale(20)
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
  font: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontFamily: Fonts.Roboto
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
  btnHead: {
    flex: 1,
    paddingVertical: horizontalScale(10)
  },
  fontct: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: Fonts.Roboto
  },
  bgService: {
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: Colors.BUTTON.GRAY,
    paddingVertical: horizontalScale(12),

  },
  status: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: horizontalScale(2),
    borderRadius: 6
  },
  bgCheck: {
    backgroundColor: Colors.TXT.GREEN
  },
  bgConfirm: {
    backgroundColor: Colors.BUTTON.BLUE
  },
  bgWait: {
    backgroundColor: Colors.TXT.ORANGE
  },
  bgContent: {
    paddingLeft: horizontalScale(16),
    borderBottomWidth: horizontalScale(10),
    borderBottomColor: Colors.BUTTON.GRAY,
  },
  paddingh: {
    paddingHorizontal: horizontalScale(16),
  },
  bgrd: {
    paddingVertical: horizontalScale(8),
    paddingHorizontal: horizontalScale(16)
  },
  logo: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(8),
    marginRight: horizontalScale(12)
  },
  bgNote: {
    borderBottomColor: Colors.BUTTON.GRAY,
    borderBottomWidth: horizontalScale(10),
    paddingVertical: horizontalScale(16),
    paddingHorizontal: horizontalScale(16)
  }
})
