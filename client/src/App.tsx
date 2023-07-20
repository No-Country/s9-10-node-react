import { Suspense, lazy } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { FooterScreen, Loader } from './Components';

const Home = lazy(() => import('./pages/Home/Home'));
const Logout = lazy(() => import('./pages/Login/Login'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Root = lazy(() => import('./Components/Layout/Root'));
const RankingRol = lazy(() => import('./pages/RankingRol/RankingRol'));
const RankingTeam = lazy(() => import('./pages/RankingTeam/RankingTeam'));
const UserProfile = lazy(() => import('./pages/UserProfile/UserProfile'));
const DashboardCompany = lazy(
  () => import('./pages/DashboardCompany/DashboardCompany')
);
const FormScreen = lazy(() => import('./pages/FormsScreen/FormScreen'));
const CreateForms = lazy(() => import('./pages/CreateForms/CreateForms'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='user' element={<Root />}>
            <Route index element={<DashboardCompany />} />
            <Route path='ranking-rol' element={<RankingRol />} />
            <Route path='ranking-equipos' element={<RankingTeam />} />
            <Route path=':profileId' element={<UserProfile />} />
            <Route path='forms' element={<FormScreen />} />
            <Route path='forms/create' element={<CreateForms />} />
          </Route>
        </Routes>
        <FooterScreen />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
