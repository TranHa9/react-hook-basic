import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [iserror, setIsError] = useState(false);
    useEffect(() => {

        const ourRequest = axios.CancelToken.source()
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })
                let data = res && res.data ? res.data : [];
                setData(data);
                setLoading(false);
                setIsError(false);
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsError(true);
                    setLoading(false);
                }

            }
        }
        fetchData();
        return () => {
            ourRequest.cancel()
        }
    }, [url]);
    return {
        data, loading, iserror
    }
}
export default useFetch;