import { FirstColumn, FourthColumn, SecondColumn } from './CartItemColumns';
import { Card } from '../ui/card';
import ThirdColumn from './ThirdColumn';
import { CartItemWithProduct } from '@/utils/types';

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { id: productId, name, company, image, price } = cartItem.product;
        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap gap-x-4 p-6 mb-8"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn quantity={amount} id={id} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </>
  );
}

export default CartItemsList;
