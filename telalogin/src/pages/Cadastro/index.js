import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [nivel, setNivel] = useState('')

    const { cadastraUser } = useContext(AuthContext)

    function Cadastrar(){
        cadastraUser(email, senha, nome, cargo, nivel)
    }

    return (
        <div className="conteiner">
            <div className='logoImgCadastro'>
                <img src={require('../../medias/logo.png')} />
            </div>
            <div className='areaLogin'>
                <h1>CADASTRO:</h1>
                <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <input type='text' placeholder='Cargo' value={cargo} onChange={(e) => setCargo(e.target.value)} /><br />
                <input type='text' placeholder='Nivel' value={nivel} onChange={(e) => setNivel(e.target.value)} /><br />
                <input type='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className='areaBotao'>
                <button onClick={Cadastrar}>Cadastrar-se</button>
            </div>
            <div className='areabtn'>
                <Link to={'/'}>Já tenho cadastro</Link>
            </div>

        </div>
    )
}

export default Cadastro