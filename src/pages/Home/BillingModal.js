import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

const BillingModal = ({ handleClose, show, id, setId }) => {
    const [billingId, setBillingId] = useState('')
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const generateBillingId = () => {
        const num = Math.round(Math.random() * 10000);
        const numString = num + '';
        if (numString.length === 4) {
            setBillingId(num);
        }
        else {
            return generateBillingId();
        }
    }

    const onSubmit = (newBill) => {
        id ?
            (async () => {
                // console.log(id)
                const { data } = await axios.patch(`https://upper-lumberjack-28379.herokuapp.com/api/update-billing/${id}`, newBill)
                if (!data.success) {
                    reset()
                    handleClose()
                    setId('')
                    return
                }
                reset()
                handleClose()
                setId('')
                toast.success('Updated successfully')
            })()
            :
            (async () => {
                // console.log("id nai")
                await generateBillingId()
                if (billingId) {
                    const generateBill = {
                        billingId,
                        ...newBill
                    }
                    // console.log(generateBill);
                    const { data } = await axios.post('https://upper-lumberjack-28379.herokuapp.com/api/add-billing', generateBill)
                    if (!data.success) {
                        reset()
                        handleClose()
                        setId('')
                        return
                    }
                    reset()
                    handleClose()
                    setId('')
                    toast.success(data.message)
                }
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
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <div className="form-text text-danger">
                                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label d-block">Phone</label>
                            <input
                                type='text'
                                className={`${errors.phone && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone number is required"
                                    },
                                    pattern: {
                                        value: /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/,
                                        message: 'Provide a valid 11 digit number'
                                    }
                                })}
                            />
                            <div className="form-text text-danger">
                                {errors.phone?.type === 'required' && <span>{errors.phone.message}</span>}
                                {errors.phone?.type === 'pattern' && <span>{errors.phone.message}</span>}
                            </div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label d-block">Paid amount</label>
                            <input
                                type='number'
                                className={`${errors.amount && 'border border-danger'} w-100 p-1 rounded`}
                                {...register("amount", {
                                    required: {
                                        value: true,
                                        message: "Paid amount is required"
                                    },
                                    min: {
                                        value: 1,
                                        message: 'Paid amount can not be less then one(1)'
                                    }
                                })}
                            />
                            <div className="form-text text-danger">
                                {errors.amount?.type === 'required' && <span>{errors.amount.message}</span>}
                                {errors.amount?.type === 'min' && <span>{errors.amount.message}</span>}
                            </div>
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