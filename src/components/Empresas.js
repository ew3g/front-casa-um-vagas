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
import Form from 'react-bootstrap/Form';


const Empresas = () => {
    const navigate = useNavigate();

    const [empresas, setEmpresas] = useState("");
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [sort, setSort] = useState("dataPublicacao");
    const [maxResults, setMaxResults] = useState(10);

    const fetchEmpresas = async(pg, max, srt) => {
        console.log(pg, max, srt);

        const response = await getEmpresas(pg, max, srt);

        if (response) {
            setEmpresas(response.data.content);

            const totalElementos = response.data.totalElements;

            var numeroPaginas = Math.floor(totalElementos / maxResults);

            if (totalElementos % 10 > 0) {
                numeroPaginas++;
            }
            console.log("npg", numeroPaginas);
            setTotalPaginas(numeroPaginas);
        }
    };
    useEffect(() => {
        fetchEmpresas(pagina, maxResults, sort);
    }, []);

    const handleNovaEmpresa = () => {
        navigate("/empresa");
    };

    const handleSortChange = (e) => {
        console.log("rodou", e.target.value);
        setSort(e.target.value);
        fetchEmpresas(pagina, maxResults, e.target.value);
    }

    const handlePaginaChange = (e) => {
        console.log("rodou", e.target.value);
        setPagina(e.target.value);
        fetchEmpresas(e.target.value, maxResults, sort);
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
                                <option value="razaoSocial">Razão Social</option>
                                <option value="nomeFantasia">Nome Fantasia</option>
                                <option value="areaDeAtuacao">Área de Atuação</option>
                                <option value="contato.email">Email</option>
                                <option value="contato.site">Site</option>
                                <option value="endereco.cep">CEP</option>
                                <option value="endereco.cidade">Cidade</option>
                                <option value="endereco.uf">UF</option>
                            </Form.Select>
                        </label>
                    </menu>
                </div>
            </div>
            
            <br/>
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
                                        <Card className="my-clickable-card" onClick={() => handleNovaEmpresa(e.id)}>
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
                                                <option key={i} value={i}>{i+1}</option>
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

export default Empresas;