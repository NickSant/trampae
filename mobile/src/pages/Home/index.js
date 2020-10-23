import React, { useEffect, useState } from 'react'
import axios from 'axios'

import estilo, {Container} from './styles'

import { View, Text, Image, Button, TouchableOpacity, AsyncStorage, ToastAndroid} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/icon.png'
import { TextInput, ScrollView } from 'react-native-gesture-handler'

import TabNavigation from '../../components/TabNavigation'

import api from '../../services/api'

export default function Index(){

    

    const nav = useNavigation()

    const [user, setUser] = useState({})

    useEffect(() =>{
        const token = AsyncStorage.getItem('token')
        .then(token =>{
            if(!token){
                ToastAndroid.show('Você não é autorizado aqui', ToastAndroid.LONG)
                nav.navigate('login')
            }
            ToastAndroid.show(`TOKEN: ${token}`, ToastAndroid.LONG)

            fetch(`${api}/me`,{
                method:'GET', 
                headers:{
                    "Content-Type": "application/json",
                    "authorization":`Bearer ${token}`
                }
            }).then( res => res.json().then( data =>{
                console.log(`USER:${data.name}`)
                data.image_url = `${api}/${data.image_url}`
                setUser(data)
            }))
        })
        
    },[])

    function goToRegister(){
        nav.navigate('register')
    }

   const [userUrl, setUserUrl] = useState(user.image_url)

    useEffect(() =>{
        console.log(user.image_url, 'user_url')
    },[])
   
    return(
        <>
            <Container>
                <Text>
                    Bem vindo, {user.name}
                </Text>
                <Text>
                    Email: {user.email}
                </Text>

                
            </Container>

            <TabNavigation />
        </>
    )
}