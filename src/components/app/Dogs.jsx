/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import DogsList from './dogs/DogsList';
import { fetchAllDogs } from '../../services/fetches';
import useDogs from '../../hooks/useDogs';

export default function Dogs() {

    const { dogs } = useDogs();

    // const [dogs, setDogs] = useState([]);

    // useEffect(() => {
    //     fetchAllDogs()
    //         .then(setDogs);
    // }, []);

    if (!dogs?.length) return <h2>Loading...</h2>;
    return (
        <>
            <DogsList dogs={dogs} />
        </>
    );
}
