import React from 'react';
import { Container, Table, Col, Row, Button, Form } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';

const TableBootsTrap = (props) => {

  function uncheck() {

  }
  return (
    <Container className='mt-2'>
      <Col>
        <Row>
          <Button className="m-1" onClick={() => uncheck()}>uncheck</Button>
        </Row>
        <Row>
          <Table variant='table-bordered table-hover'>
            <TableHead value={props.head} />
            {props.rows.map((type) => (
              <TableRow key={type.id} value={type} />
            ))}
          </Table>
        </Row>
      </Col>
    </Container>
  );
};

export default TableBootsTrap;