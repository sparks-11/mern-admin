import React, { useEffect} from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, getUsers } from '../redux/apiCalls';

const UsersList = () => {


  const dispatch = useDispatch()
  const users = useSelector(state=>state.users.users)

  useEffect(() => {
    getUsers(dispatch)
  },[dispatch])

  const handleDelate = (id) => {
    deleteUsers(id,dispatch)
  };

const columns = [
  { field: '_id', headerName: 'ID', width: 220 },
  {
    field: 'Users',
    headerName: 'Users',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-3 text-md font-medium">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.img} alt="profile" />
          {params.row.name}
      </div>
    )}
  },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'isAdmin',
    headerName: 'Admin',
    width: 120,
  },
  {
    field: 'action',
    headerName: 'action',
    width: 150,
    renderCell : (params)=> {
      return (
          <div className="flex items-center gap-8">
            <Link to={"user/" + params.row._id}>
            <button className="flex items-center bg-green-300 shadow-sm hover:shadow-md  p-2 rounded-lg">
                <img className="h-5" src="/images/icons8_edit.ico" alt="view" />
          </button>
          </Link>
          <Link to="#">
            <button
              className="flex items-center bg-red-300 shadow-sm hover:shadow-md p-2 rounded-lg"
              onClick={() => handleDelate(params.row._id)}
            >
                <img className="h-5" src="/images/icons8_trash_can.ico" alt="view" />
            </button>
          </Link>
          </div>
      )}
  },
];

  return (
    <div className="top-20 ml-60 z-30">
      <h1 className="text-3xl font-bold my-5 px-5">Users</h1>
      <div className="w-full px-4" style={{height:"550px"}}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={8}
          getRowId={(row)=>row._id}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default UsersList;
