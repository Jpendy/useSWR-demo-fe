/* eslint-disable indent */

export const postDog = (body) => {
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
