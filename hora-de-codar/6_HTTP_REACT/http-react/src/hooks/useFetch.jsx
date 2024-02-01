import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatornado post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // Loading
  const [ loading, setLoading ] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setLoading(false);

      setData(data);
    };

    fetchData();
  }, [url, callFetch]);

  // Refatornado post
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        setLoading(true);

        let fetchOption = [url, config];
        const res = await fetch(...fetchOption);
        json = await res.json();

        setLoading(false);
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading };
};
