import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import {
  HomePage, ProfilePage, FavouritePage, OrderPage, TimePage
} from '@src/screens'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Colors, fontSize, horizontalScale,ICTab, Screens, verticalScale } from '@src/core'
import { SvgProps } from 'react-native-svg'

const Tab = createMaterialBottomTabNavigator()
const { width } = Dimensions.get('window')
const widthTab = width / 5

const RenderIcon = ({ Icon, title }: { Icon: React.FC<SvgProps>, title: string }) => {
  return (
    <View style={styles.viewActive}>
      <Icon />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const RenderIconInactive = ({ Icon, title }: { Icon: React.FC<SvgProps>, title: string }) => {
  return (
    <View style={styles.viewActive}>
      <Icon />
      <Text style={[styles.title, { color: Colors.TAB.UNACTIVE }]}>{title}</Text>
    </View>
  )
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      shifting={false}
      sceneAnimationEnabled={false}
      barStyle={styles.styleBar}
      labeled={false}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }: any) => {
            if (focused) return <RenderIcon   Icon={ICTab.TabHomeActive} title={'Home'} />
            return <RenderIconInactive  Icon={ICTab.TabHome} title={'Home'} />
          },
        }}
      />
      <Tab.Screen
        name={Screens.ORDER_PAGE}
        component={TimePage}
        options={{
          tabBarIcon: ({ focused }: any) => {
            if (focused) return <RenderIcon  Icon={ICTab.TabCalendarActive} title={'Lịch hẹn'} />
            return <RenderIconInactive  Icon={ICTab.TabCalendar} title={'Lịch hẹn'} />
          },
        }}
      />
      <Tab.Screen
        name={Screens.TIME_PAGE}
        component={OrderPage}
        options={{
          tabBarIcon: ({ focused }: any) => {
            if (focused) return <RenderIcon  Icon={ICTab.TabOrderActive} title={'Đơn hàng'} />
            return <RenderIconInactive  Icon={ICTab.TabOrder} title={'Đơn hàng'} />
          },
        }}
      />
      <Tab.Screen
        name={Screens.WALLET_PAGE}
        component={FavouritePage}
        options={{
          tabBarIcon: ({ focused }: any) => {
            if (focused) return <RenderIcon Icon={ICTab.TabFavouriteActive} title={'Yêu thích'} />
            return <RenderIconInactive Icon={ICTab.TabFavourite} title={'Yêu thích'} />
          },
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE_PAGE}
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }: any) => {
            if (focused) return <RenderIcon Icon={ICTab.TabProfileActive} title={'Tài khoản'} />
            return <RenderIconInactive Icon={ICTab.TabProfile} title={'Tài khoản'} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  viewActive: {
    flex: 1,
    backgroundColor: Colors.hFFFFFF,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthTab
  },
  title: {
    fontSize: fontSize(12),
    marginLeft: horizontalScale(5),
    lineHeight: fontSize(16),
    color: Colors.TAB.ACTIVE
  },
  styleBar: {
    position: 'absolute',
    bottom: horizontalScale(0),
    paddingTop: verticalScale(8),
    elavation: 0,
    backgroundColor: Colors.hFFFFFF,
    height: verticalScale(84),
    overflow: 'hidden',
  }
})
