import { useContext, useState } from 'react'
import{Link} from 'react-router-dom'
import './estilos.css'
import firebase from 'firebase'
import { AuthContext } from '../../contexts/auth'


function Login(){


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {logarUser} = useContext(AuthContext)

    function fazerLogin(){
        logarUser(email, senha)
    }

    return(
        <div className="conteiner">
            <div className='logoImg'>
                <img src={require('../../medias/logo.png')}/>
            </div>
            <div className='areaLogin'>
                <input type='text' placeholder='Login' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type='password' placeholder='Senha' value={senha} onChange={(e)=> setSenha(e.target.value)}/>
            </div>
            <div className='areaBotao'>
                <button onClick={fazerLogin}>Entrar</button>
            </div>
            <div className='areabtn'>
                <Link to={'/cadastro'}>Não tenho cadastro</Link>
            </div>

        </div>
    )
}

export default Login