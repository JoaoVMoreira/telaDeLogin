import { Route, Routes, BrowserRouter } from "react-router-dom";
import RouteWrapper from "./Route";

import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Dashboard from "../pages/Dashboard"
import AuthProvider from "../contexts/auth";

export default function RoutesApp(){
    return(
        <AuthProvider>
            <BrowserRouter>
                
                <Routes>

                    <Route path="/" element={<RouteWrapper ComponenteLogado={<Dashboard/>} ComponenteInicial={<Login/>}/>}/>

                    <Route path="/cadastro" element={<RouteWrapper ComponenteLogado={<Dashboard />} ComponenteInicial={<Cadastro />}  />} />
                    
                    <Route path="/dashboard" element={<RouteWrapper ComponenteLogado={<Dashboard />} ComponenteInicial={<Login />} isPrivate />} />

                </Routes>

            </BrowserRouter>
        </AuthProvider>
    )
}