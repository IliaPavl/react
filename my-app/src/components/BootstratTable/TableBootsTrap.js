import React, { useEffect, useMemo, useState } from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';
import SearchWithButton from '../SearchForm/SearchWithButton';
import SearchLable from '../SearchForm/SearchLable'

const TableBootsTrap = ({ head, rows }) => {

  const [table, setTable] = useState([])

  useEffect(() => {
    setTable(rows)
  }, []);

  let massiv = []

  function uncheck() {
    let uncheck = document.getElementsByTagName('input');
    for (let i = 0; i < uncheck.length; i++) {
      if (uncheck[i].type === 'checkbox') {
        uncheck[i].checked = false;
      }
    }
  }

  const updateData = (value) => {
    massiv.includes(value) ?
      massiv.splice(massiv.indexOf(value), massiv.indexOf(value) + 1)
      :
      massiv.push(value)
  };

  const sorting = (sortValue) => {
    setTable([...table].sort((a, b) => a[sortValue].toString().localeCompare(b[sortValue].toString())))
  };

  const search = (seachMessege) => {
    console.log(seachMessege)
  };

  const search2 = useMemo(() =>{

  },['email',table]);

  function getBox() {
    console.log(massiv);
  }

  return (
    <Container className='mt-2'>
      <Col>
        <Row>
          <Button className="m-1" onClick={() => getBox()}>get checkbox</Button>
          <Button className="m-1" onClick={() => uncheck()}>uncheck</Button>
          <SearchWithButton backSearch={search} />
          <SearchLable backSearch={search}/>
        </Row>
        <Row>
          <Table variant='table-bordered table-hover'>
            <TableHead values={head} sorting={sorting} />
            {table.map((type) => (
              <TableRow key={type.id} value={type} updateData={updateData} />
            ))}
          </Table>
        </Row>
      </Col>
    </Container>
  );
};

export default TableBootsTrap;