import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [cur, setCur] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCur(value);
        }, delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return cur;
}

export default useDebounce;
