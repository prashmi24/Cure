import React, { useEffect, useState } from "react";
import { token } from "../config.js";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message || "Something went wrong");
        }
        setData(result.data || []);
      } catch (error) {
        setError(error.message || "An error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
