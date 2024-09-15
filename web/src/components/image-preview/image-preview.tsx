import { ComponentProps, ReactNode } from 'react';

import { ButtonAction } from '../buttons/button-action';

type ImagePreviewProps = {
  children?: ReactNode;
};

function ImagePreview({ children }: Readonly<ImagePreviewProps>) {
  return (
    <div className='relative overflow-hidden rounded-md'>
      {children}

      <img
        src='https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg'
        alt=''
      />
    </div>
  );
}

type DeleteProps = ComponentProps<'button'>;

function Delete({ ...rest }: DeleteProps) {
  return (
    <div className='absolute right-0 p-4'>
      <ButtonAction variant='delete' {...rest} />
    </div>
  );
}

ImagePreview.Delete = Delete;

export default ImagePreview;
