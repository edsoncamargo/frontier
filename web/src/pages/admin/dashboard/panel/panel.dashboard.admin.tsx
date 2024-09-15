import { FaPlus, FaSliders, FaX } from 'react-icons/fa6';
import { Form, Formik, FormikHelpers } from 'formik';

import { Button } from '../../../../components/buttons/button';
import { ButtonAction } from '../../../../components/buttons/button-action';
import ImagePreview from '../../../../components/image-preview/image-preview';
import Input from '../../../../components/forms/input/input';
import Modal from '../../../../components/modal/modal';
import { Navbar } from './navbar/navbar';
import Table from '../../../../components/table/table';
import { useParams } from 'react-router-dom';
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

export interface InputField {
  field: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

export interface FormInputs {
  [key: string]: InputField;
}

export type PanelType = {
  structure: {
    panelTitle: string;
    forms: FormInputs[];
  };
};

export function PanelDashboard({ structure }: Readonly<PanelType>) {
  const { category } = useParams();
  console.log(category);

  const panel = structure;

  const forms = panel.forms;
  const formObject = forms.reduce((acc, inputs) => {
    const inputsName = Object.keys(inputs);

    inputsName.forEach((field) => {
      acc[field] = '';
    });

    return acc;
  }, {} as Record<string, string | number>);

  type FormObject = typeof formObject;

  function generateDynamicForm() {
    return forms.map((inputs: FormInputs) => {
      const inputsName = Object.keys(inputs);

      return (
        <div key={inputsName.toString()} className='flex gap-3'>
          {inputsName.map((field) => {
            const inputType = inputs[field].field;
            const inputIcon = inputs[field].icon;

            if (inputType !== 'image') {
              return (
                <Input key={field}>
                  {inputIcon}
                  <Input.Field
                    id={field}
                    name={field}
                    type={inputType}
                    placeholder={inputs[field].placeholder}
                    autoComplete='off'
                  />
                </Input>
              );
            } else {
              return (
                <div className='flex gap-1 w-full' key={field}>
                  <Input>
                    {inputIcon}
                    <Input.Field
                      id={field}
                      name={field}
                      type='url'
                      placeholder={inputs[field].placeholder}
                      autoComplete='off'
                    />
                  </Input>

                  <Button type='button' size='send'>
                    <FaPlus />
                  </Button>
                </div>
              );
            }
          })}
        </div>
      );
    });
  }

  generateDynamicForm();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState<
    DataType | undefined
  >(undefined);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete'>();

  function handleModalToggle(data?: DataType) {
    setCurrentSelectedItem(data ? data : undefined);
    setIsOpenModal(!isOpenModal);
  }

  function handleModalClose() {
    setIsOpenModal(false);
  }

  const data: DataType[] = [
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
  ];

  function getModalContent() {
    if (modalType === 'add') {
      return (
        <>
          <Modal.Header title='ADICIONAR NOVO'>
            <Modal.X onClose={handleModalToggle} />
          </Modal.Header>

          <Formik
            initialValues={formObject}
            onSubmit={(
              fields: FormObject,
              { setSubmitting, resetForm }: FormikHelpers<FormObject>
            ) => {
              console.log(JSON.stringify(fields, null, 2));

              setSubmitting(false);
              resetForm();
            }}
          >
            {() => (
              <Form className='flex flex-col gap-6'>
                <Modal.Body>
                  <div className='flex flex-col gap-3'>
                    {generateDynamicForm()}
                    <ImagePreview>
                      <ImagePreview.Delete type='button' />
                    </ImagePreview>
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant='secondary'
                    size='sm'
                    onClick={() => handleModalToggle()}
                  >
                    CANCELAR
                  </Button>

                  <Button type='submit' size='sm'>
                    ADICIONAR
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </>
      );
    } else if (modalType === 'edit') {
      return (
        <>
          <Modal.Header
            title={`Editar ${panel.panelTitle.slice(0, -1)} ${
              currentSelectedItem?.type
            }`}
          >
            <Modal.X onClose={handleModalToggle} />
          </Modal.Header>

          <Modal.Body>
            <div>Editar ⭐</div>
          </Modal.Body>

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
        </>
      );
    } else if (modalType === 'delete') {
      return (
        <>
          <Modal.Header title=''>
            <Modal.X onClose={handleModalToggle} />
          </Modal.Header>

          <Modal.Body>
            <div className='w-full flex flex-col gap-6 justify-center items-center'>
              <em
                className='rounded-full bg-red-900 border-2 border-red-500 p-4 mt-4
                relative before:absolute before:content-[""] before:bg-red-500/30 before:left-1/2 before:top-1/2
                before:h-20 before:w-20 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10'
              >
                <FaX />
              </em>

              <h3 className='text-3xl text-center uppercase'>
                Deletar {panel.panelTitle.slice(0, -1)}{' '}
                <strong>{currentSelectedItem?.type}</strong>
              </h3>

              <p className='text-center tracking-wider'>
                Você vai deletar o(a){' '}
                {panel.panelTitle.slice(0, -1).toUpperCase()}{' '}
                <strong className='uppercase'>
                  {currentSelectedItem?.type}
                </strong>
                <br></br>
                Tem certeza?
              </p>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => handleModalToggle()}
            >
              NÃO, MANTENHA ASSIM
            </Button>

            <Button variant='delete' size='sm'>
              SIM, DELETAR
            </Button>
          </Modal.Footer>
        </>
      );
    }
  }

  return (
    <>
      <section className='flex flex-col gap-6'>
        <Navbar title={panel.panelTitle} />

        <div className='flex'>
          <Button
            size='sm'
            onClick={() => {
              handleModalToggle();
              setModalType('add');
            }}
          >
            ADICIONAR
          </Button>
        </div>

        {data && data.length > 0 ? (
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
                      <div className='flex gap-2 items-center justify-end'>
                        <ButtonAction
                          variant='edit'
                          onClick={() => {
                            handleModalToggle(item);
                            setModalType('edit');
                          }}
                        />
                        <ButtonAction
                          variant='delete'
                          onClick={() => {
                            handleModalToggle(item);
                            setModalType('delete');
                          }}
                        />

                        <em
                          className={`${
                            index % 2 === 0
                              ? 'bg-zinc-950/80'
                              : 'bg-zinc-900/80'
                          } h-full absolute left-0 w-full -z-10`}
                        ></em>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        ) : (
          <p>Nenhum item encontrado ⚠️</p>
        )}
      </section>

      <Modal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        onClose={handleModalClose}
      >
        {getModalContent()}
      </Modal>
    </>
  );
}
