import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from '@src/core'
import BottomTab from './BottomTab'
import {SalonPage,SalonDetail,CartPage,AppointmentDetail,OrderDetail} from '@src/screens'

const Stack = createStackNavigator()

const AppNavigation = ({ initialRouteName }: { initialRouteName: string }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={initialRouteName}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={Screens.HOMEPAGE} component={BottomTab} />
                <Stack.Screen name={Screens.SALON_PAGE} component={SalonPage} />
                <Stack.Screen name={Screens.SALON_DETAIL} component={SalonDetail} />
                <Stack.Screen name={Screens.CART_DETAIL} component={CartPage} />
                <Stack.Screen name={Screens.APPOITMENT_DETAIL} component={AppointmentDetail} />
                <Stack.Screen name={Screens.ORDER_DETAIL} component={OrderDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation