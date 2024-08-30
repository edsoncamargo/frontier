import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ErrorPage } from './pages/error-page';
import { Login } from './pages/admin/login/login';
import Root from './pages/normal/root';
import RootAdmin from './pages/admin/root-admin';

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}></Route>

        <Route path='/admin' element={<RootAdmin />}>
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
