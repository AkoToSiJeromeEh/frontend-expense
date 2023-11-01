import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ExpenseList from './pages/ExpenseList';
import ExpenseStat from './pages/ExpenseStat';
import About from './pages/About';
import HomeLayout from './components/HomeLayout';
import LandingLayout from './components/LandingLayout';
import AddContent from './pages/AddContent';
import { Page404 as PageNotFound } from './components/Page404';
import UpdateReminder from './components/UpdateReminder';
import PrivateRoutes from './hooks/private/PrivateRoutes';
import { AuthProvider } from './hooks/auth/auth';
import './App.css';
import 'animate.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="expenseStat" element={<ExpenseStat />} />
          <Route path="addexpense" element={<AddContent />} />
          <Route path="expenseList" element={<ExpenseList />} />
          <Route path="expenseList/update/:id" element={<UpdateReminder />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
