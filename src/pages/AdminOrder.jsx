import React from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SingleOrder from '../components/SingleOrder';


const AdminOrder = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <SingleOrder />
    </div>
  )
}

export default AdminOrder;
