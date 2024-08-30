import { Outlet } from 'react-router-dom';

export function RootAdmin() {
  return (
    <main className='p-6'>
      <p className='text-paragraph-50'>Route RootAdmin works...</p>
      <Outlet />
    </main>
  );
}

export default RootAdmin;
