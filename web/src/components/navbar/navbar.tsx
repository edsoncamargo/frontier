export function Navbar() {
  return (
    <nav className='flex flex-col w-full justify-between items-center gap-10'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex flex-col'>
          <h1 className='uppercase text-2xl font-extrabold'>
            Gerenciamento de VIPS
          </h1>

          <p className='text-xs text-zinc-400'>
            Adicione, edite ou exclua conforme necessário.
          </p>
        </div>

        <div className='flex items-center gap-3 border-2 border-zinc-800 p-2 px-6 rounded-full'>
          <span className='font-extralight text-sm'>Arthur M.</span>
          <div className='h-10 w-10 rounded-full overflow-hidden bg-zinc-950 block'>
            <img src='/avatar.jpg' alt='' />
          </div>
        </div>
      </div>
    </nav>
  );
}
