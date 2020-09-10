import React from 'react'
import { Route, Redirect, useParams } from 'react-router-dom'
import auth from '../../helpers/Util'

const PrivateRoute = ({ component: Component, authType, isUrlHash=false, ...rest  }) =>{
    return(
    <Route 
        { ...rest }
        render={
            (props) => auth.isAuthenticated(authType) ? (
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
)}
export default PrivateRoute;