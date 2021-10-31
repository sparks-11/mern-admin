import { Link, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import Charts from './Charts';
import { useMemo, useState, useEffect } from 'react';
import {userRequest} from "../requestMethod"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { updateProduct } from '../redux/apiCalls';

const SingleProductA = () => {

  const location = useLocation()
  const productId = location.pathname.split("/")[3]
  const [pstats, setPstats] = useState([])

  const [inputs,setInputs]=useState([])
  const [file,setFile]=useState(null)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default: ;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product = {...inputs, img:downloadURL};
        console.log(product)
      updateProduct(productId, product, dispatch);
    });
  }
);
  }
  
  const product = useSelector(state => state.product.products.find(product => product._id === productId));

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
        const res = await userRequest.get("/orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id
        })
        list.map(item => {
          return setPstats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "Sales": item.total },
          ])
        })
      } catch (err) {
        
      }
    };
    getStat();
  },[productId,MONTHS])

  return (
    <>
      <div className="top-20 ml-60 z-30">
        
        <div className="flex items-center justify-between p-6">
          <h3 className="text-2xl font-bold">Edit Product</h3>
          <Link to="/admin/newproduct">
          <button className="bg-green-400 text-white p-2 px-4 rounded-lg  hover:shadow-lg">Create</button>
          </Link>
        </div>

        <div className="flex items-center mx-8">

          <div className="w-96">
            <Charts data={pstats} title="Sales Performance (last 3 months)" dataKey="Sales" grid />
          </div>

          <div className="flex-1 shadow-lg ml-8">
            <div className="flex justify-around">


            <div className="flex items-center pl-6 py-8 h-40">
                <img className="w-20 h-20 rounded-full object-cover shadow-md"
                  src={ product.img} alt="profile" />
              <div  className="ml-6">
                  <h3 className="text-lg font-bold ">{ product.title}</h3>
              </div>
            </div>

            <div className="w-64  m-4 text-lg flex flex-wrap justify-between">
              <h3 className="font-bold ">id :</h3>
                <h5 className="font-normal text-gray-400">{ product._id}</h5>
              <h3 className="font-bold w-32">sales :</h3>
              <h5 className="font-normal text-gray-400">2321</h5>
              <h3 className="font-bold w-32">active :</h3>
              <h5 className="font-normal text-gray-400">yes</h5>
              <h3 className="font-bold w-32">in stock :</h3>
              <h5 className="font-normal text-red-400">{product.stock}</h5>
              <h3 className="font-bold w-32">price :</h3>
                <h5 className="font-normal text-gray-400">$ { product.price}</h5>

              </div>
              
            </div>
          </div>

          </div>


          <div className="flex-1 shadow-lg m-8 pl-10 pb-6">
            <h3 className="m-8 text-lg font-semibold">Update Product</h3>
          <div className="flex justify-evenly">
            

            <div >

              <div className="pl-9 pb-6">
                  <h2 className="text-xl text-gray-300 font-bold pb-4">Product Name</h2>
                  <input className="border-b-2 outline-none w-60 text-gray-600 font-semibold text-lg" type="text" onChange={handleChange} name="title" placeholder={product.title} />
              </div>

              <div className="pl-9 pb-6">
                  <h2 className="text-xl text-gray-300 font-bold pb-4">Product Price</h2>
                  <input className="border-b-2 outline-none w-60 text-gray-600 font-semibold text-lg" type="text" onChange={handleChange} name="price" placeholder={product.price} />
              </div>
                
              <div className="flex flex-col gap-4 mx-8 pb-6">
                <label className="font-semibold text-lg" htmlFor="Address">In Stock</label>
                <select className="w-60 outline-none border-2 rounded-md border-gray-500 p-1 text-md text-gray-400 font-medium"  id="Address" onChange={handleChange} name="stock" >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

          </div>
              <div className="">
                <div className="flex flex-col items-center gap-10 justify-between ">
                  <div className="py-8 mr-4">
                    <img className="w-48 h-40 rounded-lg object-cover shadow-md" src={product.img} alt="profile" />
                    <label
                      className="bg-green-300 text-white p-2 px-4 rounded-lg mt-2 ml-14 cursor-pointer hover:shadow-lg"
                      htmlFor="file"
                    >Upload</label>
                    <input type="file" id="file" style={{display:"none"}}  onChange={ e=>setFile((e.target.files[0]))}  />
                  </div>
                  <button className="bg-deep-blue text-white p-2 px-4 rounded-lg  hover:shadow-lg" onClick={handleUpdate}>Update</button>
                </div>
              </div>
          </div>
          </div>


        </div>
    </>
  )
}

export default SingleProductA;
