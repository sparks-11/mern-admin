import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Adminpage from './pages/Adminpage';
import AdminUsers from './pages/AdminUsers';
import AdminProducts from './pages/AdminProducts';
import AdminProduct from './pages/AdminProduct';
import AdminUser from './pages/AdminUser';
import AdminNewUser from './pages/AdminNewUser';
import AdminNewProduct from './pages/AdminNewProduct';
import AdminManage from './pages/AdminManage';
import AdminLogin from './pages/AdminLogin';
import AdminOrders from './pages/AdminOrders';
import AdminOrder from './pages/AdminOrder';
import { useSelector } from 'react-redux';

const App = () => {

  const isAdmin = useSelector(state => state.user.isAdmin)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={AdminLogin} />
        {isAdmin ? (
        <>
          <Route exact path="/admin" component={Adminpage} />
          <Route  exact path="/admin/users"  component={AdminUsers}></Route>
          <Route  path="/admin/user/:userId"  component={AdminUser}></Route>
          <Route  path="/admin/newuser"  component={AdminNewUser}></Route>
          <Route  exact path="/admin/products"  component={AdminProducts}></Route>
          <Route  path="/admin/product/:productId"  component={AdminProduct}></Route>
          <Route path="/admin/newproduct" component={AdminNewProduct}></Route>
          <Route exact path="/admin/manage"><AdminManage /></Route>
          <Route exact path="/admin/orders"><AdminOrders /></Route>
          <Route path="/admin/orders/:orderId" component={AdminOrder}></Route>
            
        </>
        
        ): <Redirect to="/admin/login" /> }
        
      </Switch>

    </BrowserRouter>
  )
}

export default App;
