import { useEffect, useState } from 'react';
import axios from 'axios';

const useBillings = () => {
    const [billings, setBillings] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/api/billing-list')
            // console.log(data)
            setBillings(data.data)
        })()
    }, [])
    return [billings, setBillings]
};

export default useBillings;