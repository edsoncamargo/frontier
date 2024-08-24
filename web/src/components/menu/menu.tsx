import { ComponentProps, ReactNode } from 'react';

type MenuProps = {
  children: ReactNode;
};

function Menu({ children }: Readonly<MenuProps>) {
  return (
    <nav>
      <ul className='flex gap-6 font-faroest text-1xl text-paragraph-50 justify-between flex-wrap max-[781px]:justify-start'>
        {children}
      </ul>
    </nav>
  );
}

type ItemProps = ComponentProps<'a'> & {
  title: string;
  link: string;
};

function Item({ title, link, ...rest }: ItemProps) {
  return (
    <li key={link}>
      <a
        className='hover:text-primary-950 transition-all after:content-[""] after:w-0 after:bg-primary-950 after:h-[0.5px] after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg'
        href={link}
        {...rest}
      >
        {title}
      </a>
    </li>
  );
}

Menu.Item = Item;

export default Menu;
