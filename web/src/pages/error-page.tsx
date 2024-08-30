import { Button } from '../components/buttons/button';
import { IoReturnDownBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className='w-full h-full min-h-[100vh] items-center justify-center font-faroest text-1xl text-center flex text-paragraph-50 gap-6 p-6 '>
      <div className='max-[768px]:flex-col flex justify-center items-center gap-4'>
        <p className='text-9xl text-primary-950 relative after:content-["404"] after:absolute after:left-2 after:top-2 after:opacity-50 after:text-primary-850 after:-z-10'>
          404
        </p>

        <div className='relative'>
          <p className='gap-3 flex flex-col'></p>

          <p className='text-justify'>
            Você se perdeu no{' '}
            <span className='text-nowrap'>Velho Oeste ⚠️</span> <br></br>
            Parece que você cavalgou para o lado errado. <br></br> Tente voltar
            para o acampamento{' '}
            <Button variant='text'>
              <Link to='/' className='flex items-center gap-2'>
                principal <IoReturnDownBack />
              </Link>
            </Button>
            .<br></br> Esta página não foi encontrada.
          </p>
        </div>
      </div>
    </div>
  );
}
