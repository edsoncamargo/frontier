import { FaX } from 'react-icons/fa6';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
};

export function Modal({
  isOpen = false,
  setIsOpen,
  onClose,
}: Readonly<ModalProps>) {
  return (
    <>
      {isOpen && (
        <>
          <div className='bg-multiple bg-repeat bg-cover w-[728px] max-h-[728px] bg-background-950 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden z-50 border-2 border-background-850'>
            <div className='flex justify-between gap-4 p-4'>
              <h3 className='uppercase'>Editar VIP de PRATA</h3>

              <button onClick={() => onClose()}>
                <FaX />
              </button>
            </div>
            <div className='p-4'></div>
            <div className='p-4 w-full bg-background-900'></div>
          </div>

          <button
            className='w-[100vw] h-[100vh] bg-background-950/80 z-40 top-0 left-0 fixed'
            onClick={() => setIsOpen(false)}
          ></button>
        </>
      )}
    </>
  );
}
