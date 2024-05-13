import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import '../style/meu-curriculo.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { getCurriculos, deleteCurriculo } from "../api/curriculos";
import '../style/vagas.css';


const Curriculos = () => {
    const navigate = useNavigate();

    const [curriculos, setCurriculos] = useState("");
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [sort, setSort] = useState("dadosPessoais.nome");
    const maxResults = 10;

    const fetchCurriculos = async (pg, max, srt) => {
        console.log(pg, max, srt);
        //const usuarioId = localStorage.getItem("usuarioId");
        //if (usuarioId) {
        //console.log(maxResults);
        const response = await getCurriculos(pg, max, srt);
        //console.log(filtros);
        //console.log(response.data.vagas);
        if (response) {
            setCurriculos(response.data.content);
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
        fetchCurriculos(pagina, maxResults, sort);
    }, []);

    const handleEditarCurriculo = (id) => {
        navigate(`/curriculo/${id}`);
    };

    const handleExcluirCurriculo = async (id) => {
        if (!window.confirm("Deseja excluir o registro?")) {
            return;
        }
        
        //e.preventDefault();

        await deleteCurriculo(id).then(response => {
            if (response) {
                //console.log(response);
                if (response.status === 204) {
                    window.alert('Currículo removido com sucesso');
                    navigate('/curriculos');
                    window.location.reload();
                } else {
                    window.alert("Erro ao excluir currículo: " + response.data.detail);
                }

            } else {
                window.alert("Erro ao excluir currículo");
            }
        }).catch(err => {
            window.alert(err);
        });
    };
    

    const handleNovoCurriculo = () => {
        navigate("/curriculo");
    };

    const handleSortChange = (e) => {
        console.log("rodou", e.target.value);
        setSort(e.target.value);
        fetchCurriculos(pagina, maxResults, e.target.value);
    }

    const handlePaginaChange = (e) => {
        console.log("rodou", e.target.value);
        setPagina(e.target.value);
        fetchCurriculos(e.target.value, maxResults, sort);
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
                                <option value="dadosPessoais.nome">Nome</option>
                                <option value="dadosPessoais.dataNascimento">Data de Nascimento</option>
                                <option value="endereco.cidade">Cidade</option>
                                <option value="endereco.uf">UF</option>
                            </Form.Select>
                        </label>
                    </menu>
                    <button type="submit" className="btn btn-primary" onClick={handleNovoCurriculo}>
                        Novo Currículo
                    </button>
                </div>
            </div>

            <br />
            <div className="">
                {curriculos ?
                    <>
                        <div className="container">
                            <div className="card-deck">
                                {curriculos.map((c, index) => {
                                    return <div key={index}>
                                        <Card>
                                            <Card.Header>{c.nome} {c.sobrenome}</Card.Header>
                                            <Card.Body>
                                                <span>Gênero: {c.genero}</span><br />
                                                <span>Data de Nascimento: {c.dataNascimento}</span><br />
                                                <span>Nacionalidade: {c.nacionalidade}</span><br />
                                                <span>Telefone: {c.contato.telefone}</span><br />
                                                <span>Celular: {c.contato.celular}</span><br />
                                                <span>Email: {c.contato.email}</span><br />
                                                <span>Cidade: {c.endereco.cidade}</span><br />
                                                <span>UF: {c.endereco.uf}</span><br />

                                                <div className="d-grid gap-2 mt-3">
                                                    <button type="button" className="btn btn-primary" onClick={() => handleEditarCurriculo(c.id)}>
                                                        Editar
                                                    </button>
                                                </div>

                                                <div className="d-grid gap-2 mt-3">
                                                    <button type="button" className="btn btn-danger" onClick={() => handleExcluirCurriculo(c.id)}>
                                                        Excluir
                                                    </button>
                                                </div>

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
                            <span>No momento não há currículos cadastraos</span>
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

export default Curriculos;