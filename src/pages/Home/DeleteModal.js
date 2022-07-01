import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';


const DeleteModal = ({ dltModalShow, deleteModalClose, id, setId }) => {

    const handleDelete = id => {
        (async () => {
            console.log(id)
            const { data } = await axios.delete(`http://localhost:5000/api/delete-billing/${id}`)
            deleteModalClose()
            setId('')
            toast.warning(data.message)
        })()
    }

    return (
        <>
            <Modal
                show={dltModalShow}
                onHide={deleteModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are you confirm to delete this Bill?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-danger'> Deleted bills will be deleted from database and you won't have any access to them!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(id)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteModal;