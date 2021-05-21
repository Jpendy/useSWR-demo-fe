/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { fetchAllDogs } from '../../../services/fetches';
import DogsList from './DogsList';

export default function Dogs() {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchAllDogs()
            .then(setDogs);
    }, []);


    if (!dogs.length) return <h2>Loading...</h2>;
    return (
        <div>
            <DogsList dogs={dogs} />
        </div>
    );
}
