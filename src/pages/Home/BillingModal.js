import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

const BillingModal = ({ handleClose, show }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (newBill) => {
        const { data } = await axios.post('http://localhost:5000/api/add-billing', newBill)
        if (!data.success) {
            reset()
            handleClose()
            return
        }
        reset()
        handleClose()
        toast.success(data.message)
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Bill</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <div class="mb-3">
                            <label for="fullName" class="form-label d-block">Full name</label>
                            <input
                                type='text'
                                className={`${errors.fullName && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("fullName", { required: true })}
                            />
                            {
                                errors.fullName?.type === 'required' &&
                                <div class="form-text text-danger">Full name is required</div>
                            }
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label d-block">Email address</label>
                            <input
                                type='email'
                                className={`${errors.email && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("email", { required: true })}
                            />
                            {
                                errors.email?.type === 'required' &&
                                <div class="form-text text-danger">Email is required</div>
                            }
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label d-block">Phone</label>
                            <input
                                type='text'
                                className={`${errors.phone && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("phone", { required: true })}
                            />
                            {
                                errors.phone?.type === 'required' &&
                                <div class="form-text text-danger">Phone number is required</div>
                            }
                        </div>
                        <div class="mb-3">
                            <label for="amount" class="form-label d-block">Paid amount</label>
                            <input
                                type='number'
                                className={`${errors.amount && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("amount", { required: true })}
                            />
                            {
                                errors.amount?.type === 'required' &&
                                <div class="form-text text-danger">Paid amount is required</div>
                            }
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button as="input" type="submit" value="Add Bill" />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default BillingModal;