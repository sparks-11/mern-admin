import React, { useEffect, useMemo, useState } from 'react'
import Charts from './Charts';
import FeaturedInfo from './FeaturedInfo';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';
import { userRequest } from '../requestMethod';

const Infowidgets = () => {
  const [userStat, setUserStat] = useState([])
  
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStat = async () => {
      try {
        const res = await userRequest.get("/users/stats")
        res.data.map(item => {
          return setUserStat(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "ActiveUser": item.total },
          ])
        })
      } catch (err) {
        
      }
    };
    getStat();
  },[MONTHS])

  return (
    <>
      <div className="top-20 ml-60 z-30">
        <FeaturedInfo />
        <Charts className="min-w-6xl " data={userStat} title="User Analytics" dataKey="ActiveUser" grid />
        <div className="flex mt-2">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>

    </>
  )
}

export default Infowidgets;
