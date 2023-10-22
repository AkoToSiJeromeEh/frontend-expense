
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';
const PrivateRoutes = () => {

   const {username} = useAuth()

  return !username ? (
     <Navigate to="/login" /> 
  ) : (
    <Outlet />  
  );
};

export default PrivateRoutes;
