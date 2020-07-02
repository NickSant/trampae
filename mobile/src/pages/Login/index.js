import React from 'react';
import estilo from './styles';
import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/icon.png';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default function Index(){

    const nav = useNavigation();

    function goToRegister(){
        nav.navigate('register')
    }

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
                            keyboardType="email-address" 
                            style={estilo.input}
                            autoCapitalize="none"
                            allowFontScaling={false}
                            placeholder='Email'
                        />

                        
                    </View>
                    <View style={estilo.input_group}>
                        <TextInput 
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
                        <Text style={estilo.p_button}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToRegister} style={estilo.link_cadastro}>
                        <Text style={estilo.p_link}>Não possui um cadastro?</Text>
                    </TouchableOpacity>
            
                </View>
           </ScrollView> 
        </View>
    );
}