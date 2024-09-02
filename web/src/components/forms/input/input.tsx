import { InputHTMLAttributes, ReactNode } from 'react';

type InputType = {
  children: ReactNode;
};

function Input({ children }: Readonly<InputType>) {
  return (
    <div className='bg-zinc-700/40 py-2 px-4 rounded-md flex gap-2 items-center text-primary-950 border-2 border-zinc-700/60 focus-within:border-primary-850 transition-all'>
      {children}
    </div>
  );
}

type FieldType = InputHTMLAttributes<HTMLElement>;

function Field({ ...rest }: Readonly<FieldType>) {
  return (
    <input
      {...rest}
      className='bg-transparent focus:outline-none placeholder:text-primary-850/40'
    ></input>
  );
}

Input.Field = Field;

export default Input;
