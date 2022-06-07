import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from '@src/core'
import BottomTab from './BottomTab'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation