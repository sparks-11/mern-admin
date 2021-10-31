import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const ProductsList= () => {
  
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product.products)
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  };

const columns = [
  { field: '_id', headerName: 'ID', width: 220 },
  {
    field: 'Products',
    headerName: 'Products',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-3 text-md font-medium">
          <img className="w-10 h-10 rounded-full object-cover" src={params.row.img} alt="profile" />
          {params.row.title}
      </div>
    )}
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 120,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 180,
  },
  {
    field: 'action',
    headerName: 'action',
    width: 150,
    renderCell : (params)=> {
      return (
          <div className="flex items-center gap-8">
            <Link to={"product/" + params.row._id}>
            <button className="flex items-center bg-green-300 shadow-sm hover:shadow-md  p-2 rounded-lg">
                <img className="h-5" src="/images/icons8_edit.ico" alt="view" />
          </button>
          </Link>
          <Link to="#">
            <button
              className="flex items-center bg-red-300 shadow-sm hover:shadow-md p-2 rounded-lg"
              onClick={() => handleDelete(params.row._id)}
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
      <h1 className="text-3xl font-bold my-5 px-5">Products</h1>
      <div className="w-full px-4" style={{height:"550px"}}>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row)=>row._id}
          pageSize={8}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default ProductsList;
