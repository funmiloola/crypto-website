import { useContext } from "react";
import { CoinContext } from "../contexts/Coincontext";
import { Link } from "react-router-dom";
export default function Navbar() {
    const { setCurrency } = useContext(CoinContext)
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd" :{
                setCurrency({
                    name:"usd",symbol:"$"
                })
                break;
            }
                 case "eur" :{
                setCurrency({
                    name:"eur",symbol:"€"
                })
                break;
            }
                 case "inr" :{
                setCurrency({
                    name:"inr",symbol:"₹"
                })
                break;
            }
            default: {
                setCurrency({
                    name:"usd",symbol:"$"
                })
            }
      }
    }
  return (
    <section>
          <div className="flex items-center justify-between px-[4%] mid:px-[10%]  mid:py-5 border-b-2 border-b-[#3c3c3c]">
      <Link to="/"> <img src="/logo.png" alt="" className="w-32 md:w-50 "/></Link> 
        <ul className="hidden md:flex gap-10 ">
        <Link to="/"><li className="cursor-pointer">Home</li></Link>  
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
                  </ul>
        <div className="flex items-center gap-4 ">
          <select onChange={currencyHandler} className="py-1.25 px-2 rounded-md border-2 border-white bg-transparent text-white">
            <option value="usd" className="bg-[#09005c] text-white">
              USD
            </option>
            <option value="eur" className="bg-[#09005c] text-white">
              EUR
            </option>
            <option value="inr" className="bg-[#09005c] text-white">
              INR
            </option>
          </select>
          <button className="flex items-center gap-1 mid:gap-2.5 py-1 md:py-2.5 px-1 md:px-6.25 rounded-md md:rounded-[20px] text-[15px] font-medium text-[#393939] bg-white cursor-pointer">
            Sign up <img src="/arrow_icon.png" alt="" className="w-2 h-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
