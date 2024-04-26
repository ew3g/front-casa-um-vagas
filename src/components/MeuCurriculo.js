import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import { getCurriculoByUsuarioId } from "../api/curriculo";
import '../style/meu-curriculo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const MeuCurriculo = () => {
    const navigate = useNavigate();

    const [curriculo, setCurriculo] = useState("");

    useEffect(() => {
        const fetchCurriculo = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            if (usuarioId) {
                const response = await getCurriculoByUsuarioId(usuarioId);
                console.log(response.data);
                setCurriculo(response.data)
            }
        };

        fetchCurriculo();
    }, []);

    const handleAdicionarCurriculo = () => {
        navigate("/novo-curriculo");
    }

    const handleEditarcurriculo = () => {
        navigate("/editar-curriculo");
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
                                    <h4>Dados Pessoais</h4>
                                    <Card>
                                        <Card.Body>
                                            <span>Nome: {curriculo.dadosPessoais.nome}</span><br/>
                                            <span>Sobrenome: {curriculo.dadosPessoais.sobrenome}</span><br/>
                                            <span>CPF: {curriculo.dadosPessoais.cpf}</span><br/>
                                            <span>Data de nascimento: {curriculo.dadosPessoais.dataNascimento}</span><br/>
                                            <span>Gênero: {curriculo.dadosPessoais.genero}</span><br/>
                                            <span>Nacionalidade: {curriculo.dadosPessoais.nacionalidade}</span><br/>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <h4>Contato</h4>
                                    <Card>
                                        <Card.Body>
                                            <span>Telefone: {curriculo.contato.telefone}</span><br/>
                                            <span>Celular: {curriculo.contato.celular}</span><br/>
                                            <span>Email: {curriculo.contato.email}</span><br/>
                                            <span>Site: {curriculo.contato.site}</span><br/>                                            
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <h4>Endereço</h4>
                                    <Card>
                                        <Card.Body>
                                            <span>CEP: {curriculo.endereco.cep}</span><br/>
                                            <span>Logradouro: {curriculo.endereco.logradouro}</span><br/>
                                            <span>Número: {curriculo.endereco.numero}</span><br/>
                                            <span>Complemento: {curriculo.endereco.complemento}</span><br/>
                                            <span>Bairro: {curriculo.endereco.bairro}</span><br/>
                                            <span>Cidade: {curriculo.endereco.cidade}</span><br/>
                                            <span>UF: {curriculo.endereco.uf}</span><br/>                                     
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <h4>Formação</h4>
                                    <Card>
                                        <Card.Body>
                                            <span>Curso: {curriculo.formacao.curso}</span><br/>
                                            <span>Nível: {curriculo.formacao.curso}</span><br/>
                                            <span>Instituição: {curriculo.formacao.curso}</span><br/>
                                            <span>Data de início: {curriculo.formacao.curso}</span><br/>
                                            <span>Data de conclusão: {curriculo.formacao.curso}</span><br/>                                     
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <h4>Dados Profissionais</h4>
                                    <Accordion>                      
                                    {
                                        curriculo.dadosProfissionais.map((d, index) => (
                                            <div key={index}>
                                                <Card>
                                                    <Card.Body>
                                                        <span>Empresa: {d.empresa}</span><br/>
                                                        <span>Cargo: {d.cargo}</span><br/>
                                                        <span>Data de início: {d.dataInicio}</span><br/>
                                                        <span>Data fim: {d.dataFim}</span><br/>
                                                    </Card.Body>
                                                </Card>
                                                <br/>
                                                {/* <Accordion.Item>
                                                    <Accordion.Header>Experiência Profissional {index + 1}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <label>Empresa: {d.empresa}</label>
                                                    </Accordion.Body>
                                                </Accordion.Item> */}
                                            </div>

                                            // <div key={index}>
                                            //     <div className="form-group mt-4">
                                            //         <label>Empresa</label>
                                            //         <input
                                            //             type="text"
                                            //             className="form-control mt-1"
                                            //             value={d.empresa}
                                            //             disabled
                                            //         />
                                            //     </div>
                                            //     <div className="form-group mt-3">
                                            //         <label>Cargo</label>
                                            //         <input
                                            //             type="text"
                                            //             className="form-control mt-1"
                                            //             value={d.cargo}
                                            //             disabled
                                            //         />
                                            //     </div>
                                            //     <div className="form-group mt-3">
                                            //         <label>Data de início</label>
                                            //         <input
                                            //             type="text"
                                            //             className="form-control mt-1"
                                            //             value={d.dataInicio}
                                            //             disabled
                                            //         />
                                            //     </div>
                                            //     <div className="form-group mt-3">
                                            //         <label>Data Fim</label>
                                            //         <input
                                            //             type="text"
                                            //             className="form-control mt-1"
                                            //             value={d.dataFim}
                                            //             disabled
                                            //         />
                                            //     </div>
                                            // </div>  
                                        ))
                                    }
                                    </Accordion>
                                    <div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary" onClick={handleAdicionarCurriculo}>
                                        Editar currículo
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </>  
                            : 
                            <>
                                <div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="submit" className="btn btn-primary" onClick={handleEditarcurriculo}>
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
            <br/>
            <br/>
        </div>
    );
};

export default MeuCurriculo;