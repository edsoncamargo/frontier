import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';

function App() {
  return (
    <main className='flex flex-col'>
      <em className='bg-noises bg-center bg-cover bg-repeat w-full h-[100vh] fixed z-[9999] pointer-events-none'></em>

      <article className='bg-home bg-center bg-cover bg-no-repeat w-full h-[100vh] relative'>
        <em className='w-full min-h-[100vh] bg-black/60 absolute'></em>

        <section className='relative z-10'>
          <div className='flex justify-end items-center min-[684px]:h-[148px] relative pl-48'>
            <em className='bg-gradient-to-b from-black/60 h-full w-full absolute -z-10 top-0'></em>
            <em className='bg-logo w-[75px] h-[68px] bg-no-repeat bg-center bg-contain flex absolute min-[1124px]:left-1/2 max-[1124px]:left-20 top-1/2 -translate-y-1/2 -translate-x-1/2'></em>

            <div className='flex gap-4 bg-red items-center mr-10 flex-wrap justify-end py-10'>
              <button className='mr-8 text-primary-50 font-regular flex items-center gap-1'>
                Entre no nosso <FaDiscord />
              </button>
              <button className='px-4 py-3 bg-transparent border-white border-[0.5px] text-paragraph-50 rounded-md font-bold'>
                Fazer login
              </button>
              <button className='px-4 py-3 bg-primary-50 text-paragraph-50 rounded-md font-bold'>
                Criar uma conta
              </button>
            </div>
          </div>

          <div className='flex-1 flex-col justify-center items-center w-full h-full flex min-h-[100vh] -mt-[148px] gap-16 px-10'>
            <p className='text-paragraph-50 font-bold text-3xl text-center tracking-widest mt-60 font-faroest'>
              SEJA UM HERÓI OU UM <br /> FORA-DA-LEI EM{' '}
              <span className="after:text-stroke-primary-50 after:text-stroke-xs after:content-['FRONTIER'] after:ml-0.5 after:text-transparent relative after:absolute after:-left-2 after:-top-0.5">
                FRONTIER.
              </span>
            </p>

            <div className='flex flex-col gap-3'>
              <button className='px-4 py-3 bg-primary-50 text-paragraph-50 rounded-md font-bold tracking-widest'>
                CONECTAR
              </button>

              <button className='px-4 py-3 bg-transparent border-white border-[0.5px] text-paragraph-50 rounded-md font-bold tracking-widest gap-5 flex items-center justify-center'>
                NOS SIGA{' '}
                <span className='flex gap-2 items-center'>
                  <a href='https://'>
                    <FaInstagram />
                  </a>
                  <a href='https://'>
                    <FaTiktok />
                  </a>
                </span>
              </button>
            </div>
          </div>
        </section>

        <em className='bg-gradient-to-t from-black h-20 w-full absolute -bottom-0'></em>
        <em className='bg-gradient-to-b from-black h-20 w-full absolute -bottom-20'></em>
      </article>

      <article className='mt-10 max-w-7xl m-auto flex flex-col p-10'>
        <nav>
          <ul className='flex gap-6 font-faroest text-1xl text-paragraph-50 justify-center flex-wrap'>
            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                SOBRE O SERVIDOR
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                REGRAS
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                VIPS
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                FARMS
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                HOUSES
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                UPGRADES
              </a>
            </li>

            <li>
              <a
                className='hover:text-primary-50 transition-all after:content-[""] after:w-0 after:bg-primary-50 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
                href='https://'
              >
                EXTRAS
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}

export default App;
