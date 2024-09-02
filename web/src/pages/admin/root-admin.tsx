import { Outlet } from 'react-router-dom';

export function RootAdmin() {
  return (
    <main className='p-6 box-border'>
      <Outlet />
    </main>
  );
}

export default RootAdmin;
