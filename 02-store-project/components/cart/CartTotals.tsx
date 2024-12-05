import { Cart } from '@prisma/client';
import { Card, CardTitle } from '../ui/card';
import { formatCurrency } from '@/utils/format';
import { Separator } from '../ui/separator';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { createOrderAction } from '@/utils/actions';

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <>
      <Card className="p-8">
        <CartTotalRow label="subtotal" amount={cartTotal} />
        <CartTotalRow label="shipping" amount={shipping} />
        <CartTotalRow label="tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="order total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="place order" className="w-full mt-8" />
      </FormContainer>
    </>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm capitalize">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;
