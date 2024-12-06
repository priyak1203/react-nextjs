'use client';
import { useState } from 'react';
import SelectProductAmount, {
  Mode,
} from '../single-product/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { removeCartItemAction } from '@/utils/actions';
import { SubmitButton } from '../form/Buttons';

function ThirdColumn({ id, quantity }: { id: string; quantity: number }) {
  const [amount, setAmount] = useState(quantity);

  const handleAmountChange = async (value: number) => {
    setAmount(value);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        mode={Mode.CartItem}
        amount={amount}
        setAmount={handleAmountChange}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
