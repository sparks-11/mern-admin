import React, { useEffect, useState } from 'react'
import { userRequest } from '../requestMethod'
import {format} from "timeago.js" 

const WidgetLg = () => {

    const [orders,setOrders]=useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/all")
        setOrders(res.data)
      } catch (err) {
        
      }
    };
    getOrders();
  },[])


  return (
    <div className="flex-1 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Latest Transactions</h2>

      <div className="flex flex-col mt-4 w-full space-x-5">

        <div className="flex justify-between text-left text-xl pb-4">
          <h2>Customer Id</h2>
          <h2>Date</h2>
          <h2>Amount</h2>
          <h2>Status</h2>
        </div>

        {orders.map((order) => (
            
        <div className="flex items-center justify-between pb-2 text-left" key={order._id}>
            <div className="flex items-center">
              <div  className="w-20 overflow-hidden text-left">
                    <h3 className="text-lg font-bold ">{order.userId}</h3>
              </div>
          </div>
          <div>
                <h3>{format( order.createdAt)}</h3>
          </div>
          <div>
            {`$ ${order.amount}`}
          </div>
          <div>
          <button className="bg-gray-300 font-semibold shadow-sm hover:shadow-md p-2 rounded-lg">{order.status}
          </button>
          </div>
        </div>
          ))
        }

      </div>

    
    </div>
  )
}

export default WidgetLg;
