import React, { useCallback, useState } from 'react';
import TableSelect from './TableSelect'

const SetTableSelect = () => {

    const [selectValue, setValue] = useState([
        {name: "логин", title:"login"},
        {name: "почта", title:"email"}
    ])

    return (
        <TableSelect defaultValue={"сортировака"} values={selectValue}/>
    );
};

export default SetTableSelect;