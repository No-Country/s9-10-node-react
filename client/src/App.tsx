import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NavbarScreen } from './Components';
import { useAuthStore } from "./store/auth";
//add lazy loading to all pages
const Home = lazy(() => import('./pages/Home/Home'));
const Logout = lazy(() => import('./pages/Login/Login'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const AdminPanel = lazy(() => import('./pages/AdminPanel/AdminPanel'));


(async function (){
   useAuthStore.getState().getSession();
})()


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <NavbarScreen />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='admin' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
