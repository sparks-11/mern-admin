import React from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import UsersList from '../components/UsersList';

const AdminUsers = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <UsersList />
    </div>
  )
}

export default AdminUsers;
