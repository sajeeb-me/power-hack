import React, { useState } from 'react';
import BillingTable from './BillingTable';
import TableActionBar from './TableActionBar';

import BillingModal from './BillingModal';

const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <TableActionBar handleShow={handleShow} />
            <BillingTable />
            <BillingModal handleClose={handleClose} show={show} />
        </section>
    );
};

export default Home;