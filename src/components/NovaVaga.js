import { React, useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import AppNavbar from './Navbar';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import '../style/nova-empresa.css';
import { postVaga } from '../api/vagas';
import { useNavigate } from "react-router-dom";


const NovaVaga = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState('');
    const [formData, setFormData] = useState({
        titulo: "",
        cargo: "",
        formatoDeTrabalho: "",
        idEmpresa: 0,
        formacaoRequerida: "",
        experienciaRequerida: 0,
        habilidadesRequeridas: "",
        descricao: "",
        salario: 0,
        dataPublicacao: ""
    });

    const handleChange = (e, field) => {
        //console.log(e, field);
        const {value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [field]: value
            // [section]: {
            //     ...prevState[section],
            //     [field]: value
            // }
        }));
        //console.log(formData);
    };

    const handleCriarVaga = async (e) => {
        e.preventDefault();

        //console.log(formData);

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

        await postVaga(formData).then(response => {
            if (response) {
                console.log(response);
                if (response.status === 201) {
                    setInfo('');
                    alert('Vagas criada com sucesso');
                    navigate('/vagas');
                } else if (response.status === 409) {
                    setInfo("Vaga já existe");
                } else {
                    setInfo("Erro ao criar vaga: " + response.data.detail);
                }

            } else {
                setInfo("Erro ao criar vaga");
            }
        }).catch(err => {
            setInfo(err);
        });
    };

    return (
        <div>
            <AppNavbar/>
            <div className="nova-empresa-container">
                <form className='nova-empresa-form'>
                    <div className='nova-empresa-form-content'>
                        <h3 className='nova-empresa-form-title'>Cadastro vaga</h3>
                        <div className='form-group mt-3'>
                            <label>Título</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Título"
                                value={formData.titulo}
                                onChange={e => handleChange(e, "titulo")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Cargo</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Cargo"
                                value={formData.cargo}
                                onChange={e => handleChange(e, "cargo")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Formato de trabalho</label>
                            <Form.Select
                                type="select"
                                className="form-control mt-1"
                                placeholder="Formato de trabalho"
                                value={formData.formatoDeTrabalho}
                                onChange={e => handleChange(e, "formatoDeTrabalho")}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="REMOTO">Remoto</option>
                                <option value="HIBRIDO">Híbrido</option>
                                <option value="PRESENCIAL">Presencial</option>
                            </Form.Select>
                        </div>
                        <div className='form-group mt-3'>
                            <label>Empresa</label>
                            <Form.Select
                                type="select"
                                className="form-control mt-1"
                                placeholder="Empresa"
                                value={formData.idEmpresa}
                                onChange={e => handleChange(e, "idEmpresa")}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="1">1</option>
                            </Form.Select>
                        </div>
                        <div className='form-group mt-3'>
                            <label>Experiência requerida (em anos)</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Experiência requerida"
                                value={formData.experienciaRequerida}
                                onChange={e => handleChange(e, "experienciaRequerida")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Habilidades requeridas</label>
                            <input
                                type="textarea"
                                className="form-control mt-1"
                                placeholder="Habilidades requeridas"
                                value={formData.habilidadesRequeridas}
                                onChange={e => handleChange(e, "habilidadesRequeridas")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Descrição</label>
                            <input
                                type="textarea"
                                className="form-control mt-1"
                                placeholder="Descrição"
                                value={formData.descricao}
                                onChange={e => handleChange(e, "descricao")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Salário</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Salário"
                                value={formData.salario}
                                onChange={e => handleChange(e, "salario")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Data de publicação</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Data de publicação"
                                value={formData.dataPublicacao}
                                onChange={e => handleChange(e, "dataPublicacao")}
                            />
                        </div>


                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={handleCriarVaga}>
                                Adicionar vaga
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



export default NovaVaga;