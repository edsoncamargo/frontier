import { FaInstagram, FaTiktok } from 'react-icons/fa';

import { Button } from '../../../components/buttons/button';
import { Header } from './header';

export function Home() {
  return (
    <>
      <em className='bg-noises bg-center bg-cover bg-repeat w-full h-[100vh] fixed z-[9999] pointer-events-none'></em>

      <article className='bg-home bg-center bg-cover bg-no-repeat w-full h-[100vh] relative'>
        <em className='w-full min-h-[100vh] bg-black/60 absolute'></em>

        <section className='relative z-10'>
          <Header />

          <div className='flex-1 flex-col justify-center items-center w-full h-full flex min-h-[100vh] -mt-[148px] gap-16 min-[768px]:px-10 max-[768px]:px-6'>
            <p className='text-paragraph-50 font-bold min-[761px]:text-3xl text-center tracking-widest mt-60 font-faroest max-[761px]:text-1xl'>
              SEJA UM HERÓI OU UM <br /> FORA-DA-LEI EM{' '}
              <span className="after:text-stroke-primary-850 after:-z-10 after:opacity-50 after:text-stroke-xs after:content-['FRONTIER'] after:text-transparent relative after:absolute after:left-1 after:top-1">
                FRONTIER.
              </span>
            </p>

            <div className='flex flex-col gap-3'>
              <Button variant='primary'>
                <span className='tracking-widest'>CONECTAR</span>
              </Button>

              <Button variant='secondary'>
                <span className='flex tracking-widest gap-5 items-center'>
                  NOS SIGA{' '}
                  <a href='https://'>
                    <FaInstagram />
                  </a>
                  <a href='https://'>
                    <FaTiktok />
                  </a>
                </span>
              </Button>
            </div>
          </div>
        </section>

        <em className='bg-gradient-to-t from-black h-20 w-full absolute -bottom-0'></em>
        <em className='bg-gradient-to-b from-black h-20 w-full absolute -bottom-20'></em>
      </article>
    </>
  );
}
