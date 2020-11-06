import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome} from '@expo/vector-icons'



import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';

//Navegação do tipo stack != da navegação por menu lateral ou menu "em baixo"
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={({route}) =>({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    if(route.name === 'home') iconName = 'fa fa-home'
                    else if(route.name === 'profile') iconName = 'fa fa-user'
                    //COLOAR ICONES PRA OUTRAS ROTAS!!!
                    return <FontAwesome name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'red',

            }}
        >
            <Tab.Screen name="home" component={Home}/>
            <Tab.Screen name="profile" component={} />
        </Tab.Navigator>
    )
}

export const Routes = () =>{
    return(
        <>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{headerShown:false}}>
                    <AppStack.Screen name="login" component={Login} />
                    <AppStack.Screen name="register" component={Register} />
                    <AppStack.Screen name="home" component={TabRoutes} />
                </AppStack.Navigator>
            </NavigationContainer>
            {/* <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) =>({
                        tabBarIcon: ({focused, color, size}) =>{
                            let iconName;
                            if(route.name === 'home') iconName = 'fa fa-home'
                            else if(route.name === 'perfil') iconName = 'fa fa-user'
                            //COLOAR ICONES PRA OUTRAS ROTAS!!!
                            return <FontAwesome name={iconName} size={size} color={color} />
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: 'blue',
                        inactiveTintColor: 'red',

                    }}
                >
                    <Tab.Screen name="home" component={Home} />
                    <Tab.Screen name="login" component={Login} />
                </Tab.Navigator>
            </NavigationContainer> */}
        </>
    );
}