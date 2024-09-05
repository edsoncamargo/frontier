import { FaPen, FaSliders, FaTrash } from 'react-icons/fa6';

import { Button } from '../../../../components/buttons/button';
import Modal from '../../../../components/modal/modal';
import { Navbar } from '../../../../components/navbar/navbar';
import Table from '../../../../components/table/table';
import { useState } from 'react';

type DataType = {
  id: number;
  type: string;
  price: number;
  monthly_price: number;
  description: string;
  cover: string[];
  images: string;
};

export function VipsDashboard() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState<
    DataType | undefined
  >(undefined);

  function handleModalToggle(data?: DataType) {
    setCurrentSelectedItem(data ? data : undefined);
    setIsOpenModal(!isOpenModal);
  }

  const data = [
    {
      id: 1,
      type: 'Bronze',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Prata',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Ouro',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Platina',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Diamante',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Esmeralda',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
    {
      id: 1,
      type: 'Frontier',
      price: 100.0,
      monthly_price: 25.0,
      description:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',

      cover: [
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
      ],
      images:
        'http://res.cloudinary.com/dbwpfdu30/image/upload/v1723649165/frontier/vips/vgegtq8jkxbwiqwwum0y.jpg',
    },
  ];

  return (
    <>
      <section className='flex flex-col gap-6'>
        <Navbar />

        <div className='flex'>
          <Button size='sm' onClick={() => handleModalToggle()}>
            ADICIONAR
          </Button>
        </div>

        <Table>
          <Table.Header>
            <Table.Row variant='header'>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Preço</Table.HeaderCell>
              <Table.HeaderCell>Mensal</Table.HeaderCell>
              <Table.HeaderCell>Descrição</Table.HeaderCell>
              <Table.HeaderCell>Capa</Table.HeaderCell>
              <Table.HeaderCell>Imagens</Table.HeaderCell>
              <Table.HeaderCell variant='freeze'>
                <FaSliders />
                <em className='bg-zinc-950/80 h-12 absolute left-0 w-full -z-10 top-0'></em>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((item, index) => {
              return (
                <Table.Row
                  key={item.type}
                  variant={index % 2 === 0 ? 'even' : 'odd'}
                >
                  <Table.Cell>{item.type}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.monthly_price}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.cover}</Table.Cell>
                  <Table.Cell>{JSON.stringify(item.images)}</Table.Cell>
                  <Table.Cell variant='freeze'>
                    <div className='flex gap-2 items-center'>
                      <button
                        className='rounded-full bg-slate-900 border-2 border-slate-500 hover:border-slate-400 p-2 transition-all'
                        onClick={() => handleModalToggle(item)}
                      >
                        <FaPen />
                      </button>
                      <button
                        className='rounded-full bg-red-900 border-2 border-red-500 hover:border-red-400 p-2 transition-all'
                        onClick={() => handleModalToggle(item)}
                      >
                        <FaTrash />
                      </button>

                      <em
                        className={`${
                          index % 2 === 0 ? 'bg-zinc-950/80' : 'bg-zinc-900/80'
                        } h-12 absolute left-0 w-full -z-10`}
                      ></em>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </section>

      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <Modal.Header title={`Editar VIP ${currentSelectedItem?.type}`}>
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
