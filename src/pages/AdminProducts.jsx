import React from 'react'
import ProductsList from '../components/ProductsList';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';


const AdminUsers = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <ProductsList />
    </div>
  )
}

export default AdminUsers;