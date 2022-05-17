import React from 'react';
import { Form } from 'react-bootstrap';


const TableSelect = (options) => {
    return (
        <Form.Select aria-label="Default select example">
            <option disabled={true} value="">{options.defaultValue}</option>
            {options.values.map(value =>
                <option key={value.name} value={value.title}>
                    {value.name}
                </option>
                )}
        </Form.Select>
    );
};

export default TableSelect;