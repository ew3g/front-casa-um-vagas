import api from './axiosConfig';


export const postCurriculo = async (request) => {
    const response = await api.post(`/curriculo`, request)
        .catch(function (error) {
            console.log(error);
        });

    console.log(response);
    if (response) {
        console.log(response);
        return response;
    }

    return undefined;
}

export const putCurriculo = async (request) => {
    const response = await api.put(`/curriculo`, request)
        .catch(function (error) {
            console.log(error);
        });

    console.log(response);
    if (response) {
        console.log(response);
        return response;
    }

    return undefined;
}

export const deleteCurriculo = async (id) => {
    const response = await api.delete(`/curriculo/${id}`)
        .catch(function (error) {
            console.log(error);
        });

    console.log(response);
    if (response) {
        console.log(response);
        return response;
    }

    return undefined;
}

export const getCurriculoById = async (id) => {
    const response = await api.get(`/curriculo/${id}`)
        .catch(function (error) {
            console.log(error);
        });
    //console.log(response);
    if (response) {
        //console.log(response);
        return response;
    }

    return undefined;

}

export const getCurriculos = async (pagina, maxResults, sort) => {
    const response = await api.get(`/curriculo?page=${pagina}&size=${maxResults}&sort=${sort}`)
        .catch(function (error) {
            console.log(error);
        });
    //console.log(response);
    if (response) {
        //console.log(response);
        return response;
    }

    return undefined;

}

export const getCurriculoByUsuarioId = async (usuarioId) => {
    // const response = await api.get(`/curriculo/${usuarioId}`)
    // .catch(function (error) {
    //     console.log(error);
    // });
    // return response.data;
    const response = {
        data: {
            dadosPessoais: {
                nome: "Lucas",
                sobrenome: "da Silva",
                cpf: "454.345.983-10",
                dataNascimento: "01/01/2000",
                genero: "Masculino",
                nacionalidade: "Brasileiro"
            },
            contato: {
                telefone: "(11) 2384-3854",
                celular: "(11) 948584837",
                email: "lucas.silva@email.com",
                site: "sitedolucas.com"
            },
            endereco: {
                cep: "07981232",
                logradouro: "Rua Doze",
                numero: "12",
                complemento: "Bloco 1 Ap 23",
                bairro: "Vila Tereza",
                cidade: "São Paulo",
                uf: "SP"
            },
            formacao: {
                curso: "Bacharel em Engenharia da Produção",
                nivel: "Ensino Superior",
                instituicao: "Faculdade Superior",
                dataInicio: "01/01/2018",
                dataConclusao: "31/12/2023"
            },
            dadosProfissionais: [
                {
                    empresa: "Empresa 1",
                    cargo: "Escritor",
                    dataInicio: "01/01/2019",
                    dataFim: "31/12/2020"
                },
                {
                    empresa: "Empresa 2",
                    cargo: "Redator",
                    dataInicio: "01/01/2021",
                    dataFim: ""
                }
            ]
        }
    }
    return response;
   // return undefined
}