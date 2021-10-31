import { useState } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { addUsers } from "../redux/apiCalls";
import { useDispatch } from "react-redux";


const CreateUser = () => {

  const [inputs, setInputs]= useState([])
  const [file, setFile]= useState(null)

  const dispatch = useDispatch()
  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleCreate = (e) => {
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
      const user = {...inputs, img:downloadURL};
        console.log(user)
      addUsers(user, dispatch);
    });
  }
);
  }
  return (
    <>
      <div className="top-20 ml-60 z-30">
          <h3 className="p-6 text-2xl font-bold">New User</h3>
          <form action="">
        <div className="flex flex-wrap mx-8 items-center ">
            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="UserName">UserName</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="UserName" name="name" onChange={handleChange} placeholder="john wick" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="dob">dob</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="dob" name="dob" onChange={handleChange}  placeholder="dob" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Email">Email</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="email" id="Email" name="email" onChange={handleChange}  placeholder="name" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Password">Password</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="password" id="Password" name="password" onChange={handleChange}  placeholder="name" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Phone">Phone</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text"  id="Phone" name="mobile" onChange={handleChange}  placeholder="phone" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Address">Address</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="text" id="Address" name="address" onChange={handleChange}  placeholder="name" />
            </div>

            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="file">Upload Image</label>
              <input className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="file" id="file"
                onChange={ e=>setFile((e.target.files[0]))}  />
            </div>


            <div className="flex flex-col gap-8 mx-8 my-4">
              <label className="font-semibold text-lg" htmlFor="Admin">isAdmin</label>
              <select className="w-96 outline-none border-2 rounded-md border-gray-500 p-2 text-md text-gray-400 font-medium" type="" id="Admin" placeholder="name" name="isAdmin" onChange={handleChange} >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

          </div>
          <div className="mx-14 my-4" to="/admin/newuser">
          <button className="bg-green-400 text-lg font-semibold text-white p-2 px-4 rounded-lg  hover:shadow-lg" onClick={handleCreate}>Create</button>
          </div>
          </form>
      </div>
      </>
  )
}

export default CreateUser
