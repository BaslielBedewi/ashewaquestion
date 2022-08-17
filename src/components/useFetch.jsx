import { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not load data for the resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
        seterror(null);
      })
      .catch((err) => {
        setIsloading(false);
        seterror(err.message);
      });
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;
