import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const useFetchData = (url, options = {}) => {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          method: options.method || "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            ...options.headers,
          },
          body: options.body ? JSON.stringify(options.body) : null,
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Something went wrong");
        }

        // Attempt to parse the response
        const result = await res.json();
        setData(result.data || result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Cleanup function to abort fetch on component unmount
    return () => {
      controller.abort();
    };
  }, [url, options.method, options.body, token]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
