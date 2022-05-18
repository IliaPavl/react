import React, { useState } from 'react';
import CusromSelect from './CustomSelect'

const SetTableSelect = () => {

    const [options, setOptions] = useState([
        { name: "логин", title: "login" },
        { name: "почта", title: "email" }
    ])

    const [value, setValue] = useState()

    const backMessage = (option) => {
        setValue(option)
    }

    return (
        <CusromSelect
            defaultValue={"сортировака"}
            options={options}
            value={value}
            setValue={backMessage}
        />
    );
};

export default SetTableSelect;