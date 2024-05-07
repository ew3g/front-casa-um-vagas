import api from './axiosConfig';

export const postEmpresa = async (request) => {

    const response = await api.post(`/empresa`, request)
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

export const getEmpresas = async () => {
    const response = await api.get(`/empresa?page=0&size=100&sort=razaoSocial`)
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