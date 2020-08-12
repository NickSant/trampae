import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { View, Text, Image, Button, TouchableOpacity, ToastAndroid, Picker, AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import estilo from './styles';
import logoImg from '../../assets/icon.png';

import api from '../../services/api';

export default function Index(){
    

    const nav = useNavigation();

    function backToLogin(){
        nav.navigate('login')
    }

    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [whats, setWhats] = useState('');
    const [pass, setPass] = useState('');
    const [pickedCity, setPickedCity] = useState('');
    const [pickedUf, setPickedUf] = useState('');

    function log(e){
        console.log(e)
    }

    // API IBGE  --------------------------------------------------------------------
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);

    function fetchUfs(){
        
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then( res =>{
            const siglas = res.data.map( estado => estado.sigla);
            setUfs(siglas);
        })

    }

    useEffect( fetchUfs, []);

    function fetchCities(){
        
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${pickedUf}/municipios`)
        .then( res =>{
            const cidades = res.data.map( cidade =>{
                delete cidade.municipio;
                return cidade;
            });
            setCities(cidades);
        })
        .catch(e =>{
            ToastAndroid.show(`Erro ao buscar os municípios da UF ${pickedUf} \nTente novamente mais tarde`,10000)
        })
    }

    useEffect( fetchCities, [pickedUf] );


    //submit
    function submit(){
        AsyncStorage.clear();
        
        //Criar gif para aguardar! no onclick do button!!!

        const body = {
            name: name,
            email: email,
            whatsapp: whats,
            password: pass,
            city: pickedCity,
            uf: pickedUf,
        }

        fetch(`${api}/signup`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(body),
        }).then( res =>{
            res.json().then( (data) => {

                const token = data.token;
                AsyncStorage.setItem('token',token);
                ToastAndroid.show(`Usuário ${body.name} criado com sucesso!\nVocê será redirecionado à Home!`, ToastAndroid.LONG )
                nav.navigate('home')
            } )
        })
        .catch(e =>console.log(e))

        // api.post('/signup',body)
        // .then( res =>{
        //     console.log(res.data);
        //     console.log(res.status)
        // } )
        // .catch(e => console.log(e)) 
    }

    return(
        <View style={estilo.container}>
            <ScrollView collapsable={false}>
                <View style={estilo.header}>
                    <Image style={estilo.img_logo} source={logoImg}/>
                    <Text style={estilo.p_header}>Trampaê</Text>
                </View>
            
                <View style={estilo.container_login}>
                    <Text style={estilo.title_login}>Cadastro</Text>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            onChange={e => setName(e.nativeEvent.text)}
                            placeholder="Nome"
                            keyboardType="default" 
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            autoCorrect={false}
                            autoCompleteType='off'
                        />
                    </View>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            onChange={e => setMail(e.nativeEvent.text)}
                            placeholder="Email"
                            keyboardType="email-address" 
                            multiline={false}  
                            style={estilo.input}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            allowFontScaling={false}
                        />
                    </View>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            onChange={e => setWhats(e.nativeEvent.text)}
                            placeholder="Whatsapp"
                            keyboardType="phone-pad" 
                            multiline={false}  
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                        />
                    </View>
                    <View style={estilo.input_group}>

                        <Picker 
                            selectedValue={pickedUf}
                            onValueChange={ value => setPickedUf(value) }
                            style={estilo.input}
                        >
                            <Picker.Item label="UF" value="default" />
                            {ufs.map( uf =>{
                                return(
                                    <Picker.Item label={uf} value={uf} key={uf} />
                                );
                            })}
                        </Picker>

                    </View>
                    <View style={estilo.input_group}>
                        
                        <Picker
                            selectedValue={pickedCity}
                            onValueChange={ value => setPickedCity(value) }
                            style={estilo.input} 
                        >     
                            <Picker.Item label="Cidade" value="default" />

                            {cities.map(city =>{
                                return(
                                    <Picker.Item label={city.nome} value={city.nome} key={city.id}/>
                                );
                            })}

                        </Picker>

                    </View>
                    
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            onChange={ e => setPass(e.nativeEvent.text) }
                            placeholder="Senha"
                            keyboardType="visible-password" 
                            multiline={false}  
                            style={estilo.input}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            allowFontScaling={false}
                        />
                    </View>
                    <TouchableOpacity style={estilo.button}>
                        <Text onPress={submit} style={estilo.p_button}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={backToLogin} style={estilo.link_cadastro}>
                        <Feather name={'arrow-left'} size={18} color='#fff'/>
                        <Text style={estilo.p_link}>Voltar para o Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}