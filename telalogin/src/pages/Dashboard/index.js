import firebase from "firebase"
import { useState, useContext } from 'react'
import { AuthContext } from "../../contexts/auth"

function Dashboard() {

    const { auth, Deslogar } = useContext(AuthContext)

    const [nome, setNome] = useState(auth && auth.nome)
    const [email, setEmail] = useState(auth && auth.email)
    const [cargo, setCargo] = useState(auth && auth.cargo)
    const [nivel, setNivel] = useState(auth && auth.nivel)

    return (
        <div className='banner'>
            <div className="conteiner">
                <div className="dashboardContent">
                    <h1>
                        Bem-vindo! {nome}
                    </h1>
                    <span>Segue abaixo seus dados de cadastro:</span>
                    <div className="lista">
                        <ul>
                            <li>Cargo: {cargo}</li>
                            <li>Nivel: {nivel}</li>
                            <li>E-mail: {email}</li>
                        </ul>
                    </div>
                    <div className="areaBotao">
                        <button onClick={Deslogar}>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard