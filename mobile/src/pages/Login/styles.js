import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:Constants.statusBarHeight + 35,
        backgroundColor:'#fff',
        // flexDirection:'row',
        justifyContent:'center',
        //alignItems:'center'
        // position:'relative'
    },
    img_logo:{
        top: 50,
        left: 80,
        width:200,
        height:200,
    },
    p_header:{
        // marginLeft:'auto',
        marginRight:10,
        fontWeight:'600',
        fontSize:20
    },
    title_login:{
        fontWeight:'bold',
        fontSize:25,
        bottom: 130,
        color:'#000',
    },
    container_login:{
        marginTop:-5,
        paddingTop:100,
        height:600,
        paddingBottom:40,
        borderRadius:10,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',  
    },
    input_group:{
        marginTop:7, 
    },
    input:{
        bottom:100,
        borderStyle:'solid',
        borderColor:'#000',
        backgroundColor:'#f5f5f5',
        width:300,
        lineHeight:100,
        height:50,
        paddingLeft:10,
        color:'#000',
        borderRadius:8
    },

    button_entrar:{
        backgroundColor:'#14b3b0',
        marginTop:-70,
        paddingHorizontal:100,
        paddingVertical:10,
        borderRadius:8,
    },
    p_button:{
        color:'#fff',
        textAlign:'center'
    },
    link_cadastro:{
        marginTop:10
    },
    p_link:{
        top:50,
        left:18,
        fontSize:20,
        color:'#000',
        fontWeight:"bold",
    },
    button_cad:{
        backgroundColor:'#14b3b0',
        marginTop:100,
        paddingHorizontal:75,
        paddingVertical:10,
        borderRadius:8,
    },
    p_cad__button:{
        color:'#fff',
        textAlign:'center',
    }
})