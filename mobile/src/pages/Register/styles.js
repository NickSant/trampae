import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:Constants.statusBarHeight + 140,
        backgroundColor:'#fff',
        justifyContent:'center',
        
    },
    header:{
        //flex:1,
        flexDirection:'row',
        height:60,
        justifyContent:'center',
        alignItems:"center",
    },
    img_logo:{
        top: 20,
        left: 10,
        width:200,
        height:200,
        marginBottom: 100,
    },
    title_login:{
        fontWeight:'bold',
        fontSize:25,
        bottom: 130,
        color:'#000',
    },
    container_login:{
        marginTop:-5,
        paddingTop:650,
        height:750,
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
        borderRadius:8,

        
    },
    button:{
        backgroundColor:'#14b3b0',
        marginTop:-70,
        paddingHorizontal:100,
        paddingVertical:10,
        borderRadius:8,
        marginBottom: -20,
    },
    p_button:{
        color:'#fff',
        textAlign:'center',
    },
    link_cadastro:{
        marginTop:10
    },
    p_link:{
        top:50,
        left:25,
        fontSize:20,
        color:'#000',
        fontWeight:"bold",
        
    },
    button_cad:{
        backgroundColor:'#14b3b0',
        marginTop:80,
        marginBottom: 500,
        paddingHorizontal:75,
        paddingVertical:10,
        borderRadius:8,
    },
    p_cad__button:{
        color:'#fff',
        textAlign:'center',
    }
    
})