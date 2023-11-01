
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';
const PrivateRoutes = () => {

   const {username , token} = useAuth()
   

  return username && token ? (
    <Outlet />  
  ) : (
    
    <Navigate to="/" /> 
  );
};

export default PrivateRoutes;
