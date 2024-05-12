import api from './axiosConfig';

export const postEmpresa = async (request) => {
    const response = await api.post(`/empresa`, request)
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

export const getEmpresas = async (pagina, maxResults, sort) => {
    const response = await api.get(`/empresa?page=${pagina}&size=${maxResults}&sort=${sort}`)
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