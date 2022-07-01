import React, { useState } from 'react';
import BillingTable from './BillingTable';
import TableActionBar from './TableActionBar';

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

    return (
        <section>
            <TableActionBar
                handleShow={handleShow}
            />
            <BillingTable
                handleShow={handleShow}
                setId={setId}
                deleteModalShow={deleteModalShow}
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