import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ErrorPage } from './pages/error-page';
import { Login } from './pages/admin/login/login';
import { MainDashboard } from './pages/admin/dashboard/main/main.dashboard.admin';
import ProtectRoute from './pages/admin/protect-route.admin';
import Root from './pages/normal/root';
import RootAdmin from './pages/admin/root.admin';
import { RootDashboard } from './pages/admin/dashboard/root.dashboard.admin';

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}></Route>

        <Route path='/admin' element={<RootAdmin />}>
          <Route index element={<Navigate to='login' />} />
          <Route path='login' element={<Login />} />
          <Route
            path='/admin/dashboard'
            element={<ProtectRoute element={RootDashboard} />}
          >
            <Route index element={<Navigate to='main' />} />
            <Route path='main' element={<MainDashboard />} />
          </Route>
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
