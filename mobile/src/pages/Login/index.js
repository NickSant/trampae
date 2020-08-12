import React, { useEffect, useState } from 'react';
import axios from 'axios';


import estilo from './styles';
import { View, Text, Image, Button, TouchableOpacity, ToastAndroid, AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/icon.png';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


import api from '../../services/api';
import baes64 from 'react-native-base64';
import base64 from 'react-native-base64';


export default function Index(){

    const nav = useNavigation();

    function goToRegister(){
        nav.navigate('register')
    }

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    function submit(){
        AsyncStorage.clear();
        const hash = `Basic ${base64.encode(`${mail}:${pass}`)}`;

        fetch(`${api}/login`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                'authorization': hash,
            },
        }).then(res =>{
            res.json().then(data =>{
                console.log(data);
                if(data.Error)
                    return ToastAndroid.show('Usuário ou senha incorretos', ToastAndroid.LONG);

                const user = data.user;
                const token = data.token;

                if(!user || !token)
                    return ToastAndroid.show('Ocorreu algum erro..\nTente novamente mais tarde', ToastAndroid.LONG);

                AsyncStorage.setItem('token', token);

                ToastAndroid.show(`Bem vindo novamente ${user.name}`, ToastAndroid.LONG);
                nav.navigate('home');
                
            })
            .catch(e =>{
                console.log(e);
            })
        })
    }


    useEffect(() =>{
        console.log('iniciou');
    },[])

    

    return(
        <View style={estilo.container}>
            <View style={estilo.header}>
                <Image style={estilo.img_logo} source={logoImg}/>
                <Text style={estilo.p_header}>Trampaê</Text>
            </View>
            <ScrollView collapsable={false}>
                <View style={estilo.container_login}>
                    <Text style={estilo.title_login}>Login</Text>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            onChange={e => setMail(e.nativeEvent.text)}
                            keyboardType="email-address" 
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            placeholder='Email'
                        />

                        
                    </View>
                    <View style={estilo.input_group}>
                        <TextInput 
                            onChange={e => setPass(e.nativeEvent.text)}
                            keyboardType="visible-password" 
                            multiline={false}  
                            style={estilo.input}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            placeholder='Senha'
                        />
                    </View>
                    <TouchableOpacity style={estilo.button}>
                        <Text onPress={submit} style={estilo.p_button}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToRegister} style={estilo.link_cadastro}>
                        <Text style={estilo.p_link}>Não possui um cadastro?</Text>
                    </TouchableOpacity>
            
                </View>
           </ScrollView> 
        </View>
    );
}