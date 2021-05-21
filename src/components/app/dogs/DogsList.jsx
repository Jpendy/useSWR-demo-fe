/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';
import Dog from './Dog';

export default function DogsList({ dogs }) {

    const list = dogs.map(dog => (
        <li key={dog.name} >
            <Dog {...dog} />
        </li>
    ));
    return (
        <ul>
            {list}
        </ul>
    );
}
