import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../contexts/Coincontext";
import { Link } from "react-router-dom";
export default function Home() {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoins);
    }
  };
  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };
  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <section className="px-2.5 pb-25">
      <div className=" py-20 flex flex-col items-center gap-10">
        <h1 className="text-center text-4xl font-semibold">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className=" text-[#e3e3e3] text-center">
          Welcome to the world's largest cryptocurrency marketplace. <br />
          Sign up to explore more about cryptos
        </p>
        <form
          onSubmit={searchHandler}
          className="p-1.5 w-full md:w-1/3 bg-white rounded-[5px] text-xl flex justify-between items-center gap-2.5"
        >
          <input
            type="text"
            placeholder="Search crypto... "
            className="flex-1 text-base pl-2.5 outline-none text-[#393939]"
            value={input}
            onChange={inputHandler}
                      required
                      list="coinlist"
                  />
                  
                  <datalist id="coinlist">
                      {allCoins.map((item,index)=>(<option key={index} value={item.name}/>))}
                  </datalist>
          <button
            type="submit"
            className="bg-[#7927ff] text-white text-base py-1 md:px-7.5 rounded-[5px] cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="max-w-[800px] mx-auto rounded-[15px] bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))] ">
        <div className="grid grid-cols-[0.5fr_3fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-3.75 px-4 items-center border-b border-b-[#3c3c3c]">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="hidden md:block md:text-right ">Market Cap</p>
        </div>
        {(displayCoin || []).slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`}
            key={index}
            className="grid grid-cols-[0.5fr_3fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-3.75 px-4 items-center border-b border-b-[#3c3c3c] last:border-b-0"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-1">
              <img src={item.image} alt="" className="w-4 h-4" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`text-center ${
                item.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="hidden md:block md:text-right">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
