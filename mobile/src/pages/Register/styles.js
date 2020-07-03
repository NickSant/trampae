import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
        //flex:1,
        paddingHorizontal:20,
        paddingTop:Constants.statusBarHeight + 35,
        backgroundColor:'#fff',
        // flexDirection:'row',
        justifyContent:'center',
        //alignItems:'center'
        position:'relative',
        
    },
    header:{
        //flex:1,
        flexDirection:'row',
        height:60,
        justifyContent:'center',
        alignItems:"center",
    },
    img_logo:{
        width:100,
        height:100,
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
    },
    container_login:{
        marginTop:40,
        paddingTop:40,
        paddingBottom:40,
        borderRadius:10,
        backgroundColor:'#14b3b0',
        justifyContent:'center',
        alignItems:'center',
        
    },
    input_group:{
        marginTop:7,
        
    },
    input:{
        borderStyle:'solid',
        borderColor:'#222',
        backgroundColor:'#fff',
        width:220,
        lineHeight:100,
        paddingLeft:10,
        height:35,
        color:'#222',   
        borderRadius:4
    },
    button:{
        backgroundColor:'#ccc',
        marginTop:30,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:4,
    },
    p_button:{
        color:'#222',
    },
    link_cadastro:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    p_link:{
        color:'#fff'
    }

})