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

export const putEmpresa = async (request) => {
    const response = await api.put(`/empresa`, request)
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

export const getEmpresa = async (id) => {
    const response = await api.get(`/empresa/${id}`)
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

export const deleteEmpresa = async (id) => {
    const response = await api.delete(`/empresa/${id}`)
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