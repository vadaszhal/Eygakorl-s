const apiUrl = 'https://nettuts.hu/jms/cherryApp/';

export const getAll = (entity = 'users') => {
    return fetch(apiUrl + entity).then(res => res.json());
};
