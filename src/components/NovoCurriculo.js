import {React, useState} from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';


const NovoCurriculo = () => {
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
        const {value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    const handleAddDadosProfissionais = () => {
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

    return (
        <Container maxWidth="sm" align="left">
            <Typography variant="h4" align="center" gutterBottom>
                Cadastro Currículo
            </Typography>
            <Typography variant="h5" align="left" gutterBottom>
                Dados Pessoais
            </Typography>
            <Grid container spacing={2}>
                {/* Dados Pessoais */}
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Nome"
                    value={formData.dadosPessoais.nome}
                    onChange={e => handleChange(e, "dadosPessoais", "nome")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Sobrenome"
                    value={formData.dadosPessoais.sobrenome}
                    onChange={e => handleChange(e, "dadosPessoais", "sobrenome")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="CPF"
                    value={formData.dadosPessoais.cpf}
                    onChange={e => handleChange(e, "dadosPessoais", "cpf")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Data Nascimento"
                    value={formData.dadosPessoais.dataNascimento}
                    onChange={e => handleChange(e, "dadosPessoais", "dataNascimento")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Gênero"
                    value={formData.dadosPessoais.genero}
                    onChange={e => handleChange(e, "dadosPessoais", "genero")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Nacionalidade"
                    value={formData.dadosPessoais.nacionalidade}
                    onChange={e => handleChange(e, "dadosPessoais", "nacionalidade")}/>
                </Grid>

                {/* Adicione os outros campos para os dados pessoais aqui */}
            </Grid>

            <Typography variant="h5" align="left" gutterBottom>
                Dados de contato
            </Typography>
            <Grid container spacing={2}>
                {/* Dados Pessoais */}
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Telefone"
                    value={formData.contato.telefone}
                    onChange={e => handleChange(e, "contato", "telefone")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Celular"
                    value={formData.contato.celular}
                    onChange={e => handleChange(e, "contato", "celular")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="E-mail"
                    value={formData.contato.email}
                    onChange={e => handleChange(e, "contato", "email")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Site"
                    value={formData.contato.site}
                    onChange={e => handleChange(e, "contato", "site")}/>
                </Grid>
                {/* Adicione os outros campos para os dados pessoais aqui */}
            </Grid>

            <Typography variant="h5" align="left" gutterBottom>
                Endereço
            </Typography>
            <Grid container spacing={2}>
                {/* Dados Pessoais */}
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="CEP"
                    value={formData.endereco.cep}
                    onChange={e => handleChange(e, "endereco", "cep")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Logradouro"
                    value={formData.endereco.logradouro}
                    onChange={e => handleChange(e, "endereco", "logradouro")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Número"
                    value={formData.endereco.numero}
                    onChange={e => handleChange(e, "endereco", "numero")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Complemento"
                    value={formData.endereco.complemento}
                    onChange={e => handleChange(e, "endereco", "complemento")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Bairro"
                    value={formData.endereco.bairro}
                    onChange={e => handleChange(e, "endereco", "bairro")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Cidade"
                    value={formData.endereco.cidade}
                    onChange={e => handleChange(e, "endereco", "cidade")}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="UF"
                    value={formData.endereco.uf}
                    onChange={e => handleChange(e, "endereco", "uf")}/>
                </Grid>
                {/* Adicione os outros campos para os dados pessoais aqui */}
            </Grid>

            <Typography variant="h5" align="left" gutterBottom>
                Formação
            </Typography>
            <Grid container spacing={2}>
                {/* Dados Pessoais */}
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Curso"
                    value={formData.formacao.curso}
                    onChange={e => handleChange(e, "formacao", "curso")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Nível"
                    value={formData.formacao.nivel}
                    onChange={e => handleChange(e, "formacao", "nivel")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Instituição"
                    value={formData.formacao.instituicao}
                    onChange={e => handleChange(e, "formacao", "instituicao")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Início"
                    value={formData.formacao.dataInicio}
                    onChange={e => handleChange(e, "formacao", "dataInicio")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Conclusão"
                    value={formData.formacao.dataConclusao}
                    onChange={e => handleChange(e, "formacao", "dataConclusao")} />
                </Grid>
                
                {/* Adicione os outros campos para os dados pessoais aqui */}
            </Grid>

            
            {/* Experiência Profissional */}
        {formData.dadosProfissionais.map((exp, index) => (
          <Grid container item xs={12} spacing={2} key={index}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Empresa"
                value={exp.empresa}
                onChange={e => handleChange(e, 'dadosProfissionais', index, 'empresa')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cargo"
                value={exp.cargo}
                onChange={e => handleChange(e, 'dadosProfissionais', index, 'cargo')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Início"
                value={exp.dataInicio}
                onChange={e => handleChange(e, 'dadosProfissionais', index, 'dataInicio')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fim"
                value={exp.dataFim}
                onChange={e => handleChange(e, 'dadosProfissionais', index, 'dataFim')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                value={exp.descricao}
                onChange={e => handleChange(e, 'dadosProfissionais', index, 'descricao')}
              />
            </Grid>
            {/* Adicione os outros campos para a experiência profissional aqui */}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddDadosProfissionais}>Adicionar outra experiência profissional</Button>
        </Grid>

        {/* Botão de Envio */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => console.log(formData)}>Enviar Cadastro</Button>
        </Grid>
            
        </Container>
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