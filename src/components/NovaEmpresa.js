import { React, useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import AppNavbar from './Navbar';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import '../style/nova-empresa.css';


const NovaEmpresa = () => {
    const [formData, setFormData] = useState({
        empresa: {
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

    const handleChange = (e, section, field) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    return (
        <div>
            <AppNavbar/>
            <div className="nova-empresa-container">
                <form className='nova-empresa-form'>
                    <div className='nova-empresa-form-content'>
                        <h3 className='nova-empresa-form-title'>Cadastro empresa</h3>
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
                                <option value="ensino-basico">Ensino Básico</option>
                                <option value="ensino-superior">Ensino Superior</option>
                            </Form.Select>
                        </div>
                        <br/>
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
                        <br/>
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
                            <button type="submit" className="btn btn-primary" >
                                Criar usuário
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <br/><br/>
        <br/>
        <Footer/>
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