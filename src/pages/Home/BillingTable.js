import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const BillingTable = ({ handleShow, setId, deleteModalShow, }) => {
    const [billings, setBillings] = useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/billing-list?page=${page}&size=${size}`)
            // console.log(data)
            setBillings(data.data)
        })()
    }, [page, billings])

    useEffect(() => {
        fetch('http://localhost:5000/api/billing-count')
            .then(res => res.json())
            .then(data => {
                const count = data.totalBill;
                const pages = Math.ceil(count / size);
                setPageCount(pages)
            })
    }, [size])

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
                                <td>{index + 1}</td>
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