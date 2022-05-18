import React from 'react';
import { Form } from 'react-bootstrap';


const CustomSelect = ({ defaultValue, options, value, setValue }) => {

    return (
        <Form.Select value={value} onChange={(e) => { setValue(e.target.value) }}>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(value =>
                <option key={value.name} value={value.title}>
                    {value.name}
                </option>
            )}
        </Form.Select>
    );
};

export default CustomSelect;