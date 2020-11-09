import axios from 'axios'
import React, {useCallback, useContext, useState, createContext } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import base64 from 'react-native-base64'
import validator from '../helpers/validators'
import Util from '../helpers/Util'

const api = axios.create({
    baseURL:`http://192.168.0.7:3333`
})

const AuthContext = React.createContext()

function me(token){
    api.get('/me',{headers:{
        authorization: `Bearer ${token}`
    }}).then(res =>{
        if(res.data) res.data.image_url = Util.api_base_url(res.data.image_url)
        return !res.data ? false : res.data
    })
}

const signIn = useCallback( async({email, password}) =>{
    AsyncStorage.clear()
    validator.login(email, password).then( data => {
        const basicHash = base64.encode(`${email}:${password}`)
        
    })
}) 
function AuthProvider({children}){
    const [data, setData] = useState(function(){
        const token = AsyncStorage.getItem('@Trampae:token')
        const user = AsyncStorage.getItem('@Trampae:user')
        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user }
        }
        return {}
    })
    const signIn = useCallback( async ({email, password}) =>{
        AsyncStorage.clear()
        validator.login(email, password).then( data => {
            const basicHash = base64.encode(`${email}:${password}`)
            api.post('/login', {}, {headers:{
                authorization: basicHash
            }}).then( async res =>{
                const { token } = res.data
                const user = await me(token)
                AsyncStorage.setItem('@Trampae:token', token)
                AsyncStorage.setItem('@Trampe:user', JSON.stringify(user))

                api.defaults.headers.authorization = `Bearer ${token}`
                setData({user, token})
            }).catch(function(e){
                AsyncStorage.clear()
                ToastAndroid.show(`Erro...`, ToastAndroid.LONG)
            })
        })
    },[]) 
    return <AuthContext.Provider value={{ user: data.user, token: data.token, signIn }}> {children} </AuthContext.Provider>
}
function useAuth(){
    return React.useContext(AuthContext)
}

export {
    AuthProvider,
    useAuth,
    me
}