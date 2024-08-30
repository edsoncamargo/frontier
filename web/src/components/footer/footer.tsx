import { FaArrowCircleUp, FaInstagram, FaTiktok } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='bg-primary-1000 py-16 mt-32 bg-icons bg-center bg-cover bg-repeat'>
      <div className='max-w-7xl min-[768px]:px-10 max-[768px]:px-6 m-auto'>
        <div className='flex flex-wrap justify-between gap-6'>
          <div className='flex flex-col gap-4'>
            <em className='bg-logo w-[75px] h-[68px] bg-no-repeat bg-center bg-contain flex'></em>
            <p className='text-paragraph-50 font-faroest'>
              SEJA UM HERÓI OU <br></br> UM FORA-DA-LEI EM FRONTIER.
            </p>
          </div>

          <div>
            <a
              href='#home'
              className='flex gap-2 items-center text-paragraph-50'
            >
              IR PARA O TOPO{' '}
              <span className='text-[8px] p-1 rounded-full border-paragraph-50 border-2'>
                <FaArrowCircleUp />
              </span>
            </a>
          </div>

          <div className='gap-2 flex flex-col flex-wrap'>
            <a href='#about' className='text-paragraph-50 text-nowrap'>
              SOBRE
            </a>

            <a href='#vips' className='text-paragraph-50 text-nowrap'>
              VIPS
            </a>

            <a href='#farms' className='text-paragraph-50 text-nowrap'>
              FARMS
            </a>
          </div>

          <div className='gap-2 flex flex-col flex-wrap'>
            <a href='#houses' className='text-paragraph-50 text-nowrap'>
              HOUSES
            </a>

            <a href='#upgrades' className='text-paragraph-50 text-nowrap'>
              UPGRADES
            </a>

            <a href='#extras' className='text-paragraph-50 text-nowrap'>
              EXTRAS
            </a>
          </div>
        </div>

        <hr className='my-16' />

        <div className='flex flex-col items-center gap-4'>
          <div className='flex justify-center items-center gap-2'>
            <a
              href=''
              className='text-1xl text-paragraph-50 p-2 rounded-full border-paragraph-50 border-2'
            >
              <FaInstagram />
            </a>

            <a
              href=''
              className='text-1xl text-paragraph-50 p-2 rounded-full border-paragraph-50 border-2'
            >
              <FaTiktok />
            </a>
          </div>

          <p className='text-xs text-paragraph-50'>
            ©️ Copyright. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
