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


export const getVagas = async () => {
    const response = await api.get(`/vaga?page=0&size=19999&sort=dataPublicacao`)
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