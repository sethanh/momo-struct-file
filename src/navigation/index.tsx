import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Screens} from './constants'
import {Home,Booking} from '../screens'

const Stack = createStackNavigator()

const AppNavigation = ({ initialRouteName }: { initialRouteName: string }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={initialRouteName}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={Screens.HOME} component={Home} />
                <Stack.Screen name={Screens.BOOKING} component={Booking} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation