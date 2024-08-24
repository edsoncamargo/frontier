import { Home } from './views/normal/home/home';
import Menu from './components/menu/menu';

function App() {
  return (
    <main className='flex flex-col'>
      <Home />

      <article className='mt-10 max-w-7xl m-auto flex flex-col p-10 w-full gap-20 min-[768px]:px-10 max-[768px]:px-6'>
        <Menu>
          <Menu.Item title='SOBRE O SERVIDOR' link='https://' />
          <Menu.Item title='REGRAS' link='https://' />
          <Menu.Item title='VIPS' link='https://' />
          <Menu.Item title='FARMS' link='https://' />
          <Menu.Item title='HOUSES' link='https://' />
          <Menu.Item title='UPGRADES' link='https://' />
          <Menu.Item title='EXTRAS' link='https://' />
        </Menu>

        <section>
          <p className='text-2xl text-paragraph-50 w-full'>
            Trabalho em progresso,{' '}
            <span className='font-bold whitespace-nowrap'>
              novidades em breve ⚠️
            </span>
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
