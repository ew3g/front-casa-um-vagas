import api from './axiosConfig';

export const postVaga = async (request) => {
    const response = await api.post(`/vaga`, request)
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


export const getVagas = async (pagina, maxResults, sort) => {
    const response = await api.get(`/vaga?page=${pagina}&size=${maxResults}&sort=${sort}`)
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