import { FaAt, FaChevronRight, FaLock } from 'react-icons/fa6';

import { Button } from '../../../components/buttons/button';
import Input from '../../../components/forms/input/input';

export function Login() {
  return (
    <div className='max-h-[100vh] h-[calc(100vh-3rem)] flex items-center justify-center w-full flex-col gap-6'>
      <em className='bg-logo w-[75px] h-[68px] bg-no-repeat bg-center bg-contain flex'></em>

      <div className='flex flex-col gap-3'>
        <Input>
          <FaAt />
          <Input.Field placeholder='E-mail' autoComplete='off' />
        </Input>

        <Input>
          <FaLock />
          <Input.Field placeholder='Senha' autoComplete='off' />
        </Input>

        <Button>
          <div className='flex gap-2 items-center justify-center relative w-full'>
            <span>Entrar</span>
            <div className='absolute right-2'>
              <FaChevronRight />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
