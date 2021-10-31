import React from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import OrdersList from '../components/OrdersList';


const AdminOrders = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <OrdersList />
    </div>
  )
}

export default AdminOrders;
