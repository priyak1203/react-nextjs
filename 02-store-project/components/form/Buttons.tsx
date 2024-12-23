'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuPenSquare, LuTrash2 } from 'react-icons/lu';

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

type ActionType = 'edit' | 'delete';

export function IconButton({ actionType }: { actionType: ActionType }) {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuPenSquare />;
      case 'delete':
        return <LuTrash2 />;
      default:
        const invalidAction: never = actionType;
        throw new Error(`Invalid action type: ${invalidAction}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
}

export function CardSignInButton() {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        asChild
        className="p-2 cursor-pointer"
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
}

export function CardSubmitButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
}

export const ProductSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button type="button" size="default" className="mt-8 capitalize">
        sign in
      </Button>
    </SignInButton>
  );
};
