import {
  ComponentProps,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type MenuProps = {
  children: ReactNode;
};

const HashContext = createContext({ hash: '' });

function Menu({ children }: Readonly<MenuProps>) {
  const navRef = useRef<HTMLDivElement>(null);
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    function handleScroll() {
      updateCurrentHashByPosition();
    }

    function updateCurrentHashByPosition() {
      const sections = [
        'about',
        'vips',
        'farms',
        'houses',
        'upgrades',
        'extras',
      ];

      sections.forEach((section) => {
        const eSection = document.getElementById(section);

        const sectionY = eSection!.getBoundingClientRect().y;
        const sectionHeight = eSection!.getBoundingClientRect().height;
        const navY = navRef.current!.getBoundingClientRect().y;
        const navHeight = navRef.current!.getBoundingClientRect().height;
        const scrollMarginTop = 100;

        if (
          navY >= sectionY - scrollMarginTop &&
          navY + navHeight <= sectionY + sectionHeight
        )
          setHash(`#${section}`);
      });
    }

    if (navRef.current) window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navRef]);

  const memoizedHash = useMemo(() => ({ hash }), [hash]);

  return (
    <HashContext.Provider value={memoizedHash}>
      <nav ref={navRef} className='sticky left-0 top-4 p-4'>
        <ul className='flex gap-6 font-faroest text-1xl text-paragraph-50 justify-between flex-wrap max-[781px]:justify-start'>
          {children}
        </ul>

        <em className='h-full w-full absolute left-0 top-0 -z-10 rounded-md bg-background-950/50 backdrop-blur-md shadow-lg'></em>
      </nav>
    </HashContext.Provider>
  );
}

type ItemProps = ComponentProps<'a'> & {
  title: string;
  link: string;
};

function Item({ title, link, ...rest }: ItemProps) {
  const { hash } = useContext(HashContext);

  return (
    <li key={link}>
      <a
        className={`hover:text-primary-950 transition-all after:content-[""] after:w-0 after:bg-primary-950 after:h-[0.5px] 
          after:block hover:after:w-1/2 after:transition-all after:rounded-r-lg
          ${hash === link && 'text-primary-950 after:w-1/2'}`}
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
