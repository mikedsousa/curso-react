import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatornado post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // Loading
  const [loading, setLoading] = useState(false);

  //Erros

  const [error, setError] = useState(null);

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
    const fetchData = async () => {
      // Tratando erros
      try {
        setLoading(true);

        const res = await fetch(url);
        const data = await res.json();


        setData(data);
      } catch (error) {
        console.log(error.message)
        setError("Houve algum erro na requisição")
      }

      setLoading(false);

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

  return { data, httpConfig, loading, error };
};
