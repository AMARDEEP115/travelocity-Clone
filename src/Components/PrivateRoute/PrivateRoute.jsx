import React from "react";
import {AppContext} from "../ContextProvider/ContextProvider";
import Error from "../Error";

function PrivateRoute({children}){
    const {isAuth} = React.useContext(AppContext);
    if(isAuth){
        return children;
    }
    return <Error/>
}

export default PrivateRoute;
