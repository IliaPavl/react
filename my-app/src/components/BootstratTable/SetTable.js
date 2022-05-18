import React, { useState } from 'react';
import TableBootsTrap from './TableBootsTrap'

const SetTable = () => {
    const [headerTable, setHeaderTable] = useState([
        { title: '#' },
        { title: 'id' },
        { title: 'email' },
        { title: 'login' },
        { title: 'role' },
      ])
      const [rowsTable, setRowsTable] = useState([
        { id: 1, email: 'email', login: 'login', role: 'role' },
        { id: 2, email: 'email', login: 'login', role: 'role' },
        { id: 3, email: 'email', login: 'login', role: 'role' },
      ])
    return (
        <TableBootsTrap head={headerTable} rows={rowsTable} />
    );
};

export default SetTable;