import React, { useEffect, useState } from 'react';
import axios from 'axios';

import estilo from './styles';
import { View, Text, Image, Button, TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/icon.png';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function Index(){

    const nav = useNavigation();

    const [user, setUser] = useState({});


    useEffect(() =>{
        const token = AsyncStorage.getItem('token')
        .then(token =>{
            if(!token){
                ToastAndroid.show('Você não é autorizado aqui seu bosta.', ToastAndroid.LONG);
                nav.navigate('login');
            }
            ToastAndroid.show(`TOKEN: ${token}`, ToastAndroid.LONG);

            fetch(`${api}/me`,{
                method:'GET', 
                headers:{
                    "Content-Type": "application/json",
                    "authorization":`Bearer ${token}`
                }
            }).then( res => res.json().then( data =>{
                console.log(`USER:${data.name}`)
                setUser(data);
            }));
        })
        
    },[])


    function goToRegister(){
        nav.navigate('register')
    }


    

    useEffect(() =>{
        console.log('iniciou');
        
    },[])

    

    return(
        <View style={estilo.container}>
            
            <Text>
                Bem vindo, {user.name}
            </Text>
        </View>
    );
}