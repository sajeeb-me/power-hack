import { useEffect, useState } from 'react';
import axios from 'axios';

const useBillings = () => {
    const [billings, setBillings] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://upper-lumberjack-28379.herokuapp.com/api/billing-list')
            // console.log(data)
            setBillings(data.data)
        })()
    }, [])
    return [billings, setBillings]
};

export default useBillings;