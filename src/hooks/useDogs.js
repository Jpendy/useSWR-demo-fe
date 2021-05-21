/* eslint-disable indent */
import React from 'react';
import useSWR, { mutate } from 'swr';

export default function useDogs() {

    const fetcher = url => fetch(url).then(res => res.json());

    const { data: dogs } = useSWR('http://localhost:7890/api/v1/dogs', fetcher);

    const addDog = (dog) => {
        mutate('http://localhost:7890/api/v1/dogs', [...dogs, dog], false);
    };

    const removeDog = (deletedDog) => {
        mutate(
            'http://localhost:7890/api/v1/dogs',
            dogs.filter(dog => dog.id !== deletedDog.id),
            false
        );
    };

    return {
        dogs,
        addDog,
        removeDog
    };
}
