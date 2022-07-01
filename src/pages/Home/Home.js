import React, { useEffect, useState } from 'react';
import BillingTable from './BillingTable';
import TableActionBar from './TableActionBar';
import axios from 'axios';

import BillingModal from './BillingModal';
import DeleteModal from './DeleteModal';

const Home = () => {
    const [id, setId] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dltModalShow, setDltModalShow] = useState(false);
    const deleteModalShow = () => setDltModalShow(true);
    const deleteModalClose = () => setDltModalShow(false);

    const [billings, setBillings] = useState([])
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [searchedText, setSearchedText] = useState('');
    const size = 10;

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://upper-lumberjack-28379.herokuapp.com/api/billing-list?page=${page}&size=${size}`)
            const bills = data.data
            // console.log(bills);
            const match = bills.filter(bill => (bill.fullName).toLowerCase().includes((searchedText).toLowerCase()) || (bill.email).toLowerCase().includes((searchedText).toLowerCase()))
            setBillings(match)
        })()
    }, [page, searchedText, billings])

    useEffect(() => {
        fetch('https://upper-lumberjack-28379.herokuapp.com/api/billing-count')
            .then(res => res.json())
            .then(data => {
                const count = data.totalBill;
                const pages = Math.ceil(count / size);
                setPageCount(pages)
            })
    }, [size])

    return (
        <section>
            <TableActionBar
                handleShow={handleShow}
                setSearchedText={setSearchedText}
            />
            <BillingTable
                billings={billings}
                handleShow={handleShow}
                setId={setId}
                deleteModalShow={deleteModalShow}
                page={page}
                setPage={setPage}
                pageCount={pageCount}
            />
            <BillingModal
                handleClose={handleClose}
                show={show}
                id={id}
                setId={setId}
            />
            <DeleteModal
                deleteModalClose={deleteModalClose}
                dltModalShow={dltModalShow}
                id={id}
                setId={setId}
            />
        </section>
    );
};

export default Home;