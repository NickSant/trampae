import React from 'react';
import estilo from './styles';
import { View, Text, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/icon.png';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
export default function Index(){

    const nav = useNavigation();

    function backToLogin(){
        nav.navigate('login')
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
                            placeholder="Whatsapp"
                            keyboardType="phone-pad" 
                            multiline={false}  
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                        />
                    </View>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            placeholder="Cidade"
                            keyboardType="default" 
                            multiline={false}  
                            style={estilo.input}
                            
                            // autoCapitalize="none"
                            allowFontScaling={false}
                        />
                    </View>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
                            placeholder="UF"
                            keyboardType="default" 
                            multiline={false}  
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            maxLength={2}
                        />
                    </View>
                    <View style={estilo.input_group}>
                        
                        <TextInput 
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
                        <Text style={estilo.p_button}>Cadastrar</Text>
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