import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import { getCurriculoByUsuarioId } from "../api/curriculo";
import '../style/meu-curriculo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { getVagas } from "../api/vagas";
import '../style/vagas.css';
import { getEmpresas } from "../api/empresa";
import NovaEmpresa from "./NovaEmpresa";


const Empresas = () => {
    const navigate = useNavigate();

    const [empresas, setEmpresas] = useState("");
    const [totalElementos, setTotalElementos] = useState("");//CONTINUAR DAQUI

    useEffect(() => {
        const fetchEmpresas = async () => {
            //const usuarioId = localStorage.getItem("usuarioId");
            //if (usuarioId) {
            const response = await getEmpresas();
            console.log(response.data.content);
            if (response) {
                setEmpresas(response.data.content);
            }

            //}
        };

        fetchEmpresas();
    }, []);

    const handleVerVaga = (vagaId) => {
        navigate("/vaga/" + vagaId);
    }

    const handleEditarcurriculo = () => {
        navigate("/editar-curriculo");
    }

    const handleNovaEmpresa = () => {
        navigate("/empresa");
    }

    return (
        <div>
            <AppNavbar />
            <div className="container">
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" onClick={handleNovaEmpresa}>
                        Nova Empresa
                    </button>
                </div>
            </div>
            
            <br/>
            <div className="">
                {empresas ?
                    <>
                        <div className="container">
                            <div className="card-deck">
                                {empresas.map((e, index) => {
                                    return <div key={index} className="my-clickable-card">
                                        <Card className="my-clickable-card" onClick={() => handleVerVaga(e.id)}>
                                            <Card.Header>{e.nomeFantasia}</Card.Header>
                                            <Card.Body>
                                                <span>Razão Social: {e.razaoSocial}</span><br/>
                                                <span>Celular: {e.contato.celular}</span><br/>
                                                <span>Telefone: {e.contato.telefone}</span><br/>
                                                <span>Email: {e.contato.email}</span><br/>
                                                <span>Site: {e.contato.site}</span><br/>
                                                <span>Endereço: {e.endereco.logradouro}, {e.endereco.numero}, {e.endereco.bairro}, complemento: {e.endereco.complemento},  {e.endereco.cidade} - {e.endereco.uf}, CEP: {e.endereco.cep}</span><br/>
                                                <span>Área de Atuação: {e.areaDeAtuacao}</span>
                                                {/* <span>Título: {v.titulo}</span><br/>
                                                <span>Salário: {v.salario}</span><br/>
                                                <span>Formato: {v.formatoDeTrabalho}</span><br/>
                                                <span>Experiência Requirida: {v.experienciaRequirida} anos</span><br/>
                                                <span>Formação Requirida: {v.formacaoRequirida}</span><br/>
                                                <span>Descrição: {v.descricao}</span><br/>
                                                <span>Empresa: {v.nomeEmpresa}</span><br/>
                                                <span>Cidade: {v.cidade}</span><br/>
                                                <span>Habilidade Requiridas: {v.habilidadesRequeridas}</span><br/> */}
                                            
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </div>
                                })}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="container">
                            <span>No momento não há empresas cadastradas</span>
                        </div>
                        {/* {vagas.map((v, index) => (
                            <div key={index}>
                                <Card onClick={handleVerVaga(v.id)}>
                                    <Card.Header>v.cargo</Card.Header>
                                    <Card.Body>
                                        <span>Empresa: {v.empresa}</span><br/>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))} */}
                    </>
                }
            </div>
            <Footer />
            <br />
            <br />
        </div>
    );
};

export default Empresas;