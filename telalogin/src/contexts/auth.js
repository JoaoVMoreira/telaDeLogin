import { useState, createContext } from 'react'
import firebase from '../firebaseConnection'


export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [auth, setAuth] = useState(null)
    
    async function cadastraUser(email, senha, nome, cargo, nivel) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        nome: nome,
                        nivel: nivel,
                        cargo: cargo,
                        email: email
                    })
                    .then(() => {

                        let data = {
                            ui: uid,
                            nome: nome,
                            nivel: nivel,
                            cargo: cargo,
                            email: value.user.email
                        }

                        setAuth(data)
                        console.log(auth)
                        alert('Usuário cadastrado com sucesso')
                    }
                )
            })
            .catch((error) => {
                alert(error)
            })
    }


    async function Deslogar(){
        await firebase.auth().signOut()
        setAuth(null)
    }

    async function logarUser(email, senha) {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid

                const perfil = await firebase.firestore().collection('users')
                .doc(uid).get()

                let data = {
                    nome: perfil.data().nome,
                    cargo: perfil.data().cargo,
                    nivel: perfil.data().nivel,
                    email: perfil.data().email
                }

                setAuth(data)
            })
            .catch((error) => {
                alert(error)
            })
    }

    return(
        <AuthContext.Provider value={{ signed: !!auth, auth, cadastraUser, Deslogar, logarUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
