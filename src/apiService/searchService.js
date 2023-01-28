import * as requestHttp from '~/utils/https';

export const search = async (q, type = 'less') => {
    try {
        const res = await requestHttp.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
