import { useState, useEffect } from "react";

const useFetch = (apiFn, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiFn(params);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [apiFn, JSON.stringify(params)]);

  return { data, loading };
};

export default useFetch;
