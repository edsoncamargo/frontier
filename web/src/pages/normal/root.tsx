import { About } from './about/about.normal';
import { Home } from './home/home';
import Menu from '../../components/menu/menu';
import { VipsNormal } from './vips/vips.normal';

export function Root() {
  return (
    <main className='flex flex-col'>
      <Home />

      <article className='mt-10 max-w-7xl m-auto flex flex-col p-10 w-full gap-20 min-[768px]:px-10 max-[768px]:px-6'>
        <Menu>
          <Menu.Item title='SOBRE O SERVIDOR' link='#sobre' />
          <Menu.Item title='REGRAS' link='#regras' />
          <Menu.Item title='VIPS' link='#vips' />
          <Menu.Item title='FARMS' link='#farms' />
          <Menu.Item title='HOUSES' link='#houses' />
          <Menu.Item title='UPGRADES' link='#upgrades' />
          <Menu.Item title='EXTRAS' link='#extras' />
        </Menu>

        <section id='about'>
          <About />
        </section>

        <section id='vips'>
          <VipsNormal />
        </section>
      </article>
    </main>
  );
}

export default Root;
