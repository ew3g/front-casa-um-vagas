import {React, useState} from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';


const NovaVaga = () => {
    const [formData, setFormData] = useState({
        titulo: "string",
        cargo: "string",
        formatoDeTrabalho: "REMOTO",
        idEmpresa: 1,
        formacaoRequerida: "string",
        experienciaRequerida: 0,
        habilidadesRequeridas: "string",
        descricao: "string",
        salario: 0,
        dataPublicacao: "2023-05-07"
        
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
        console.log(formData);
    };

    return (
        <Container maxWidth="sm" align="left">
            <Typography variant="h4" align="center" gutterBottom>
                Cadastro vAGA
            </Typography>
            <Grid container spacing={2}>
                {/* Dados Pessoais */}
                <Grid item xs={12}>
                    <TextField 
                    fullWidth
                    label="Título"
                    value={formData.titulo}
                    onChange={e => handleChange(e, "titulo")} />
                </Grid>
                {/* <Grid item xs={12}>
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
                </Grid> */}

                {/* Adicione os outros campos para os dados pessoais aqui */}
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



export default NovaVaga;