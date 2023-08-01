import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [iserror, setIsError] = useState(false);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url)
                let data = res && res.data ? res.data : [];
                setData(data);
                setLoading(false);
                setIsError(false);
            }
            fetchData();
        }
        catch (e) {
            // alert(e.message)
            setIsError(true);
            setLoading(false);
        }
    }, [url]);
    return {
        data, loading, iserror
    }
}
export default useFetch;