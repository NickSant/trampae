import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';

//Navegação do tipo stack != da navegação por menu lateral ou menu "em baixo"
const AppStack = createStackNavigator();
export const Routes = () =>{

    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="login" component={Login} />
                <AppStack.Screen name="register" component={Register} />
                <AppStack.Screen name="home" component={Home} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}