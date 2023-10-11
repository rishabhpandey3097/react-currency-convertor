import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
