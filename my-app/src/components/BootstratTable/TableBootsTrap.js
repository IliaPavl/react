import React from 'react';
import { Container, Table } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';

const _Table = () => {
  return (
    <Container className='mt-2'>
      <Table variant='table-bordered table-hover'>
        <TableHead />
        <TableRow />
        <TableRow />
      </Table>
    </Container>
  );
};

export default _Table;