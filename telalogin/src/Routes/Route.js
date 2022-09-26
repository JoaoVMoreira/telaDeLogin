import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper ({ ComponenteLogado, ComponenteInicial, isPrivate}){

    const { auth } = useContext(AuthContext)

    if(auth && !isPrivate){
        return(<Navigate to='/dashboard'/>)
    }

    if(!auth && isPrivate){
        return(<Navigate to='/'/>)
    }

    return auth ? ComponenteLogado : ComponenteInicial
}