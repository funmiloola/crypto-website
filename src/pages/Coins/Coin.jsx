import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../contexts/Coincontext";
import LineChart from "../../components/LineChart";
export default function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        api_key:import.meta.env.VITE_API_KEY,
        vs_currency: "bitcoin",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };
//   const fetchHistoricalData = async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         api_key: "CG-1DS54hdVoJcXaoc8nCRWxcXP",
//         vs_currency: "usd",
//         id: "bitcoin",
//         days: "10",
//       },
//     };

//     fetch(
//       `https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/${coinId}/history?date=2025-10-06`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setHistoricalData(response))
//       .then((response) => console.log("response", response))
//       .catch((err) => console.error(err));
//   };
  useEffect(() => {
    fetchData();
  }, []);
  if (coinData) {
  }
  return (
    <div>
      {coinData ? (
        <div className="px-5">
          <div className="flex flex-col gap-5  items-center">
            <img src={coinData?.image.large} alt="" className="max-w-[100px]" />
            <p className="text-[44px] font-medium">
              {coinData.name}({coinData.symbol.toUpperCase()})
            </p>
          </div>
          <div className="flex justify-center">
        <div className="w-1/2 py-10 px-10 flex flex-col">
              <ul className="flex justify-between  py-2 border-b border-b-[#5f5d5f]">
                <li>Crypto Market Rank</li>
                <li className="font-medium">
                  {currency.symbol}
                  {coinData.market_cap_rank}
                </li>
              </ul>
              <ul className="flex justify-between py-2 border-b border-b-[#5f5d5f]">
                <li>Current Price</li>
                <li className="font-medium">
                  {currency.symbol}
                  {coinData.market_data.current_price[
                    currency.name
                  ].toLocaleString()}
                </li>
              </ul>
              <ul className="flex justify-between py-2 border-b border-b-[#5f5d5f]">
                <li>Market Cap</li>
                <li className="font-medium">
                  {currency.symbol}
                  {coinData.market_data.market_cap[
                    currency.name
                  ].toLocaleString()}
                </li>
              </ul>
              <ul className="flex justify-between py-2 border-b border-b-[#5f5d5f]">
                <li>24 hour high</li>
                <li className="font-medium">
                  {currency.symbol}
                  {coinData.market_data.high_24h[
                    currency.name
                  ].toLocaleString()}
                </li>
              </ul>
              <ul className="flex justify-between py-2 border-b border-b-[#5f5d5f]">
                <li>24 hour Low</li>
                <li className="font-medium">
                  {currency.symbol}
                  {coinData.market_data.low_24h[currency.name].toLocaleString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-[65px] h-[65px] border-[5px] border-[#bdbdbd] border-t-[#4500c6] rounded-full animate-rotate"></div>
        </div>
      )}
    </div>
  );
}
