import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import { getCurriculoByUsuarioId } from "../api/curriculo";
import '../style/meu-curriculo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { getVagas } from "../api/vagas";
import '../style/vagas.css';


const Vagas = () => {
    const navigate = useNavigate();

    const [vagas, setVagas] = useState("");
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [sort, setSort] = useState("dataPublicacao");
    const maxResults = 10;

    const fetchVagas = async (pg, max, srt) => {
        console.log(pg, max, srt);
        //const usuarioId = localStorage.getItem("usuarioId");
        //if (usuarioId) {
        //console.log(maxResults);
        const response = await getVagas(pg, max, srt);
        //console.log(filtros);
        //console.log(response.data.vagas);
        if (response) {
            setVagas(response.data.content);
            //setTotalElementos(response.data.totalElements);

            //console.log(response.data.totalElements, total);
            const totalElementos = response.data.totalElements;

            var numeroPaginas = Math.floor(totalElementos / maxResults);
            if (totalElementos % maxResults > 0) {
                numeroPaginas++;
            }
            console.log("npg", numeroPaginas)
            setTotalPaginas(numeroPaginas);
            //totalPaginas = numeroPaginas;
            //console.log(numeroPaginas)
        };

        //}
    };

    useEffect(() => {
        fetchVagas(pagina, maxResults, sort);
    }, []);

    const handleVerVaga = (vagaId) => {
        navigate("/vaga/" + vagaId);
    };

    const handleEditarcurriculo = () => {
        navigate("/editar-curriculo");
    };

    const handleNovaVaga = () => {
        navigate("/vaga");
    };

    const handleSortChange = (e) => {
        console.log("rodou", e.target.value);
        setSort(e.target.value);
        fetchVagas(pagina, maxResults, e.target.value);
    }

    const handlePaginaChange = (e) => {
        console.log("rodou", e.target.value);
        setPagina(e.target.value);
        fetchVagas(e.target.value, maxResults, sort);
    }

    return (
        <div>
            <AppNavbar />
            <div className="container">
                <div className="d-grid gap-2 mt-3">
                    <menu>
                        <label>
                            Ordenar por
                            <Form.Select
                                name="sort"
                                id="sort"
                                type="select"
                                className="form-control-mt-1"
                                value={sort}
                                onChange={e => handleSortChange(e)}>
                                <option value="dataPublicacao">Data Publicação</option>
                                <option value="titulo">Título</option>
                                <option value="cargo">Cargo</option>
                                <option value="formatoDeTrabalho">Formato de Trabalho</option>
                                <option value="cidade">Cidade</option>
                                <option value="formacaoRequerida">Formação Requerida</option>
                                <option value="experienciaRequerida">Experiência Requerida</option>
                                <option value="salario">Salário</option>
                            </Form.Select>
                        </label>
                    </menu>
                    <button type="submit" className="btn btn-primary" onClick={handleNovaVaga}>
                        Nova vaga
                    </button>
                </div>
            </div>

            <br />
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
                                                <span>Empresa: {v.nomeEmpresa}</span><br />
                                                <span>Título: {v.titulo}</span><br />
                                                <span>Salário: {v.salario}</span><br />
                                                <span>Formato: {v.formatoDeTrabalho}</span><br />
                                                <span>Experiência Requirida: {v.experienciaRequirida} anos</span><br />
                                                <span>Formação Requirida: {v.formacaoRequirida}</span><br />
                                                <span>Descrição: {v.descricao}</span><br />
                                                <span>Empresa: {v.nomeEmpresa}</span><br />
                                                <span>Cidade: {v.cidade}</span><br />
                                                <span>Habilidade Requiridas: {v.habilidadesRequeridas}</span><br />

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
                            <span>No momento não há vagas cadastradas</span>
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
            <div className="container">
                <div className="d-grid gap-2 mt-3">
                    <menu>
                        <label>
                            Página
                            <Form.Select
                                name="page"
                                id="page"
                                type="select"
                                className="form-control-mt-1"
                                value={pagina}
                                onChange={e => handlePaginaChange(e)}
                            >
                                {
                                    <>
                                        {
                                            Array.from(Array(totalPaginas)).map((s, i) => (
                                                <option key={i} value={i}>{i + 1}</option>
                                            ))

                                        }
                                    </>
                                }
                            </Form.Select>
                        </label>
                        {/* <label>
                            Máximo resultados por página
                            <Form.Select 
                                name="maxResults" 
                                id="maxResults"
                                type="select"
                                className="form-control-mt-1"
                                value={maxResults}
                                onChange={e => handleMaxResults(e)}
                                >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </Form.Select>
                        </label> */}
                    </menu>
                </div>
            </div>
            <Footer />
            <br />
            <br />
        </div>
    );
};

export default Vagas;