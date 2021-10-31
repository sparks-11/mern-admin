import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed w-60 top-20 z-40 bg-white" >
      <div  className="pl-14 pr-10 shadow-md">

        <div className="pt-2">
          <h2 className="font-semibold text-lg my-2">Dashboard</h2>
          <Link to="/admin" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/home.ico" alt="home" />
            <h4 className="text-md font-normal m-2">Home</h4>
          </Link >
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/analytics.ico" alt="analytic" />
            <h4 className="text-md font-normal m-2">Analytic</h4>
          </Link >
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/analytics.ico" alt="sales"/>
            <h4 className="text-md font-normal m-2">Sales</h4>
          </Link >
        </ div>

        <div to="#" className="pt-2">
          <h2 className="font-semibold text-lg my-2">Quick Menu</h2>
          <Link to="/admin/users" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_user.ico" alt="user" />
            <h4 className="text-md font-normal m-2">Users</h4>
          </Link >
          <Link to="/admin/products"className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_product.ico" alt="product" />
            <h4 className="text-md font-normal m-2">Products</h4>
          </Link >
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_rupee.ico" alt="transactions"/>
            <h4 className="text-md font-normal m-2">Transactions</h4>
          </Link >
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_account.ico" alt="reports" />
            <h4 className="text-md font-normal m-2">Reports</h4>
          </Link >
        </ div>

        <div  className="pt-2">
          <h2 className="font-semibold text-lg my-2">Notifiaction</h2>
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_mail_2.ico" alt="mail" />
            <h4 className="text-md font-normal m-2">Mali</h4>
          </Link >
          <Link to="/admin/orders" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_feedback.ico" alt="feedback" />
            <h4 className="text-md font-normal m-2">Orders</h4>
          </Link>
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_sms.ico" alt="sms"/>
            <h4 className="text-md font-normal m-2">Feedback</h4>
          </Link >
        </div>

        <div className="pt-2 pb-5">
          <h2 className="font-semibold text-lg my-2">Staff</h2>
          <Link to="/admin/manage" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_maintenance.ico" alt="manage" />
            <h4 className="text-md font-normal m-2">Manage</h4>
          </Link>
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/analytics.ico" alt="analytics" />
            <h4 className="text-md font-normal m-2">Analytics</h4>
          </Link >
          <Link to="#" className="hover:bg-gray-100 flex rounded-lg items-center px-4">
            <img className="h-5" src="/images/icons8_download_graph_report.ico" alt="reports" />
            <h4 className="text-md font-normal m-2">Reports</h4>
          </Link >
        </div>
        

      </div>
    </div>
  )
}

export default Sidebar;

