import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";

const FeaturedInfo = () => {

const [income, setIncome ]=useState([])
  const [perc, setPerc] = useState([])
  
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest("orders/income")
        setIncome(res.data)
        setPerc(income[1].total * 100 / income[0].total - 100)
      } catch (err) {
        
      }
    };
    getIncome();
},[income])

  return (
    <>
        <div className="mt-2 flex items-center justify-between ">

      <div className="w-96 p-9 shadow-md ">
        <h3 className="text-2xl  font-semibold">Revenue</h3>
        <div className="flex items-center py-4">
            <h4 className="text-3xl font-bold">$ { income[1] ? income[1].total : "500"}</h4>
          <div className="flex items-center">
              <h5 className="text-md font-bold pl-12 pr-6 px-4 ">{perc} %</h5>
              <img src={`/images/icons8_${perc > 0 ? 'up' : 'down'}.ico`} alt="arrow" />
          </div>
        </div>
          <h6 className="text-lg font-light pb-4">Compared to last month</h6>
      </div>

      <div className="w-96 p-9 shadow-md ml-4">
        <h3 className="text-2xl  font-semibold">Sales</h3>
        <div className="flex items-center py-4">
          <h4 className="text-3xl font-bold">$ 4,261</h4>
          <div className="flex items-center">
            <h5 className="text-md font-bold pl-12 pr-6 px-4 ">-1.4</h5>
            <img src="/images/icons8_down.ico" alt="down_arrow" />
          </div>
        </div>
          <h6 className="text-lg font-light pb-4">Compared to last month</h6>
      </div>

      <div className="w-96 p-9 shadow-md ml-4">
        <h3 className="text-2xl  font-semibold">Cost</h3>
        <div className="flex items-center py-4">
          <h4 className="text-3xl font-bold">$ 2,023</h4>
          <div className="flex items-center">
            <h5 className="text-md font-bold pl-12 pr-6 px-4 ">+2.1</h5>
            <img className="" src="/images/icons8_up.ico" alt="down_arrow" />
          </div>
        </div>
          <h6 className="text-lg font-light pb-4">Compared to last month</h6>
      </div>
      </div>
    </>
  )
}

export default FeaturedInfo;
