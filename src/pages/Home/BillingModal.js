import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

const BillingModal = ({ handleClose, show }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
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


                        <input type="submit" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BillingModal;