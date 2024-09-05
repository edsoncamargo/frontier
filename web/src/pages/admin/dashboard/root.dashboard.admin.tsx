import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../../components/sidebar/sidebar';

export function RootDashboard() {
  return (
    <div className='grid -m-6'>
      <Sidebar />

      <div className='h-full ml-[calc(67.2px)] p-10 py-4 overflow-x-hidden'>
        <Outlet />
      </div>
    </div>
  );
}
