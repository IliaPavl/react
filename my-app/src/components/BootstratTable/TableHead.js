import React from 'react';
import classes from './TableBootsTrap.css'

const TableHead = ({ values, sorting }) => {
    return (
        <thead className="thead-dark ">
            <tr>
                <th></th>
                {values.map((value) => (
                    <th
                        key={value.title}
                        onClick={() => { sorting(value.title) }}
                    >
                        <p className='gain-center'>{value.title}</p>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;