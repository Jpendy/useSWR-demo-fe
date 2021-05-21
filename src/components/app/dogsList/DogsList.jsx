/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import useDogs from '../../../hooks/useDogs';
import { postDog } from '../../../services/fetches';

export default function DogsList() {

    const { dogs, addDog } = useDogs();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handlePostDog = () => {
        postDog({ name, age })
            .then(addDog);

        setName('');
        setAge('');
    };

    const list = dogs?.map(({ name, age }) => (
        <li key={name} >
            <h3>{name}</h3>
            <p>{age} years old</p>
        </li>
    ));

    if (!dogs) return <h2>Loading...</h2>;
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
