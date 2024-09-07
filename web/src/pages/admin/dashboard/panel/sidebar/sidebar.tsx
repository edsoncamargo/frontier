import {
  FaArrowUpFromGroundWater,
  FaGlobe,
  FaHouse,
  FaPlus,
  FaStar,
  FaWheatAwn,
} from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  function setActiveClassIfCurrentPage(path: string) {
    const classActive =
      location.pathname === path
        ? 'text-primary-950 border-primary-950 hover:border-primary-950'
        : 'border-zinc-800';
    return classActive;
  }

  return (
    <aside className='h-[100vh] fixed left-0 top-0 bg-zinc-950 p-4 box-border shadow-lg overflow-hidden'>
      <div className='flex flex-col h-full justify-between text-paragraph-50'>
        <ul className='flex flex-col items-center gap-4'>
          <li className='h-8 w-8 flex justify-center items-center mb-8'>
            <p className='font-faroest text-3xl text-primary-950'>F</p>
          </li>

          <li
            className={`h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all
              ${setActiveClassIfCurrentPage('/admin/dashboard/vips')}`}
          >
            <Link to='/admin/dashboard/vips'>
              <FaStar />
            </Link>
          </li>

          <li
            className={`h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all
              ${setActiveClassIfCurrentPage('/admin/dashboard/farms')}`}
          >
            <Link to='/admin/dashboard/farms'>
              <FaWheatAwn />
            </Link>
          </li>

          <li
            className={`h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all
              ${setActiveClassIfCurrentPage('/admin/dashboard/houses')}`}
          >
            <Link to='/admin/dashboard/houses'>
              <FaHouse />
            </Link>
          </li>

          <li
            className={`h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all
              ${setActiveClassIfCurrentPage('/admin/dashboard/upgrades')}`}
          >
            <Link to='/admin/dashboard/upgrades'>
              <FaArrowUpFromGroundWater />
            </Link>
          </li>

          <li
            className={`h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all
              ${setActiveClassIfCurrentPage('/admin/dashboard/extras')}`}
          >
            <Link to='/admin/dashboard/extras'>
              <FaPlus />
            </Link>
          </li>
        </ul>

        <ul>
          <li
            className='h-8 w-8 flex justify-center items-center bg-zinc-900 border-2 
              rounded-md hover:border-paragraph-50 transition-all'
          >
            <Link to='/'>
              <FaGlobe />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
