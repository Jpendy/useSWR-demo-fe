/* eslint-disable indent */

export const fetchAllDogs = () => {
    return fetch('http://localhost:7890/api/v1/dogs')
        .then(res => res.json());
};

export const fetchPostDog = (body) => {
    return fetch('http://localhost:7890/api/v1/dogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        });
};

export const deleteDog = (id) => {
    return fetch(`http://localhost:7890/api/v1/dogs/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json());
};
