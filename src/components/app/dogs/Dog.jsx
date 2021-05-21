/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';
import useDogs from '../../../hooks/useDogs';
import { deleteDog } from '../../../services/fetches';

export default function Dog({ name, age, id }) {

    const { removeDog } = useDogs();

    const handleDeleteDog = () => {
        deleteDog(id)
            .then(removeDog);
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>{age} years old</p>
            <button onClick={handleDeleteDog} >delete</button>
        </div>
    );
}
