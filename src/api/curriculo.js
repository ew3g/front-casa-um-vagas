import api from './axiosConfig';

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