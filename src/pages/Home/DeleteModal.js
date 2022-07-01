import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import useBillings from '../../hooks/useBillings';


const DeleteModal = ({ dltModalShow, deleteModalClose, id, setId }) => {
    const [billings, setBillings] = useBillings();

    const handleDelete = id => {
        (async () => {
            const { data } = await axios.delete(`http://localhost:5000/api/delete-billing/${id}`)
            const remaining = billings.filter(billing => billing._id !== id)
            setBillings(remaining)
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
                    <Button variant="danger" onClick={() => handleDelete(id)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteModal;