import { useState, useEffect } from "react";

export const RequestData = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url).then((res) => res.json());
      setData(data);
    };
    fetchData();
  }, [url]);
  return data;
};
