import React, { } from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';

const TableBootsTrap = ({ head, rows }) => {

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

  function getBox() {
    console.log(massiv);
  }

  return (
    <Container className='mt-2'>
      <Col>
        <Row>
          <Button className="m-1" onClick={() => getBox()}>get checkbox</Button>
          <Button className="m-1" onClick={() => uncheck()}>uncheck</Button>
          <Button className="m-1" onClick={() => uncheck()}>sort</Button>
        </Row>
        <Row>
          <Table variant='table-bordered table-hover'>
            <TableHead value={head} />
            {rows.map((type) => (
              <TableRow key={type.id} value={type} updateData={updateData} />
            ))}
          </Table>
        </Row>
      </Col>
    </Container>
  );
};

export default TableBootsTrap;