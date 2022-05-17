import React, { useContext, useState } from 'react';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const click = async () => {
        console.log("email:" + email)
        console.log("password:" + password)
        console.log("login:" + setLogin)
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center mt-5"
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto"> Registration </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your name..."
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            <a href='#'>Login</a>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={() => click()}
                        >
                            Registration
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Registration;