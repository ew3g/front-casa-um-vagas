import api from './axiosConfig';

export const getVagas = async () => {
    const response = await api.get(`/vaga?page=0&size=199&sort=dataPublicacao`)
        .catch(function (error) {
            console.log(error);
        });
    console.log(response.data);
    return response.data;
}