import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
//import { esqueciSenha } from '../api/usuario';
//import { getQuestaoByEmail } from '../api/questao';
import '../style/esqueci-senha.css'
import Footer from './Footer';
import AppNavbar from './Navbar';

const EsqueciSenha = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [questaoUsuarioResposta, setQuestaoUsuarioResposta] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [novaSenhaRepetida, setNovaSenhaRepetida] = useState('');
    const [questaoUsuario, setQuestaoUsuario] = useState('');
    const [info, setInfo] = useState('');

    const fetchQuestaoByEmail = async () => {

        // const request = {
        //     "email": email,
        // }

        // await getQuestaoByEmail(request).then(response => {
        //     if (response.status === 200) {
        //         setQuestaoUsuario(response.data.pergunta);
        //         setInfo('');
        //     } else {
        //         setQuestaoUsuario('');
        //         setInfo('Usuário não existe');
        //     }
        // }).catch(err => {
        //     setQuestaoUsuario('');
        //     setInfo('Usuário não existe');
        // });
    };

    const handleTrocarSenha = async (e) => {
        e.preventDefault();

        setInfo('');

        if (email === '' || novaSenha === '' || novaSenhaRepetida === '') {
            setInfo('Preencha todos os campos');
            return;
        }

        if (novaSenha !== novaSenhaRepetida) {
            setInfo('As senhas não coincidem')
            return;
        }

        const request = {
            "email": email,
            "questao_usuario_resposta": questaoUsuarioResposta,
            "nova_senha": novaSenha,
        };

        // await esqueciSenha(request).then(response => {
        //     console.log(response);
        //     if (response.status === 200) {
        //         alert('Senha alterada com sucesso');
        //         navigate('/');
        //     } else {
        //         setInfo('Erro: ' + response.data.detail);
        //     }
        // }).catch(err => {
        //     setInfo('Erro ao trocar a senha')
        // });
    };

    return (
        <div>
            <AppNavbar />
            <div className="esqueci-senha-container">
                <form className="esqueci-senha-form">
                    <div className="esqueci-senha-form-content">
                        <h3 className="esqueci-senha-form-title">Troque sua senha</h3>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                required
                                id="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={(e) => fetchQuestaoByEmail()}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Responda à questão: {questaoUsuario}</label>
                            <input
                                type="input"
                                className="form-control mt-1"
                                required
                                id="questao-usuario"
                                value={questaoUsuarioResposta}
                                onChange={(e) => setQuestaoUsuarioResposta(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nova Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                required
                                id="nova-senha"
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Repita a nova senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                required
                                id="nova-senha-repetida"
                                value={novaSenhaRepetida}
                                onChange={(e) => setNovaSenhaRepetida(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={handleTrocarSenha}>
                                Trocar Senha
                            </button>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            {info && (
                                <div className='alert'>{info}</div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>








    )
}

export default EsqueciSenha;