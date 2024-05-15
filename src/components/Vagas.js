import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import '../style/meu-curriculo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { getVagas, deleteVaga } from "../api/vagas";
import '../style/vagas.css';


const Vagas = () => {
    const navigate = useNavigate();

    const [vagas, setVagas] = useState("");
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [sort, setSort] = useState("dataPublicacao");
    const maxResults = 10;

    const getTags = (text) => {
        const array = text.split(",");
        // .map(function(item) {
        //     return item.trim();
        // });

        console.log(array);

        return array;
    };

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

    const handleEditarVaga = (id) => {
        navigate(`/vaga/${id}`);
    };

    const handleExcluirVaga = async (id) => {
        if (!window.confirm("Deseja excluir o registro?")) {
            return;
        }
        
        //e.preventDefault();

        await deleteVaga(id).then(response => {
            if (response) {
                //console.log(response);
                if (response.status === 204) {
                    window.alert('Vaga removida com sucesso');
                    navigate('/vagas');
                    window.location.reload();
                } else {
                    window.alert("Erro ao excluir vaga: " + response.data.detail);
                }

            } else {
                window.alert("Erro ao excluir vaga");
            }
        }).catch(err => {
            window.alert(err);
        });
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
                                    return <div key={index}>
                                        <Card>
                                            <Card.Header>
                                                {v.cargo} - Publicado em: {v.dataPublicacao}
                                                <div id="right">
                                                    <div id="edit-item" className="my-clickable">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" onClick={() => handleEditarVaga(v.id)}>
                                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                                            </svg>
                                                    </div>
                                                    <div id="delete-item" className="my-clickable">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16" onClick={() => handleExcluirVaga(v.id)}>
                                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Card.Header>
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
                                                {/* <span>Habilidade Requiridas: {v.habilidadesRequeridas}</span><br /> */}

                                                {getTags(v.habilidadesRequeridas).map((h, idx) => {
                                                    console.log(v.habilidadesRequeridas)
                                                    var i = `id${idx}`;
                                                    return <span key={i} className="badge bg-secondary">&nbsp;{h}</span>
                                                    
                                                })}
                                                
                                                {/* <div className="d-grid gap-2 mt-3">
                                                    <button type="button" className="btn btn-primary" onClick={() => handleEditarVaga(v.id)}>
                                                        Editar
                                                    </button>
                                                </div>

                                                <div className="d-grid gap-2 mt-3">
                                                    <button type="button" className="btn btn-danger" onClick={() => handleExcluirVaga(v.id)}>
                                                        Excluir
                                                    </button>
                                                </div> */}

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