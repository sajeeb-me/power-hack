import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const BillingTable = ({ billings, handleShow, setId, deleteModalShow, page, pageCount, setPage }) => {


    const handleEdit = id => {
        setId(id);
        handleShow()
    }
    const handleDelete = id => {
        setId(id);
        deleteModalShow()
    }

    return (
        <section className='container rounded'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Billing ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        billings.map((billing, index) =>
                            <tr key={index}>
                                <td>{billing.billingId}</td>
                                <td>{billing.fullName}</td>
                                <td>{billing.email}</td>
                                <td>{billing.phone}</td>
                                <td>{billing.amount}</td>
                                <td>
                                    <Button variant="link" className='text-decoration-none' onClick={() => handleEdit(billing._id)}>Edit</Button>
                                    |
                                    <Button variant="link" className='text-danger text-decoration-none' onClick={() => handleDelete(billing._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
            <div className='mb-5'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <Button key={number} variant={number === page ? 'primary' : 'outline-secondary'} className='mx-1' onClick={() => setPage(number)}>
                            {number + 1}
                        </Button>)
                }
            </div>
        </section>
    );
};

export default BillingTable;