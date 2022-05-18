import React from 'react';
import { Form } from 'react-bootstrap';
const TableRow = ({value,updateData}) => {
    return (
        <tbody className="table-light">
            <tr>
                <td>
                    <Form.Check
                        type={'checkbox'}
                        id={value.id}
                        onClick={() => { updateData(value.id) }}
                    />
                </td>
                <td>{value.id}</td>
                <td>{value.email}</td>
                <td>{value.login}</td>
                <td>{value.role}</td>
            </tr>
        </tbody>
    );
};

export default TableRow;