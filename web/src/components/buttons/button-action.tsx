import { FaPen, FaTrash } from 'react-icons/fa6';
import { VariantProps, tv } from 'tailwind-variants';

import { ComponentProps } from 'react';

const buttonAction = tv({
  base: 'rounded-full border-2 p-2 transition-all',
  variants: {
    variant: {
      edit: 'bg-slate-900 border-slate-500 hover:border-slate-400',
      delete: 'bg-red-900 border-red-500 hover:border-red-400',
    },
  },
  defaultVariants: {
    variant: 'edit',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonAction>;

export function ButtonAction({ variant, ...rest }: ButtonProps) {
  return (
    <button className={buttonAction({ variant })} {...rest}>
      {variant === 'edit' ? <FaPen /> : <FaTrash />}
    </button>
  );
}
