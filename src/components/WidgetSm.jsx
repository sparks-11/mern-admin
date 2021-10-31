import React, { useEffect, useState } from 'react'
import { userRequest } from '../requestMethod'
import { Link } from 'react-router-dom';
const WidgetSm = () => {

  const [users,setUsers]=useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/find/?new=true")
            setUsers(res.data)
      } catch (err) {
        
      }
    };
    getUsers();
  },[])

  
  return (
    <>
      
      <div className="w-5/12  p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">New Join Members</h2>
        
        {users.map((user) => (
          
        <div className="flex items-center justify-between p-2 px-8 rounded-lg my-3 shadow-md" key={user._id}>
          <div className="flex items-center">
              <img className="w-12 h-12 rounded-full object-cover" src={ `${user.img} ? ${user.img} : "/images/profile1.jpg" `}alt="profile" />
            <div  className="ml-6">
              <h3 className="text-lg font-bold ">{user.name}</h3>
              {/* <h5 className="text-md font-normal">Software Engineer</h5> */}
            </div>
          </div>
            <Link to={"/admin/user/" + user._id}>
          <button className="flex items-center bg-white shadow-sm hover:shadow-md p-2 rounded-lg">
            <img className="h-6" src="/images/icons8_eye.ico" alt="view" />
            <h3 className="ml-2 font-semibold">Display</h3>
          </button>
          </Link>
        </div>
        ))}

      </div>

    </>
  )
}

export default WidgetSm;
