import { useState, createContext, useEffect } from 'react'
import firebase from '../firebaseConnection'


export const AuthContext = createContext({}) //Criando contexto

function AuthProvider({ children }){ //Criando contexto provedor
    const [auth, setAuth] = useState(null) //State Auth {utilizada para armazenar os dados e realizar a autenticação}

    useEffect(()=>{ //Use effect do local storage para que os dados sejam armazenados no momento que a página é aberta

        function loadStorage() {
            const storageUser = localStorage.getItem('sistemaUser')

            if (storageUser) {
                setAuth(JSON.parse(storageUser))
            }   
        }
        loadStorage()
    }, [])

    
    
    async function cadastraUser(email, senha, nome, cargo, nivel) { //Função de cadastro de usuário
        await firebase.auth().createUserWithEmailAndPassword(email, senha) //Cadastro de usuário a partir do e-mail e senha
            .then(async (value) => {
                let uid = value.user.uid

                await firebase.firestore().collection('users') //Salvando dados informados no banco de dados do firebase
                    .doc(uid).set({
                        nome: nome,
                        nivel: nivel,
                        cargo: cargo,
                        email: email
                    })
                    .then(() => {

                        let data = { //Criando lista "data" onde serão passados os dados para a variavel Auth
                            ui: uid,
                            nome: nome,
                            nivel: nivel,
                            cargo: cargo,
                            email: value.user.email
                        }

                        setAuth(data)//informando os dados em Auth
                        storageUser(data)//Informando os dados em local storage
                        console.log(auth)
                    }
                )
            })
            .catch((error) => {
                alert(error) //Em caso de erro o erro é apresentado
            })
    }


    async function Deslogar(){ //Função para deslogar o usuário
        await firebase.auth().signOut()
        setAuth(null) //Zerando o Auth para que não tenha mais acesso ao Dashboard
    }

    async function logarUser(email, senha) { //Função de login
        await firebase.auth().signInWithEmailAndPassword(email, senha) //Realizando o login a partir do e-mail e da senha
            .then(async (value) => {
                let uid = value.user.uid

                const perfil = await firebase.firestore().collection('users') //Capturando dados do usuário logado no firebase
                .doc(uid).get()

                let data = {
                    nome: perfil.data().nome,
                    cargo: perfil.data().cargo,
                    nivel: perfil.data().nivel,
                    email: perfil.data().email
                }

                setAuth(data) //Passando dados do usuário logado para auth
                storageUser(data)//Passando dados do usuário logado para local storage
            })
            .catch((error) => {
                alert(error)
            })
    }

    function storageUser(data){ //Função para informar itendo no local storage
        localStorage.setItem('sistemaUser', JSON.stringify(data))
    }

    return(//Provedor de contexto com {children}
        <AuthContext.Provider value={{ signed: !!auth, auth, cadastraUser, Deslogar, logarUser }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
