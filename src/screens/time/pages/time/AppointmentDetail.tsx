import { Colors, Container, Fonts, fontSize, formatMoney, horizontalScale, IC, SalonView } from '@src/core'
import React, { useMemo, } from 'react'
import { StyleSheet, View, Text,FlatList} from 'react-native'
// import { timeConst } from './../../constants'

const AppoitmentDetail = ({ route }: any) => {
  const { params } = route
  const { service, info, salons, note } = params

  const total = useMemo(() => {
    const result: any = service.reduce((result: any, prod: any) => {
      return result + prod.price
    }, 0)
    return result
  }, [service])
  const VirtualizedList = ({ children }: any) => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        ListHeaderComponent={
          <>{children}</>
        }
      />
    )
  }

  const renderTitleView = (item: any) => (
    <View style={[styles.paddingh, { paddingVertical: horizontalScale(16) }]}>
      <View style={[styles.row, styles.space]}>
        <Text style={[styles.font, styles.tt500]}>
          {`${item.info.unit === 1 ? '[KHÁCH VIP]' : item.info.unit === 2 ? '[KHÁCH BẠC]' : '[KHÁCH ĐỒNG]'} ${item.info.name}`}
        </Text>
        <View style={[styles.status, item.salons.status === 2 ? styles.bgCheck : item.salons.status === 1 ? styles.bgConfirm : styles.bgWait]}>
          <Text style={[styles.fontct, styles.tt400, { color: Colors.hFFFFFF }]}>
            {item.salons.status === 2 ? 'Check in' : item.salons.status === 1 ? 'Đã xác nhận' : 'Chờ xác nhận'}
          </Text>
        </View>
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconClock />
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {` ${item.salons.date}`}
        </Text>
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <IC.IconCustomer />
        <Text style={[styles.fontct, styles.tt400, styles.txtunat]}>
          {` ${item.info.quantify}`}
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
            {` ${item.time} phút`}
          </Text>
        </View>
      </View>
      <View style={[styles.row, styles.space,]}>
        <Text style={[styles.fontct, styles.tt400, styles.txtunat, !item.staff && { color: Colors.TXT.ORANGE }]}>
          {item.staff || 'Chưa xếp nhân viên'}
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
        THÔNG TIN DỊCH VỤ
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
    <Container.View headerShow title={`Chi tiết lịch hẹn ${info.id || ""}`} showLeft >
      <VirtualizedList>
        <View style={styles.container}>
          <View style={[styles.line]} />
          {/* <View style={[styles.line, { height: horizontalScale(10) }]} /> */}
          {renderTitleView(params)}
          <View style={[styles.line, { height: horizontalScale(10) }]} />
          <SalonView address={salons.address} image={salons.image} name={salons.name}/>
          <View style={[styles.line, { height: horizontalScale(10) }]} />
          <View style={[styles.paddingh]}>
            <FlatList
              data={service}
              ListHeaderComponent={renderHeaderService}
              renderItem={renderServiceView}
              ListFooterComponent={renderFooterService}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={[styles.line, { height: horizontalScale(10) }]} />
          {renderNote(note)}
          {renderpayment()}
          {renderShowData('PHƯƠNG THỨC GIAO HÀNG', 'giao hàng tiết kiêmj')}
          {renderShowData('THỜI GIAN ĐẶT LỊCH', '01/06/2022 12:30')}
        </View>
      </VirtualizedList>
    </Container.View>
  )
}

export default AppoitmentDetail

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
    backgroundColor: Colors.BUTTON.CHECK
  },
  bgConfirm: {
    backgroundColor: Colors.BUTTON.BLUE
  },
  bgWait: {
    backgroundColor: Colors.BUTTON.SGRAY
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
