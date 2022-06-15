import { Button } from '@src/core';
import { Colors, Fonts, fontSize, horizontalScale, formatFlash, formatMoney } from '@src/core/utils'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ViewStyle, View } from 'react-native'

interface IProps {
  container?: ViewStyle
  value: number
  total: number
}

const PaymentView = (props: IProps) => {
  const { container, value,total } = props
  return (
    <View style={[styles.bgPay,container]}>
      <View style={[styles.row, styles.space]}>
        <View style={[styles.row]}>
          <Text style={[styles.txtTitle, { fontWeight: '400' }]}>Tổng tiền</Text>
          <Text style={[styles.txtTitle, { fontWeight: '400', color: Colors.TXT.UNACTIVE }]}>({total} sản phẩm)</Text>
        </View>
        <Text style={[styles.txtTitle, { color: Colors.BUTTON.BLUE }]}>{formatMoney(value)}đ</Text>
      </View>
      <Button.Main label='Thanh toán' />
    </View>
  )
}

export default PaymentView

PaymentView.defaultProps = {
  container: {}
}

const styles = StyleSheet.create({
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
  space: {
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  txtTitle: {
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '500',
    fontFamily: Fonts.Roboto,
    color: Colors.TXT.BLACK
  }
})
