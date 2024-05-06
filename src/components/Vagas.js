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


const MeuCurriculo = () => {
    const navigate = useNavigate();

    const [vagas, setVagas] = useState("");

    useEffect(() => {
        const fetchVagas = async () => {
            //const usuarioId = localStorage.getItem("usuarioId");
            //if (usuarioId) {
            const response = await getVagas();
            //console.log(response.data.vagas);
            setVagas(response.content)
            //}
        };

        fetchVagas();
    }, []);

    const handleVerVaga = (vagaId) => {
        navigate("/vaga/" + vagaId);
    }

    const handleEditarcurriculo = () => {
        navigate("/editar-curriculo");
    }

    return (
        <div>
            <AppNavbar />
            <br/>
            <div className="">
                {vagas ?
                    <>
                        <div className="container">
                            <div className="card-deck">
                                {vagas.map((v, index) => {
                                    return <div key={index} className="my-clickable-card">
                                        <Card className="my-clickable-card" onClick={() => handleVerVaga(v.id)}>
                                            <Card.Header>{v.cargo} - Publicado em: {v.dataPublicacao}</Card.Header>
                                            <Card.Body>
                                                <span>Empresa: {v.nomeEmpresa}</span><br/>
                                                <span>Título: {v.titulo}</span><br/>
                                                <span>Salário: {v.salario}</span><br/>
                                                <span>Formato: {v.formatoDeTrabalho}</span><br/>
                                                <span>Experiência Requirida: {v.experienciaRequirida} anos</span><br/>
                                                <span>Formação Requirida: {v.formacaoRequirida}</span><br/>
                                                <span>Descrição: {v.descricao}</span><br/>
                                                <span>Empresa: {v.nomeEmpresa}</span><br/>
                                                <span>Cidade: {v.cidade}</span><br/>
                                                <span>Habilidade Requiridas: {v.habilidadesRequeridas}</span><br/>
                                            
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
                        <span>No momento não há vagas cadastradas</span>
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

export default MeuCurriculo;