import api from './axiosConfig';

export const getVagas = async () => {
    const response = await api.get(`/vaga?page=0&size=1&sort=cargo`)
        .catch(function (error) {
            console.log(error);
        });
    console.log(response.data);
    return response.data;
    // return response.data;
    // const response2 = {
    //     data: {
    //         vagas: [
    //             {
    //                 id: 1,
    //                 empresa: "Empresa 1",
    //                 cargo: "Cargo 1"
    //             },
    //             {
    //                 id: 2,
    //                 empresa: "Empresa 2",
    //                 cargo: "Cargo 2"
    //             },
    //             {
    //                 id: 3,
    //                 empresa: "Empresa 3",
    //                 cargo: "Cargo 3"
    //             },
    //             {
    //                 id: 4,
    //                 empresa: "Empresa 4",
    //                 cargo: "Cargo 4"
    //             },
    //             {
    //                 id: 5,
    //                 empresa: "Empresa 5",
    //                 cargo: "Cargo 5"
    //             },
    //             {
    //                 id: 6,
    //                 empresa: "Empresa 6",
    //                 cargo: "Cargo 6"
    //             },
    //             {
    //                 id: 7,
    //                 empresa: "Empresa 7",
    //                 cargo: "Cargo 7"
    //             },
    //             {
    //                 id: 8,
    //                 empresa: "Empresa 8",
    //                 cargo: "Cargo 8"
    //             },
    //             {
    //                 id: 9,
    //                 empresa: "Empresa 9",
    //                 cargo: "Cargo 9"
    //             },
    //             {
    //                 id: 10,
    //                 empresa: "Empresa 10",
    //                 cargo: "Cargo 10"
    //             },
    //             {
    //                 id: 11,
    //                 empresa: "Empresa 11",
    //                 cargo: "Cargo 11"
    //             },
    //             {
    //                 id: 12,
    //                 empresa: "Empresa 12",
    //                 cargo: "Cargo 12"
    //             },
    //             {
    //                 id: 13,
    //                 empresa: "Empresa 13",
    //                 cargo: "Cargo 13"
    //             },
    //             {
    //                 id: 14,
    //                 empresa: "Empresa 14",
    //                 cargo: "Cargo 14"
    //             },
    //             {
    //                 id: 15,
    //                 empresa: "Empresa 15",
    //                 cargo: "Cargo 15"
    //             }
    //         ]

    //     }
    // }
    // return response2;
    // return undefined
}