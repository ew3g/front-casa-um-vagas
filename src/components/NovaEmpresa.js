import { React, useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import AppNavbar from './Navbar';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import '../style/nova-empresa.css';
import { getEmpresa, postEmpresa, putEmpresa } from '../api/empresa';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';

const NovaEmpresa = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState('');
    const { id } = useParams();
    //const [ empresaExistente, setEmpresaExistente] = useState('');
    const [formData, setFormData] = useState({
        empresa: {
            id: "",
            cnpj: "",
            razaoSocial: "",
            nomeFantasia: "",
            areaDeAtuacao: ""
        },
        contato: {
            telefone: "",
            celular: "",
            email: "",
            site: ""
        },
        endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf: ""
        }
    });

    useEffect(() => {
        const fetchEmpresa = async (id) => {    
            const response = await getEmpresa(id);
    
            if (response) {
                console.log(response.data);
                var empresaExistente = response.data;
                //formData.empresa.cnpj = empresaExistente.cnpj;
                change(empresaExistente.id, "empresa", "id")
                change(empresaExistente.cnpj, "empresa", "cnpj");
                change(empresaExistente.razaoSocial, "empresa", "razaoSocial");
                change(empresaExistente.nomeFantasia, "empresa", "nomeFantasia");
                change(empresaExistente.areaDeAtuacao, "empresa", "areaDeAtuacao");
                change(empresaExistente.contato.telefone, "contato", "telefone");
                change(empresaExistente.contato.celular, "contato", "celular");
                change(empresaExistente.contato.email, "contato", "email");
                change(empresaExistente.contato.site, "contato", "site");
                change(empresaExistente.endereco.cep, "endereco", "cep");
                change(empresaExistente.endereco.logradouro, "endereco", "logradouro");
                change(empresaExistente.endereco.numero, "endereco", "numero");
                change(empresaExistente.endereco.complemento, "endereco", "complemento");
                change(empresaExistente.endereco.bairro, "endereco", "bairro");
                change(empresaExistente.endereco.cidade, "endereco", "cidade");
                change(empresaExistente.endereco.uf, "endereco", "uf");
                //console.log(formData);
                //window.location.reload();
                // setEmpresas(response.data.content);
    
                // const totalElementos = response.data.totalElements;
    
                // var numeroPaginas = Math.floor(totalElementos / maxResults);
    
                // if (totalElementos % maxResults > 0) {
                //     numeroPaginas++;
                // }
                // console.log("npg", numeroPaginas);
                // setTotalPaginas(numeroPaginas);
            }
        };

        if (id) {
            fetchEmpresa(id);
        }

    }, []);

    const handleChange = (e, section, field) => {
        console.log(e.target);
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    const change = (value, section, field) => {
        //console.log(e.target);
        //const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    const handleCriarEmpresa = async (e) => {
        e.preventDefault();

        if (formData.empresa.cnpj === "") {
            setInfo('Por favor, preencha o cnpj.');
            return;
        } else if (formData.empresa.razaoSocial === "") {
            setInfo('Por favor, preencha a razão social.');
            return;
        } else if (formData.empresa.nomeFantasia === "") {
            setInfo('Por favor, preencha o nome fantasia.');
            return;
        } else if (formData.empresa.areaDeAtuacao === "") {
            setInfo('Por favor, selecione a área de atuação.');
            return;
        } else if (formData.contato.telefone === "") {
            setInfo('Por favor, preencha o telefone.');
            return;
        } else if (formData.contato.celular === "") {
            setInfo('Por favor, preencha o celular.');
            return;
        } else if (formData.contato.email === "") {
            setInfo('Por favor, preencha o email.');
            return;
        } else if (formData.contato.site === "") {
            setInfo('Por favor, preencha o site.');
            return;
        } else if (formData.endereco.cep === "") {
            setInfo('Por favor, preencha o cep.');
            return;
        } else if (formData.endereco.logradouro === "") {
            setInfo('Por favor, preencha o logradouro.');
            return;
        } else if (formData.endereco.numero === "") {
            setInfo('Por favor, preencha o número.');
            return;
        } else if (formData.endereco.complemento === "") {
            setInfo('Por favor, preencha o complemento.');
            return;
        } else if (formData.endereco.bairro === "") {
            setInfo('Por favor, preencha o bairro.');
            return;
        } else if (formData.endereco.cidade === "") {
            setInfo('Por favor, preencha a cidade.');
            return;
        } else if (formData.endereco.uf === "") {
            setInfo('Por favor, preencha a uf.');
            return;
        }

        //console.log("click");
        //console.log(formData);
        //const response = await postEmpresa(formData);
        //console.log(response);

        // if (email === '' || senha === '' || senhaRepetida === '') {
        //     setInfo('Por favor, preencha todos os campos');
        //     return;
        // }

        // if (senha !== senhaRepetida) {
        //     setInfo('As senhas não conferem');
        //     return;
        // }

        // const request = {
        //     "email": email,
        //     "senha": senha,
        // };

        if (id) {
            const formDataPut = {
                    id: id,
                    cnpj: formData.empresa.cnpj,
                    razaoSocial: formData.empresa.razaoSocial,
                    nomeFantasia: formData.empresa.nomeFantasia,
                    areaDeAtuacao: formData.empresa.areaDeAtuacao,
                    telefone: formData.contato.telefone,
                    celular: formData.contato.celular,
                    email: formData.contato.email,
                    site: formData.contato.site,
                    cep: formData.endereco.cep,
                    logradouro: formData.endereco.logradouro,
                    numero: formData.endereco.numero,
                    complemento: formData.endereco.complemento,
                    bairro: formData.endereco.bairro,
                    cidade: formData.endereco.cidade,
                    uf: formData.endereco.uf,
            }


            await putEmpresa(formDataPut).then(response => {
                if (response) {
                    console.log(response);
                    if (response.status === 200) {
                        setInfo('');
                        alert('Empresa atualizada com sucesso');
                        navigate('/empresas');
                    } else if (response.status === 409) {
                        setInfo("Empresa já existe");
                    } else {
                        setInfo("Erro ao atualizar empresa: " + response.data.detail);
                    }
    
                } else {
                    setInfo("Erro ao atualizar empresa");
                }
            }).catch(err => {
                setInfo(err);
            });
            //console.log(formDataPut)
        } else {
            await postEmpresa(formData).then(response => {
                if (response) {
                    console.log(response);
                    if (response.status === 201) {
                        setInfo('');
                        alert('Empresa criada com sucesso');
                        navigate('/empresas');
                    } else if (response.status === 409) {
                        setInfo("Empresa já existe");
                    } else {
                        setInfo("Erro ao criar empresa: " + response.data.detail);
                    }
    
                } else {
                    setInfo("Erro ao criar empresa");
                }
            }).catch(err => {
                setInfo(err);
            });
        }
    };

    return (
        <div>
            <AppNavbar />
            <div className="nova-empresa-container">
                <form className='nova-empresa-form'>
                    <div className='nova-empresa-form-content'>
                        {id ? 
                            <>
                                <h3 className='nova-empresa-form-title'>Editar empresa</h3>
                            </> 
                            : 
                            <>
                                <h3 className='nova-empresa-form-title'>Nova empresa</h3>
                            </>}
                        <h4>Dados Empresa</h4>
                        <div className='form-group mt-3'>
                            <label>CNPJ</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="CNPJ"
                                value={formData.empresa.cnpj}
                                onChange={e => handleChange(e, "empresa", "cnpj")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Razão Social</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Razão Social"
                                value={formData.empresa.razaoSocial}
                                onChange={e => handleChange(e, "empresa", "razaoSocial")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Nome Fantasia</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nome Fantasia"
                                value={formData.empresa.nomeFantasia}
                                onChange={e => handleChange(e, "empresa", "nomeFantasia")}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Área de Atuação</label>
                            <Form.Select
                                type="select"
                                className="form-control mt-1"
                                placeholder="Área de Atuação"
                                value={formData.empresa.areaDeAtuacao}
                                onChange={e => handleChange(e, "empresa", "areaDeAtuacao")}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="Ensino Básico">Ensino Básico</option>
                                <option value="Ensino Superior">Ensino Superior</option>
                            </Form.Select>
                        </div>
                        <br />
                        <h4>Dados de contato</h4>
                        <div className='form-group mt-3'>
                            <label>Telefone</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Telefone"
                                value={formData.contato.telefone}
                                onChange={e => handleChange(e, "contato", "telefone")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Celular</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Celular"
                                value={formData.contato.celular}
                                onChange={e => handleChange(e, "contato", "celular")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>E-mail</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="E-mail"
                                value={formData.contato.email}
                                onChange={e => handleChange(e, "contato", "email")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Site</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Site"
                                value={formData.contato.site}
                                onChange={e => handleChange(e, "contato", "site")}
                            />
                        </div>
                        <br />
                        <h4>Endereço</h4>
                        <div className='form-group mt-3'>
                            <label>CEP</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="CEP"
                                value={formData.endereco.cep}
                                onChange={e => handleChange(e, "endereco", "cep")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Logradouro</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Logradouro"
                                value={formData.endereco.logradouro}
                                onChange={e => handleChange(e, "endereco", "logradouro")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Número</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Número"
                                value={formData.endereco.numero}
                                onChange={e => handleChange(e, "endereco", "numero")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Complemento</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Complemento"
                                value={formData.endereco.complemento}
                                onChange={e => handleChange(e, "endereco", "complemento")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Bairro</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Bairro"
                                value={formData.endereco.bairro}
                                onChange={e => handleChange(e, "endereco", "bairro")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Cidade</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Cidade"
                                value={formData.endereco.cidade}
                                onChange={e => handleChange(e, "endereco", "cidade")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>UF</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="UF"
                                value={formData.endereco.uf}
                                onChange={e => handleChange(e, "endereco", "uf")}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={handleCriarEmpresa}>
                                OK
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
            <br /><br />
            <br />
            <Footer />
        </div>
    );

    // return (<div className="novo-curriculo-container">
    //     <div className="row">
    //         <h2>Novo Currículo</h2>
    //     </div>
    //     <div className="row">
    //         <div className="col-md-12">
    //             <form>
    //                 <div className="form-group">
    //                     ok
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // </div>);
};



export default NovaEmpresa;