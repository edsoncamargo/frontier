import { Button } from '../../../components/buttons/button';
import { FaDiscord } from 'react-icons/fa';

export function Header() {
  return (
    <div className='flex justify-end items-center min-[684px]:h-[148px] relative pl-48'>
      <em className='bg-gradient-to-b from-black/60 h-full w-full absolute -z-10 top-0'></em>
      <em className='bg-logo w-[75px] h-[68px] bg-no-repeat bg-center bg-contain flex absolute min-[1124px]:left-1/2 max-[1124px]:left-10 max-[768px]:left-6 top-1/2 -translate-y-1/2 min-[1124px]:-translate-x-1/2'></em>

      <div className='flex gap-4 bg-red min-[521px]:items-center min-[768px]:mr-10 max-[768px]:mr-6 flex-wrap justify-end py-10 max-[520px]:flex-col'>
        <Button variant='text'>
          <span className='flex items-center gap-1 min-[520px]:mr-8'>
            Entre no nosso <FaDiscord />
          </span>
        </Button>
        <Button variant='secondary'>Fazer login</Button>
        <Button variant='primary'>Criar uma conta</Button>
      </div>
    </div>
  );
}
