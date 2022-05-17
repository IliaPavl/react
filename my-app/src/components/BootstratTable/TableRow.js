import React from 'react';
import { Form } from 'react-bootstrap';
const TableRow = (props) => {

    return (
        <tbody className="table-light">
            <tr>
                <td>
                    <Form.Check
                        type={'checkbox'}
                        id={props.value.id}
                        onChange={e => console.log(props.value.id)}
                    />
                </td>
                <td>{props.value.id}</td>
                <td>{props.value.email}</td>
                <td>{props.value.login}</td>
                <td>{props.value.role}</td>
            </tr>
        </tbody>
    );
};

export default TableRow;