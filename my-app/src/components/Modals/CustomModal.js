import React from 'react';
import { Button,Modal} from 'react-bootstrap';


const CustomModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.head}
                </Modal.Title>
                <Button onClick={props.onHide} variant={'outline-danger'}>X</Button>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.headBody}</h4>
                <p>
                    {props.children}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;