import { useState } from 'react'
import{Link} from 'react-router-dom'
import './estilos.css'


function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

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
                <Link to={'/dashboard'}>Entrar</Link>
                <Link to={'/cadastro'}>Não tenho cadastro</Link>
            </div>
            
        </div>
    )
}

export default Login