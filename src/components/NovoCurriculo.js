import { React, useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import AppNavbar from './Navbar';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import '../style/nova-empresa.css';
import { getCurriculoById, getCurriculos, postCurriculo, putCurriculo } from '../api/curriculos';
import { useNavigate } from "react-router-dom";
import { getEmpresas } from "../api/empresa";
import AsyncSelect from 'react-select/async';
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';




const NovoCurriculo = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState('');
    const {id} = useParams();
    const [formData, setFormData] = useState({
        dadosPessoais: {
            nome: "",
            sobrenome: "",
            cpf: "",
            dataNascimento: "",
            genero: "",
            nacionalidade: ""
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
        },
        formacao: {
            curso: "",
            nivel: "",
            instituicao: "",
            dataInicio: "",
            dataConclusao: ""
        },
        dadosProfissionais: []
    });

    const handleChange = (e, section, field) => {
        console.log(section, field, e);
        const {value} = e.target;
        console.log(value);
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    const handleAddExperience = () => {
        setFormData(prevState => ({
          ...prevState,
          dadosProfissionais: [...prevState.dadosProfissionais, {
            empresa: '',
            cargo: '',
            dataInicio: '',
            dataFim: '',
            descricao: ''
          }]
        }));
      };

    const handleAddDadosProfissionais = () => {
        console.log('ok');
        setFormData(prevState => ({
            ...prevState,
            dadosProfissionais: [...prevState.dadosProfissionais, {
                empresa: "",
                cargo: "",
                dataInicio: "",
                dataFim: "",
                descricao: ""
            }]
        }));
    };

    useEffect(() => {
        const fetchCurriculo = async (id) => {
            const response = await getCurriculoById(id);

            if (response) {
                //console.log(response.data);

                if (response) {
                    var curriculoExistente = response.data;
                    change(curriculoExistente.nome, "dadosPessoais", "nome");
                    change(curriculoExistente.sobrenome, "dadosPessoais", "sobrenome");
                    change(curriculoExistente.cpf, "dadosPessoais", "cpf");
                    change(curriculoExistente.dataNascimento, "dadosPessoais", "dataNascimento");
                    change(curriculoExistente.genero, "dadosPessoais", "genero");
                    change(curriculoExistente.nacionalidade, "dadosPessoais", "nacionalidade");
                    change(curriculoExistente.contato.telefone, "contato", "telefone");
                    change(curriculoExistente.contato.celular, "contato", "celular");
                    change(curriculoExistente.contato.email, "contato", "email");
                    change(curriculoExistente.contato.site, "contato", "site");
                    change(curriculoExistente.endereco.cep, "endereco", "cep");
                    change(curriculoExistente.endereco.logradouro, "endereco", "logradouro");
                    change(curriculoExistente.endereco.numero, "endereco", "numero");
                    change(curriculoExistente.endereco.complemento, "endereco", "complemento");
                    change(curriculoExistente.endereco.bairro, "endereco", "bairro");
                    change(curriculoExistente.endereco.cidade, "endereco", "cidade");
                    change(curriculoExistente.endereco.uf, "endereco", "uf");
                    change(curriculoExistente.formacao.curso, "formacao", "curso");
                    change(curriculoExistente.formacao.nivel, "formacao", "nivel");
                    change(curriculoExistente.formacao.instituicao, "formacao", "instituicao");
                    change(curriculoExistente.formacao.dataInicio, "formacao", "dataInicio");
                    change(curriculoExistente.formacao.dataConclusao, "formacao", "dataConclusao");
                    console.log(curriculoExistente);

                    curriculoExistente.dadosProfissionais.map((exp, index) => {
                        // addProfissional()
                        // //console.log(formData);

                        // const newDataProfissional = formData.dadosProfissionais.map((item, i) =>
                        // i === index ? { ...item, ["empresa"]: exp.empresa } : item
                        // );
                        
                        // setFormData({
                        // ...formData,
                        // dadosProfissionais: newDataProfissional
                        // });

                        formData.dadosProfissionais.pop();
                        formData.dadosProfissionais.push({
                            'empresa': exp.empresa,
                            'cargo': exp.cargo,
                            'dataInicio': exp.dataInicio,
                            'dataFim': exp.dataFim,
                            'descricao': exp.descricao
                        });

                        


                    });

                    //console.log(formData);
                }
            }
        };

        if (id) {
            fetchCurriculo(id);
        }
    }, []);

    const handleCriarCurriculo = async (e) => {
        e.preventDefault();

        if (formData.dadosPessoais.nome === "") {
            setInfo('Por favor, preencha o nome.');
            return;
        } else if (formData.dadosPessoais.sobrenome === "") {
            setInfo('Por favor, preencha o sobrenome.');
            return;
        } else if (formData.dadosPessoais.cpf === "") {
            setInfo('Por favor, preencha o cpf.');
            return;
        } else if (formData.dadosPessoais.dataNascimento === "") {
            setInfo('Por favor, preencha a data de nascimento.');
            return;
        } else if (formData.dadosPessoais.genero === "") {
            setInfo('Por favor, preencha o gênero.');
            return;
        } else if (formData.dadosPessoais.nacionalidade === "") {
            setInfo('Por favor, preencha a nacionalidade.');
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
            setInfo('Por favor, preencha o cidade.');
            return;
        } else if (formData.endereco.uf === "") {
            setInfo('Por favor, preencha a uf.');
            return;
        } else if (formData.formacao.curso === "") {
            setInfo('Por favor, preencha o curso.');
            return;
        } else if (formData.formacao.nivel === "") {
            setInfo('Por favor, preencha o nível.');
            return;
        } else if (formData.formacao.instituicao === "") {
            setInfo('Por favor, preencha a instituição.');
            return;
        } else if (formData.formacao.dataInicio === "") {
            setInfo('Por favor, preencha a data de início.');
            return;
        } else if (formData.formacao.dataConclusao === "") {
            setInfo('Por favor, preencha a data de conclusão.');
            return;
        }

        if (id) {
            const formDataPut = {
                id: id,
                contato: {
                    telefone: formData.contato.telefone,
                    celular: formData.contato.celular,
                    email: formData.contato.email,
                    site: formData.contato.site,
                },
                endereco: {
                    cep: formData.endereco.cep,
                    logradouro: formData.endereco.logradouro,
                    numero: formData.endereco.numero,
                    complemento: formData.endereco.complemento,
                    bairro: formData.endereco.bairro,
                    cidade: formData.endereco.cidade,
                    uf: formData.endereco.uf,
                },
                formacao: {
                    curso: formData.formacao.curso,
                    nivel: formData.formacao.nivel,
                    instituicao: formData.formacao.instituicao,
                    dataInicio: formData.formacao.dataInicio,
                    dataConclusao: formData.formacao.dataConclusao,
                },
            }
            await putCurriculo(formDataPut).then(response => {
                if (response) {
                    //console.log(response);
                    if (response.status === 200) {
                        setInfo('');
                        alert('Curriculo atualizado com sucesso');
                        navigate('/curriculos');
                    } else {
                        setInfo("Erro ao atualizar currículo: " + response.data.detail);
                    }
    
                } else {
                    setInfo("Erro ao atualizar currículo");
                }
                console.log(formDataPut);
            }).catch(err => {
                setInfo(err);
            });
        } else {
            await postCurriculo(formData).then(response => {
                if (response) {
                    //console.log(response);
                    if (response.status === 201) {
                        setInfo('');
                        alert('Curriculo criado com sucesso');
                        navigate('/curriculos');
                    } else if (response.status === 409) {
                        setInfo("Currículo já existe");
                    } else {
                        setInfo("Erro ao criar currículo: " + response.data.detail);
                    }
    
                } else {
                    setInfo("Erro ao criar currículo");
                }
            }).catch(err => {
                setInfo(err);
            });
        }
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


    const handleProfissionalChange = (e, index) => {
        //console.log(index, e);
        const { name, value } = e.target;
        console.log(name,value);
        const newDataProfissional = formData.dadosProfissionais.map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        );
        setFormData({
          ...formData,
          dadosProfissionais: newDataProfissional
        });
      };
    
      const addProfissional = () => {
        setFormData({
          ...formData,
          dadosProfissionais: [
            ...formData.dadosProfissionais,
            {
              empresa: '',
              cargo: '',
              dataInicio: '',
              dataFim: '',
              descricao: ''
            }
          ]
        });

        //console.log(formData)
      };

    return (
        <div>
            <AppNavbar />
            <div className="nova-empresa-container">
                <form className='nova-empresa-form'>
                    <div className='nova-empresa-form-content'>
                        {id ?
                            <>
                                <h3 className='nova-empresa-form-title'>Editar Currículo</h3>
                            </>
                            :
                            <>
                                <h3 className='nova-empresa-form-title'>Cadastro Currículo</h3>
                            </>
                        }
                        <br/>
                        <h4 className='nova-empresa-form-title'>Dados Pessoais</h4>
                        <div className='form-group mt-3'>
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nome"
                                value={formData.dadosPessoais.nome}
                                onChange={e => handleChange(e, "dadosPessoais", "nome")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Sobrenome</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Sobrenome"
                                value={formData.dadosPessoais.sobrenome}
                                onChange={e => handleChange(e, "dadosPessoais", "sobrenome")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>CPF</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="CPF"
                                value={formData.dadosPessoais.cpf}
                                onChange={e => handleChange(e, "dadosPessoais", "cpf")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Data de Nascimento</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="AAAA-MM-DD"
                                value={formData.dadosPessoais.dataNascimento}
                                onChange={e => handleChange(e, "dadosPessoais", "dataNascimento")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Gênero</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Gênero"
                                value={formData.dadosPessoais.genero}
                                onChange={e => handleChange(e, "dadosPessoais", "genero")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Nacionalidade</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nacionalidade"
                                value={formData.dadosPessoais.nacionalidade}
                                onChange={e => handleChange(e, "dadosPessoais", "nacionalidade")}
                            />
                        </div>
                        <br/>
                        <h4 className='nova-empresa-form-title'>Contato</h4>
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
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Email"
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
                        <h4 className='nova-empresa-form-title'>Endereço</h4>
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
                        <br/>
                        <h4 className='nova-empresa-form-title'>Formação</h4>
                        <div className='form-group mt-3'>
                            <label>Curso</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Curso"
                                value={formData.formacao.curso}
                                onChange={e => handleChange(e, "formacao", "curso")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Nível</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Nível"
                                value={formData.formacao.nivel}
                                onChange={e => handleChange(e, "formacao", "nivel")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Instituição</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Instituição"
                                value={formData.formacao.instituicao}
                                onChange={e => handleChange(e, "formacao", "instituicao")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Início</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="AAAA-MM-DD"
                                value={formData.formacao.dataInicio}
                                onChange={e => handleChange(e, "formacao", "dataInicio")}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Conclusão</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="AAAA-MM-DD"
                                value={formData.formacao.dataConclusao}
                                onChange={e => handleChange(e, "formacao", "dataConclusao")}
                            />
                        </div>
                        <br/>
                        <h4 className='nova-empresa-form-title'>Dados Profissionais</h4>
                        {formData.dadosProfissionais.map((profissional, index) => (
                            <div key={index}>
                                <Card>
                                    <Card.Header>Experiência Profissional #{index}</Card.Header>
                                    <Card.Body>
                                    <label>Empresa</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        name='empresa'
                                        placeholder="Empresa"
                                        value={profissional.empresa}
                                        onChange={(e) => handleProfissionalChange(e, index)}
                                    />
                                    <label>Cargo</label>
                                    <input
                                        type="text"
                                        name='cargo'
                                        className="form-control mt-1"
                                        placeholder="Cargo"
                                        value={profissional.cargo}
                                        onChange={e => handleProfissionalChange(e, index)}
                                    />

                                    <label>Início</label>
                                    <input
                                        type="text"
                                        name='dataInicio'
                                        className="form-control mt-1"
                                        placeholder="YYYY-MM-DD"
                                        value={profissional.dataInicio}
                                        onChange={e => handleProfissionalChange(e, index)}
                                    />

                                    <label>Fim</label>
                                    <input
                                        type="text"
                                        name='dataFim'
                                        className="form-control mt-1"
                                        placeholder="YYYY-MM-DD"
                                        value={profissional.dataFim}
                                        onChange={e => handleProfissionalChange(e, index)}
                                    />

                                    <label>Descrição</label>
                                    <input
                                        type="text"
                                        name='descricao'
                                        className="form-control mt-1"
                                        placeholder="Descrição"
                                        value={profissional.descricao}
                                        onChange={e => handleProfissionalChange(e, index)}
                                    />
                                    </Card.Body>
                                </Card>
                                <br/>
                          </div>
                    ))}
                        <div className="d-grid gap-2 mt-3">
                            <button className='btn btn-primary' type="button" onClick={addProfissional}>Adicionar outra experiência</button>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={handleCriarCurriculo}>
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



export default NovoCurriculo;