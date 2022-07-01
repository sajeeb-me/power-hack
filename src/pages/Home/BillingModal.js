import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

const BillingModal = ({ handleClose, show, id, setId }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = (newBill) => {
        id ?
            (async () => {
                // console.log(id)
                const { data } = await axios.patch(`http://localhost:5000/api/update-billing/${id}`, newBill)
                if (!data.success) {
                    reset()
                    handleClose()
                    return
                }
                reset()
                handleClose()
                setId('')
                toast.success('updated successfully')
            })()
            :
            (async () => {
                // console.log("id nai")
                const { data } = await axios.post('http://localhost:5000/api/add-billing', newBill)
                if (!data.success) {
                    reset()
                    handleClose()
                    return
                }
                reset()
                handleClose()
                setId('')
                toast.success(data.message)
            })()
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Billing Details</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label d-block">Full name</label>
                            <input
                                type='text'
                                className={`${errors.fullName && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("fullName", { required: true })}
                            />
                            {
                                errors.fullName?.type === 'required' &&
                                <div className="form-text text-danger">Full name is required</div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label d-block">Email address</label>
                            <input
                                type='email'
                                className={`${errors.email && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("email", { required: true })}
                            />
                            {
                                errors.email?.type === 'required' &&
                                <div className="form-text text-danger">Email is required</div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label d-block">Phone</label>
                            <input
                                type='text'
                                className={`${errors.phone && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("phone", { required: true })}
                            />
                            {
                                errors.phone?.type === 'required' &&
                                <div className="form-text text-danger">Phone number is required</div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label d-block">Paid amount</label>
                            <input
                                type='number'
                                className={`${errors.amount && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("amount", { required: true })}
                            />
                            {
                                errors.amount?.type === 'required' &&
                                <div className="form-text text-danger">Paid amount is required</div>
                            }
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button as="input" type="submit" value="Submit" />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default BillingModal;