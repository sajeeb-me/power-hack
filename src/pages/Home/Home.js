import React from 'react';
import BillingTable from './BillingTable';
import TableActionBar from './TableActionBar';

const Home = () => {
    return (
        <section>
            <TableActionBar />
            <BillingTable />
        </section>
    );
};

export default Home;