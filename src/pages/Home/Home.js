import React, { useState } from 'react';
import BillingTable from './BillingTable';
import TableActionBar from './TableActionBar';

import BillingModal from './BillingModal';

const Home = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <TableActionBar handleShow={handleShow} />
            <BillingTable handleShow={handleShow} setId={setId} />
            <BillingModal handleClose={handleClose} show={show} id={id} setId={setId} />
        </section>
    );
};

export default Home;