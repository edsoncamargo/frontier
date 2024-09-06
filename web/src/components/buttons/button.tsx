import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'flex h-12 gap-2 items-center justify-center px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary-950 transition-all',
  variants: {
    variant: {
      primary:
        'bg-primary-950 text-paragraph-50 font-bold hover:bg-primary-900',
      secondary:
        'bg-transparent border-white border-[0.5px] text-paragraph-50 rounded-md font-bold hover:bg-zinc-600/50',
      text: 'text-primary-950 font-regular hover:text-primary-900',
    },
    size: {
      sm: 'h-8 text-xs',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode;
  };

export function Button({ children, variant, size, ...rest }: ButtonProps) {
  return (
    <button className={button({ variant, size })} {...rest}>
      {children}
    </button>
  );
}
