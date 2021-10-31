import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../redux/apiCalls";

function Topbar() {

  const dispatch = useDispatch()
  const img = useSelector(state=>state.user.img)
  const history =useHistory() 
  const handleLogout = (e) => {
    e.preventDefault();
    logoutAdmin(dispatch);
    history.push('/admin/login')
  }

  return (
    <>

      <nav className="sticky top-0 z-50 bg-white px-2 flex items-center justify-between py-4 shadow-lg">
          <Link to="/" className="flex items-center">
          <img
            style={{ height: 45 }}
            src="/images/icons8_dolphin.ico"
            alt="logo"
          />
          <i><h1 className="text-xl md:text-3xl font-bold text-logo-blue ml-4">Polymers AdminPanel</h1></i>
          </Link>
          <ul className="flex items-center">
          <li>
  
            <Link className="relative" to="#">
              <img className=" h-7" src="/images/notification.ico" alt="notification" />
                <span className=" absolute p-1 top-0 left-0  text-white bg-red-600 rounded-full text-text-xxs font-semibold" >7</span>
            </Link>

          </li>
          <li className="ml-6">
            <Link className="relative" to="#">
              <img className="h-7" src="/images/globe.ico" alt="globe" />
              <span className="absolute p-1 top-0 left-0 text-white bg-red-600 rounded-full text-text-xxs font-semibold" >4</span>
            </Link>
          </li>
          <li className="ml-6">
            <Link to="#">
              <img className="h-7" src="/images/settings.ico" alt="settings" />
            </Link>
          </li>
          <li className="ml-6">
          <button className="bg-deep-blue text-sm font-normal text-white p-2 px-4 rounded-lg  hover:bg-red-800 " onClick={handleLogout}>Logout</button>
          </li>
            <li className="ml-6">
              <Link to="/cart">
                <div className="">
                <img className="w-12 h-12 rounded-full object-cover"
                  src={img} alt="profile" />
                </div>
              </Link>
            </li>
          </ul>
      </nav>

    </>
  )
}

export default Topbar;
