'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type ActionFunction } from '@/utils/types';
import { Button } from '@/components/ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';

type ImageInputContainerProps = {
  image: string;
  name: string;
  text: string;
  action: ActionFunction;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, text, action, children } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-md object-cover mb-4 w-[200px] h-[200px]"
        priority
      />
      <Button
        variant="outline"
        size="sm"
        className="capitalize"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-md">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
