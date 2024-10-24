'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';

type BtnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: BtnSize;
};

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please wait....
        </>
      ) : (
        text
      )}
    </Button>
  );
}
