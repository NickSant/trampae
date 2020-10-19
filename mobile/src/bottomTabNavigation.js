import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'


const Tab = createBottomTabNavigator()

export const BottomTabNav = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen />
            </Tab.Navigator>
        </NavigationContainer>
    )
}