import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const CreateProduct = () => {

  const [inputs, setInputs]= useState([])
  const [file, setFile]= useState(null)
  const [cat, setCat]= useState([])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleCategories = (e) => {
    setCat(e.target.value.split(","))
  }

  const handleClick = (e) => {
    e.preventDefault()
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
      const product = {...inputs, img:downloadURL, categories:cat};
        console.log(product)
      addProduct(product, dispatch);
    });
  }
);
  }



  return (
    <>
      <div className="top-20 ml-60 z-30">
          <h3 className="p-6 text-2xl font-bold">New Product</h3>
          <form action="">
        <div className="flex flex-wrap mx-8 items-center ">
            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="UserName">Product Name</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="UserName" placeholder="Product name" name="title" onChange={ handleChange}/>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="desc">Description</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="desc" placeholder="for making pipes" name="des" onChange={ handleChange}/>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="categories">Categories</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="categories" placeholder="pure, high-quality" onChange={ handleCategories} />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="size">Size</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="number" id="size" placeholder="5mm" name="size" onChange={ handleChange}/>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="color">Color</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="color" placeholder="dark-blue" name="color" onChange={ handleChange}/>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Stock">Stocks</label>
              <select className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="" id="Stock" placeholder="name" name="stock" onChange={ handleChange} >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="price">Price</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="number" id="price" placeholder=" $ 123" name="price" onChange={ handleChange} />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4 py-8">
              <input className="cursor-pointer" type="file" id="file"
                onChange={ e=>setFile((e.target.files[0]))} />
            </div>

          </div>
          <div className="mx-14 my-4" to="/admin/newuser">
          <button className="bg-green-400 text-lg font-semibold text-white p-2 px-4 rounded-lg  hover:shadow-lg" onClick={handleClick} type="submit">Create</button>
          </div>
          </form>
      </div>
      </>
  )
}

export default CreateProduct;
