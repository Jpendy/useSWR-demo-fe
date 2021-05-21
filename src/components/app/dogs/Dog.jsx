/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';

export default function Dog({ name, age }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age} years old</p>
        </div>
    );
}
