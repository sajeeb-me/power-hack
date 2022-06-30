import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <section>
            <Header />
            <body>
                {children}
            </body>
        </section>
    );
};

export default Layout;