import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import { getCurriculoByUsuarioId } from "../api/curriculo";
import '../style/meu-curriculo.css';


const MeuCurriculo = () => {
    const navigate = useNavigate();

    const [curriculo, setCurriculo] = useState([]);

    useEffect(() => {
        const fetchCurriculo = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            if (usuarioId) {
                const response = await getCurriculoByUsuarioId(usuarioId);
                setCurriculo(response.data)
            }
        };

        fetchCurriculo();
    }, []);

    const handleAdicionarCurriculo = () => {
        navigate("/novo-curriculo");
    }

    return (
        <div>
            <AppNavbar />
            <div className="meu-curriculo-container">
                <form className="meu-curriculo-form">
                    <div className="meu-curriculo-form-content">
                        <h3 className="meu-curriculo-form-title">Meu Currículo</h3>
                        {curriculo ? 
                            <>
                                <div>
                                    <h4 className="">Dados Pessoais</h4>
                                    <div className="form-group mt-3">
                                        <label>Nome</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.nome}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Sobrenome</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.sobrenome}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>CPF</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.cpf}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Data de nascimento</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.dataNascimento}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Gênero</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.genero}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Nacionalidade</label>
                                        <input
                                            type="text"
                                            className="form-control mt-1"
                                            value={curriculo.dadosPessoais.nacionalidade}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </>  
                            : 
                            <>
                                <div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary" onClick={handleAdicionarCurriculo}>
                                        Adicionar currículo
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default MeuCurriculo;