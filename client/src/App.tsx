import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { FooterScreen } from './Components';
import Root from './Components/Layout/Root';

//add lazy loading to all pages
const Home = lazy(() => import('./pages/Home/Home'));
const Logout = lazy(() => import('./pages/Login/Login'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const AdminPanel = lazy(() => import('./pages/AdminPanel/AdminPanel'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='admin' element={<AdminPanel />} />
          <Route path='user' element={<Root />}>
            <Route index element={'Dashboard'} />
            <Route path='ranking-general' element={'Ranking general'} />
            <Route path='ranking-equipos' element={'Ranking equipos'} />
            <Route path='profile' element={'Perfil del usuario'} />
          </Route>
        </Routes>
        <FooterScreen />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
