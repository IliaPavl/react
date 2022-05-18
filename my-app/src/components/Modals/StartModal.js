import React from 'react';
import CustomModal from './CustomModal';
import { Button } from 'react-bootstrap';

const StartModal = ({ head, headBody, buttonModal, children }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                {buttonModal}
            </Button>

            <CustomModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                head={head}
                headBody={headBody}
            >
                {children}
            </CustomModal>
        </>
    );
};

export default StartModal;