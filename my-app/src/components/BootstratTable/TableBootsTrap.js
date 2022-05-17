import React, { useCallback } from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';
import MySelect from '../UI/selects/SetTableSelect'

const TableBootsTrap = (props) => {

  let massiv = []

  function uncheck() {
    var uncheck = document.gFetElementsByTagName('input');
    for (var i = 0; i < uncheck.length; i++) {
      if (uncheck[i].type == 'checkbox') {
        uncheck[i].checked = false;
      }
    }
  }

  const updateData = useCallback((value) => {
    massiv.includes(value) ?
      massiv.splice(massiv.indexOf(value), massiv.indexOf(value) + 1)
      :
      massiv.push(value)
  });

  function getBox() {
    console.log(massiv);
  }

  return (
    <Container className='mt-2'>
      <Col>
      <Row>
      <MySelect/>
      </Row>
        <Row>
          <Button className="m-1" onClick={() => getBox()}>get checkbox</Button>
          <Button className="m-1" onClick={() => uncheck()}>uncheck</Button>
          <Button className="m-1" onClick={() => uncheck()}>sort</Button>
        </Row>
        <Row>
          <Table variant='table-bordered table-hover'>
            <TableHead value={props.head} />
            {props.rows.map((type) => (
              <TableRow key={type.id} value={type} updateData={updateData} />
            ))}
          </Table>
        </Row>
      </Col>
    </Container>
  );
};

export default TableBootsTrap;