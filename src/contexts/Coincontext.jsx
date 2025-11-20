import { createContext, useEffect, useState } from "react";
export const CoinContext = createContext();
const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: { api_key:import.meta.env.VITE_API_KEY, vs_currency: "usd" },
    };
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoins(response))
      .catch((err) => console.error(err));
    };
    const contextValue = {
      currency,allCoins,setCurrency
  };
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};
export default CoinContextProvider;
