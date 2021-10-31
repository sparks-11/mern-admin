import React from 'react'
import { Link } from 'react-router-dom';

const ManageAdmin = () => {
  return (
      <div className="top-20 ml-60 z-30">
      <h3 className="p-6 text-2xl font-bold">Manage Staffs & Products</h3>
      <div className="text-2xl flex flex-wrap gap-12 mx-14 px-20 items-center ">
        <Link to="/admin/newuser">
          <div className="w-72 h-72 rounded-lg flex items-center justify-center bg-blue-500 text-white shadow-sm hover:bg-blue-600 transition-all ease-linear ">
            <h3 className=" font-bold">Create User</h3>
          </div>
        </Link>
        <Link to="/admin/users">
          <div className="w-72 h-72 rounded-lg flex items-center justify-center bg-blue-500 text-white shadow-sm hover:bg-blue-600 transition-all ease-linear ">
            <h3 className=" font-bold">Update User</h3>
          </div>
        </Link>
        <Link to="/admin/newproduct">
          <div className="w-72 h-72 rounded-lg flex items-center justify-center bg-yellow-300 text-white shadow-sm hover:bg-yellow-400 transition-all ease-linear ">
            <h3 className=" font-bold">Create Product</h3>
          </div>
        </Link>
        <Link to="/admin/products">
          <div className="w-72 h-72 rounded-lg flex items-center justify-center bg-yellow-300 text-white shadow-sm hover:bg-yellow-400 transition-all ease-linear ">
            <h3 className=" font-bold">Update Product</h3>
          </div>
        </Link>
      </div>
      </div>
  )
}

export default ManageAdmin;
