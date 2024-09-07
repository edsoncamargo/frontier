import { ReactNode, useEffect } from 'react';

import { FaX } from 'react-icons/fa6';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose?: () => void;
};

function Modal({
  children,
  isOpen = false,
  setIsOpen,
  onClose,
}: Readonly<ModalProps>) {
  useEffect(() => {
    function handleCloseOnKeyEsc(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) onClose?.();
    }

    if (isOpen) document.addEventListener('keydown', handleCloseOnKeyEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseOnKeyEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <>
          <div className='bg-icons bg-repeat bg-cover min-[840px]:w-[768px] max-[840px]:w-[calc(100%-48px)]  max-h-[768px]  bg-background-950 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden z-50 border-2 border-background-850'>
            {children}
          </div>

          <Overlay setIsOpen={setIsOpen} />
        </>
      )}
    </>
  );
}

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

function Header({ title, children }: Readonly<HeaderProps>) {
  return (
    <div className='flex justify-between items-center gap-4 p-4'>
      <h3 className='text-2xl'>{title.toUpperCase()}</h3>

      {children}
    </div>
  );
}

type XProps = {
  onClose: () => void;
};

function X({ onClose }: Readonly<XProps>) {
  return (
    <button
      onClick={() => onClose()}
      className='rounded-full bg-zinc-900 border-2 border-zinc-800 hover:border-paragraph-50 p-2 transition-all'
    >
      <FaX className='text-xs' />
    </button>
  );
}

type BodyProps = {
  children: ReactNode;
};

function Body({ children }: Readonly<BodyProps>) {
  return <div className='p-4'>{children}</div>;
}

type FooterProps = {
  children: ReactNode;
};

function Footer({ children }: Readonly<FooterProps>) {
  return (
    <div className='flex flex-wrap justify-end gap-4 p-4 mt-8 w-full bg-background-900'>
      {children}
    </div>
  );
}

type OverlayProps = {
  setIsOpen: (isOpen: boolean) => void;
};

function Overlay({ setIsOpen }: Readonly<OverlayProps>) {
  return (
    <button
      className='w-[100vw] h-[100vh] bg-background-950/80 z-40 top-0 left-0 fixed'
      onClick={() => setIsOpen(false)}
    ></button>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.X = X;

export default Modal;
