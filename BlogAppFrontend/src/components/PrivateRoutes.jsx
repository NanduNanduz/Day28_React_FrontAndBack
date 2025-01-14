import React from 'react'
import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const token = sessionStorage.getItem('logintoken');
    let verifyUser = false;
    if(token){
        verifyUser=true;
    }
  return (
    <div>
        {/* outlet is a respective component .it will load when the user is verified */}
      verifyUser?<Outlet/>:<Navigate to = {'/'}/>
    </div>
  )
}

export default PrivateRoutes
