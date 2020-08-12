import React, { useEffect } from 'react';
import axios from 'axios';

import estilo from './styles';
import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/icon.png';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';


export default function Index(){

    const nav = useNavigation();

    function goToRegister(){
        nav.navigate('register')
    }


    

    useEffect(() =>{
        console.log('iniciou');
        
    },[])

    

    return(
        <View style={estilo.container}>
            
            <Text>
                HOMEEEE 
            </Text>
        </View>
    );
}