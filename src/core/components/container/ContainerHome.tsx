import { Colors, fontSize, heightSatusbar, horizontalScale, IconBack, Fonts, verticalScale,IC } from '@src/core/utils'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, StatusBar, View, TouchableOpacity, Text, ViewStyle } from 'react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from '@src/core'

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | null
  headerShow?: boolean
  title?: string
  showLeft?: boolean
  showRight?: boolean
  onRightClick?: () => void
  styleView?: ViewStyle
  IconRight?: any
}

interface FormValue {
  search: ''
}

const ContainerHome = (props: ContainerProps) => {
  const { children, headerShow, title, showRight, onRightClick, styleView, IconRight, showLeft } = props
  const navigation = useNavigation()
  const form = useForm<FormValue>({
    defaultValues: {},
    mode: 'onChange'
  })


  return (
    <View
      style={[styles.container, styleView]}
    >
      <View style={[styles.header]}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {
          <View style={[styles.content]}>
            <View style={styles.viewSearch}>
              <FormProvider {...form}>
                <Form.TextInput
                  name='search'
                  LeftIcon={IC.IconSearch}
                  // check
                  // RightIcon={IconClose}
                  placeholder="Tìm kiếm"
                  // onRightPress={onClear}
                  contentStyle={styles.search}
                />
              </FormProvider>
            </View>
            <TouchableOpacity style={[styles.bgRight]}>
              <Text style={[styles.txtHeader]}>Đà Nẵng</Text>
              <IC.IconRowDown/>
            </TouchableOpacity>
          </View>
        }
      </View>
      {children}
    </View>
  )
}

export default ContainerHome

ContainerHome.defaultProps = {
  headerShow: false,
  title: '',
  showRight: false,
  onRightClick: () => { },
  styleView: {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.hFFFFFF
  },
  header: {
    backgroundColor: Colors.TAB.ACTIVE,
    paddingBottom: horizontalScale(10),
  },
  content: {
    paddingTop: heightSatusbar+ horizontalScale(23),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    flexDirection: 'row'
  },
  label: {
    color: Colors.TAB.UNACTIVE,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '700',
    fontFamily: Fonts.Roboto
  },
  btnBack: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    left: horizontalScale(22)
  },
  btnMore: {
    position: 'absolute',
    top: heightSatusbar + horizontalScale(15),
    right: horizontalScale(22)
  },
  viewSearch: {
   flex: 1
  },
  search: {
    backgroundColor: Colors.hFFFFFF
  },
  bgRight:{
    marginLeft: horizontalScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader:{
    color: Colors.hFFFFFF,
    fontSize: fontSize(16),
    lineHeight: fontSize(24),
    fontWeight: '700',
    fontFamily: Fonts.Roboto,
    marginRight: horizontalScale(8.67)
  }
})