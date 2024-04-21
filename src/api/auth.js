import api from './axiosConfig';

export const auth = async (email, password) => {
    // const request = {
    //     email: email,
    //     senha: password
    // }
    // const response = await api.post('/auth', request)
    //     .catch(function (error) {
    //         console.log(error)
    //     });
    // return response;
    const response = {
        data: {
            token: "Bearer 123456",
            usuarioId: 1,
            email: "teste@teste.com",
            tipoUsuario: "pessoa-fisica"
        }
    };

    return response;
};

// export const updateUsuario = async (id, data) => {
//     const response = await api.put(`/usuarios/${id}`, data);
//     return response.data;
// };

// export const deleteUsuario = async (id) => {
//     const response = await api.delete(`/usuarios/${id}`);
//     return response.data;
// };