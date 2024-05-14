import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from '../api/auth'
import logo from '../img/logo.png'
import '../style/login.css'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import AppNavbar from './Navbar';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false)

    const asyncLocalStorage = {
        setItem: async function (key, value) {
            await null
            return localStorage.setItem(key, value)
        },
        getItem: async function (key) {
            await null
            return localStorage.getItem(key)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await auth(email, password);
        console.log(response);
        if (response && response.data && response.data.token) {
            setLoginError(false)
            asyncLocalStorage.setItem('token', response.data.token).then(data => {
                asyncLocalStorage.setItem('usuarioId', response.data.usuarioId).then(data => {
                    asyncLocalStorage.setItem('email', response.data.email).then(data => {
                        asyncLocalStorage.setItem('tipoUsuario', response.data.tipoUsuario).then(data => {
                            navigate("/home");
                        });
                    })
                })
            })
        } else {
            console.log('falhou');
            setLoginError(true);
        }
    }

    return (
        <div>
            {/* <AppNavbar /> */}
            <div className="login-container">
                <form className="login-form">
                    <div className="login-form-content">
                        <h3 className="login-form-title">Casa 1 Vagas</h3>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                                Entrar
                            </button>
                        </div>
                        {/* <div className="d-grid gap-2 mt-3">
                            <a className='btn btn-primary' href='/novo-usuario'>Novo Usuário</a>
                        </div> */}
                        {/* <p className="forgot-password text-right mt-2">
                            <a href="/esqueci-senha">Esqueceu a sua senha?</a>
                        </p> */}
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;