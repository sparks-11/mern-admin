import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({  isAdmin,  Component, ...rest }) => {

  return (
    <Route {...rest} render={(props) => {
      if (isAdmin) {
        console.log(isAdmin)
        console.log(Component)
        return <Component />
      } else {
        return (
          <Redirect to={ "/admin/login"} />
        );
      }
    }} />
  )
};

export default ProtectedRoute;
