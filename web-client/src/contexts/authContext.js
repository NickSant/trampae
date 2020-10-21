import React, { createContext, useCallback, useContext, useState, useHistory } from 'react'
import Util from '../helpers/Util';

import api from '../services/api'

require('dotenv/config')

const AuthContext = createContext();


async function me(token){
	const res = await api.get('/me', {
		headers:{
			authorization: `Bearer ${token}`
		}
	})

	if(res.data) res.data.image_url = Util.api_base_url(res.data.image_url)
	
	return !res.data ? false : res.data
}
function AuthProvider({children}) {
	const [data, setData] = useState(() => {
		const token = localStorage.getItem('@Trampae:token')
		const user = localStorage.getItem('@Trampae:user')

		if (token && user) {
			api.defaults.headers.authorization = `Bearer ${token}`

			return { token, user: JSON.parse(user) }
		}

		return {}
	})
		
	const signIn = useCallback(async ({ mail, pass }) => {
		//ONLY DEBUG!!
        console.log( mail);
		console.log(pass);
		
        const basic = `Basic ${btoa(`${mail}:${pass}`)}`
        
		try {
			const response = await api.post('/login',{},{
				headers: {
					authorization: basic,
				}
			})

			console.log(response)
            
			const { token } = response.data

			const user = await me(token)

			

			localStorage.setItem('@Trampae:token', token)
			localStorage.setItem('@Trampae:user', JSON.stringify(user));
			

            api.defaults.headers.authorization = `Bearer ${token}`
            
            setData({ token, user });

            return true;
            

		} catch (error) {
            localStorage.removeItem('@Trampae:token')
            localStorage.removeItem('@Trampae:user')

			console.log(error)
			window.location = '/'
		}
	}, [])

	return <AuthContext.Provider value={{ user: data.user, signIn }}>{children}</AuthContext.Provider>
}

function useAuth() {
	const context = useContext(AuthContext)

	return context;
}

export { AuthProvider, useAuth, me }
