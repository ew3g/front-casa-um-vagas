import { React, useState, useEffect } from 'react'
//import { createUsuario } from '../api/usuario';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/novo-usuario.css';
//import { getQuestoes } from '../api/questao';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import AppNavbar from './Navbar';



const NovoUsuario = () => {
    const navigate = useNavigate();
    //const [nomeUsuario, setNomeUsuario] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepetida, setSenhaRepetida] = useState('');
    //const [questoes, setQuestoes] = useState([]);
    //const [questaoSelecionada, setQuestaoSelecionada] = useState('');
    //const [resposta, setResposta] = useState('');
    const [info, setInfo] = useState('');

    useEffect(() => {
        const fetchQuestoes = async () => {
            // const data = await getQuestoes();
            // setQuestoes(data);
        };
        //fetchQuestoes();
    }, []);

    const handleSelectTipoUsuarioChange = (e) => {
        setTipoUsuario(e.target.value);
    };

    const handleCriarUsuario = async (e) => {
        e.preventDefault();

        if (email === '' || senha === '' || senhaRepetida === '') {
            setInfo('Por favor, preencha todos os campos');
            return;
        }

        if (senha !== senhaRepetida) {
            setInfo('As senhas não conferem');
            return;
        }

        const request = {
            "email": email,
            "senha": senha,
        };

        // await createUsuario(request).then(response => {
        //     if (response) {
        //         if (response.status === 201) {
        //             setInfo('');
        //             alert('Usuário criado com sucesso');
        //             navigate('/');
        //         } else if (response.status === 409) {
        //             setInfo("Usuário já existe");
        //         } else {
        //             setInfo("Erro ao criar usuário: " + response.data.detail);
        //         }

        //     } else {
        //         setInfo("Erro ao criar usuário");
        //     }
        // }).catch(err => {
        //     setInfo(err);
        // });
    };

    return (



        <div>
            <AppNavbar />
            <div className="novo-usuario-container">
                <form className="novo-usuario-form">
                    <div className="novo-usuario-form-content">
                        <h3 className="novo-usuario-form-title">Cadastro Usuário</h3>
                        <div className="form-group mt-3">
                            <label>Tipo Usuário</label>
                            <Form.Select
                                type="select"
                                className="form-control mt-1"
                                placeholder="Digite seu email"
                                value={tipoUsuario}
                                onChange={handleSelectTipoUsuarioChange}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="pessoa-fisica">Pessoa Física</option>
                                <option value="pessoa-juridica">Pessoa Jurídica</option>
                            </Form.Select>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Repita a senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Repita a senha"
                                value={senhaRepetida}
                                onChange={(e) => setSenhaRepetida(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={handleCriarUsuario}>
                                Criar usuário
                            </button>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <a className='btn btn-primary' href='/novo-usuario'>Novo Usuário</a>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            <a href="/esqueci-senha">Esqueceu a sua senha?</a>
                        </p>
                    </div>
                    <div className='row'>
                        {info && (
                            <div className='alert'>{info}</div>
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </div>



    )
}

export default NovoUsuario;