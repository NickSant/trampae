import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Util from '../../helpers/Util'

const  PrivateRoute = ({ component: Component, ...rest  }) =>{   
    const isAuth = Util.isAuthenticated()
    return(
        <Route 
            { ...rest }
            render={
                (props) => isAuth ? (
                    <Component {...props} />
                ): (
                    <Redirect
                        to={{
                            pathname:'/',
                            state:{from: props.location}
                        }}
                    />
                )
                
            }
        />
    )
}
export default PrivateRoute;