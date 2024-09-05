import { FaPen, FaSliders, FaTrash } from 'react-icons/fa6';

import { Button } from '../../../../components/buttons/button';
import Modal from '../../../../components/modal/modal';
import { Navbar } from '../../../../components/navbar/navbar';
import { useState } from 'react';

export function VipsDashboard() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  function handleModalToggle() {
    setIsOpenModal(!isOpenModal);
  }

  const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Sam Green', age: 22, email: 'sam@example.com' },
  ];

  return (
    <>
      <section className='flex flex-col gap-6'>
        <Navbar />

        <div>
          <Button size='sm'>ADICIONAR</Button>
        </div>

        <div className='mt-4 overflow-auto relative table-auto whitespace-nowrap rounded-md'>
          <table className='min-w-full'>
            <thead>
              <tr className='bg-zinc-900/80 h-12 font-extrabold border-b-2 border-paragraph-50/50'>
                <th className='text-start px-3'>Nome</th>
                <th className='text-start px-3'>Preço</th>
                <th className='text-start px-3'>Preço Mensal</th>
                <th className='text-start px-3'>Descrição</th>
                <th className='text-start px-3'>Capa</th>
                <th className='text-start px-3'>Imagens</th>
                <th className='text-start px-3 sticky right-0'>
                  <FaSliders />
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.id}
                  className={`${
                    index % 2 === 0 ? 'bg-zinc-950/80' : 'bg-zinc-900/80'
                  } h-12`}
                >
                  <td className='px-3'>{row.name}</td>
                  <td className='px-3'>{row.age}</td>
                  <td className='px-3'>{row.email}</td>
                  <td className='px-3'>{row.email}</td>
                  <td className='px-3'>{row.email}</td>
                  <td className='px-3'>{row.email}</td>
                  <td className='px-3 sticky right-0'>
                    <div className='flex gap-2 items-center'>
                      <button
                        className='rounded-full bg-slate-900 border-2 border-slate-500 hover:border-slate-400 p-2 transition-all'
                        onClick={() => handleModalToggle()}
                      >
                        <FaPen />
                      </button>
                      <button
                        className='rounded-full bg-red-900 border-2 border-red-500 hover:border-red-400 p-2 transition-all'
                        onClick={() => handleModalToggle()}
                      >
                        <FaTrash />
                      </button>

                      <em
                        className={`${
                          index % 2 === 0 ? 'bg-zinc-950/80' : 'bg-zinc-900/80'
                        } h-12 absolute left-0 w-full -z-10`}
                      ></em>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <Modal.Header title='Editar VIP de PRATA'>
          <Modal.X onClose={handleModalToggle} />
        </Modal.Header>

        <Modal.Footer>
          <Button
            variant='secondary'
            size='sm'
            onClick={() => handleModalToggle()}
          >
            CANCELAR
          </Button>

          <Button size='sm'>SALVAR</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
