import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper ({ ComponenteLogado, ComponenteInicial, isPrivate}){ //Criando a função RouteWrapper onde são informados os parâmetros de privação da página, componente "inicial" e  componente logado

    const { auth } = useContext(AuthContext) //importando variavel auth para autenticação do usuário ao logar ou cadastrar

    if(auth && !isPrivate){//se o usuário já estiver logado e a pagina não for privada o mesmo é direcionado ao Dashboard
        return(<Navigate to='/dashboard'/>)
    }

    if (!auth && isPrivate) {//se o usuário não estiver logado e a pagina for privada o mesmo é direcionado a tela de login
        return(<Navigate to='/'/>)
    }

    return auth ? ComponenteLogado : ComponenteInicial //Se auth for verdadeiro retornamos o componente logado, caso contrario é retornado o componente inicial

}