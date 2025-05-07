const apiUrl = 'https://nettuts.hu/jms/vadaszhal/';

export const getAll = (entity = 'users') => {
    return fetch(apiUrl + entity).then(res => res.json());
};
