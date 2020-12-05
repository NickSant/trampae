import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {FontAwesome} from '@expo/vector-icons'

import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Home from './pages/Home/index'
import Profile from './pages/Profile'

//Navegação do tipo stack != da navegação por menu lateral ou menu "em baixo"
const AppStack = createStackNavigator()
const AuthTab = createBottomTabNavigator()

function AuthTabRoutes(){
    return(
        <AuthTab.Navigator
            screenOptions={({route}) =>({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName
                    if(route.name === 'home') iconName = 'home'
                    else if(route.name === 'profile') iconName = 'user'
                    //COLOAR ICONES PRA OUTRAS ROTAS!!!
                    console.log(route)
                    return <FontAwesome name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: '#cecece',
                style:{
                    
                }
            }}
        >
            <AuthTab.Screen name="home" component={Home}/>
            <AuthTab.Screen name="profile" component={Profile} />
        </AuthTab.Navigator>
    )
}

export const Routes = () =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="login" component={Login} />
                <AppStack.Screen name="register" component={Register} />
                <AppStack.Screen name="home" component={AuthTabRoutes} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}