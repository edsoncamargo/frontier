import { About } from './about/about.normal';
import { ExtrasNormal } from './extras/extras.normal';
import { FarmsNormal } from './farms/farms.normal';
import { Footer } from '../../components/footer/footer';
import { Home } from './home/home';
import { HousesNormal } from './houses/houses.normal';
import Menu from '../../components/menu/menu';
import { UpgradesNormal } from './upgrades/upgrades.normal';
import { VipsNormal } from './vips/vips.normal';

export function Root() {
  return (
    <main className='flex flex-col'>
      <Home />

      <article className='mt-10 max-w-7xl m-auto flex flex-col p-10 w-full gap-20 min-[768px]:px-10 max-[768px]:px-6'>
        <Menu>
          <Menu.Item title='SOBRE O SERVIDOR' link='#about' />
          <Menu.Item title='VIPS' link='#vips' />
          <Menu.Item title='FARMS' link='#farms' />
          <Menu.Item title='HOUSES' link='#houses' />
          <Menu.Item title='UPGRADES' link='#upgrades' />
          <Menu.Item title='EXTRAS' link='#extras' />
        </Menu>

        <section id='about' className='scroll-mt-20'>
          <About />
        </section>

        <section id='vips' className='scroll-mt-20'>
          <VipsNormal />
        </section>

        <section id='farms' className='scroll-mt-20'>
          <FarmsNormal />
        </section>

        <section id='houses' className='scroll-mt-20'>
          <HousesNormal />
        </section>

        <section id='upgrades' className='scroll-mt-20'>
          <UpgradesNormal />
        </section>

        <section id='extras' className='scroll-mt-20'>
          <ExtrasNormal />
        </section>
      </article>

      <Footer />
    </main>
  );
}

export default Root;
