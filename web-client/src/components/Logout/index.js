import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'

const Logout = () =>{
    useEffect(function(){
        localStorage.clear()
    },[])
    return(
        <Redirect to={{
            pathname:'/'
        }}/>
    )

}
export default Logout