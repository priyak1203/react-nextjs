'use client';

import { useFormState } from 'react-dom';

import { type ActionFunction } from '@/utils/types';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
