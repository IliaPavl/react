import React from 'react';
import {  } from 'react-bootstrap';

const TableHead = (props) => {
    return (
        <thead className="thead-dark">
            <tr>
             {props.value.map((prop) => (
                 <th key={prop.title}>{prop.title}</th>
            ))}
            </tr>
        </thead>
    );
};

export default TableHead;