import api from "./api";

export const fetchPillarList = () => {
    const url = `api/v1/pillar/list`;
    return api({ url });
};

export const fetchClientwisePillarList = (id: string) => {
    const url = `api/v1/pillar/list?clientId=${id}`;
    return api({ url });
};