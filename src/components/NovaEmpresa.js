import { React, useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';


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
        <Container maxWidth="sm" align="left">
            <Typography variant="h4" align="center" gutterBottom>
                Cadastro Empresa
            </Typography>
            <Typography variant="h5" align="left" gutterBottom>
                Dados Empresa
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="CNPJ"
                        value={formData.empresa.cnpj}
                        onChange={e => handleChange(e, "empresa", "cnpj")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Razão Social"
                        value={formData.empresa.razaoSocial}
                        onChange={e => handleChange(e, "empresa", "razaoSocial")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nome Fantasia"
                        value={formData.empresa.areaDeAtuacao}
                        onChange={e => handleChange(e, "empresa", "areaDeAtuacao")} />
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
                        onChange={e => handleChange(e, "contato", "celular")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="E-mail"
                        value={formData.contato.email}
                        onChange={e => handleChange(e, "contato", "email")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Site"
                        value={formData.contato.site}
                        onChange={e => handleChange(e, "contato", "site")} />
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
                        onChange={e => handleChange(e, "endereco", "logradouro")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Número"
                        value={formData.endereco.numero}
                        onChange={e => handleChange(e, "endereco", "numero")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Complemento"
                        value={formData.endereco.complemento}
                        onChange={e => handleChange(e, "endereco", "complemento")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Bairro"
                        value={formData.endereco.bairro}
                        onChange={e => handleChange(e, "endereco", "bairro")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Cidade"
                        value={formData.endereco.cidade}
                        onChange={e => handleChange(e, "endereco", "cidade")} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="UF"
                        value={formData.endereco.uf}
                        onChange={e => handleChange(e, "endereco", "uf")} />
                </Grid>
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



export default NovaEmpresa;