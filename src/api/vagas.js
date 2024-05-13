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

export const putVaga = async (request) => {
    const response = await api.put(`/vaga`, request)
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

export const deleteVaga = async (id) => {
    const response = await api.delete(`/vaga/${id}`)
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