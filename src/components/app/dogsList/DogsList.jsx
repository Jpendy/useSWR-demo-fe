/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { postDog } from '../../../services/fetches';

export default function DogsList() {

    const fetcher = url => fetch(url).then(res => res.json());

    const { data: dogs } = useSWR('http://localhost:7890/api/v1/dogs', fetcher);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handlePostDog = () => {
        postDog({ name, age })
            .then(dog => mutate('http://localhost:7890/api/v1/dogs', [...dogs, dog], false));

        setName('');
        setAge('');
    };

    const list = dogs?.map(({ name, age }) => (
        <li key={name} >
            <h3>{name}</h3>
            <p>{age} years old</p>
        </li>
    ));

    return (
        <>
            <input
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="name"
                value={name}
            />
            <input
                type="text"
                onChange={e => setAge(e.target.value)}
                placeholder="age"
                value={age}
            />

            <button onClick={handlePostDog} >create dog</button>
            <ul>
                {list}
            </ul>
        </>
    );
}
