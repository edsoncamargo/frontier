import { InputHTMLAttributes, ReactNode } from 'react';

import { Field } from 'formik';

type InputProps = {
  children: ReactNode;
};

function Input({ children }: Readonly<InputProps>) {
  return (
    <div className='relative bg-zinc-700/40 py-2 px-4 rounded-md flex gap-2 items-center text-primary-950 border-2 border-zinc-700/60 focus-within:border-primary-850 transition-all'>
      {children}
    </div>
  );
}

type FieldType = InputHTMLAttributes<HTMLInputElement>;

function Text({ ...rest }: Readonly<FieldType>) {
  return (
    <Field
      {...rest}
      className='bg-transparent focus:outline-none placeholder:text-primary-850/40'
    />
  );
}

type MessageErrorProps = {
  show: boolean;
  children: ReactNode;
};

export function MessageError({
  show = false,
  children,
}: Readonly<MessageErrorProps>) {
  return (
    <>
      {show && (
        <div className='absolute left-0 text-[10px] -bottom-5 text-red-500'>
          {children}
        </div>
      )}
    </>
  );
}

Input.Field = Text;
Input.MessageError = MessageError;

export default Input;
