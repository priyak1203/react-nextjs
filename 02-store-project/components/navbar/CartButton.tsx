import Link from 'next/link';
import { Button } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';
import { fetchCartItems } from '@/utils/actions';

async function CartButton() {
  const numItemsInCart = await fetchCartItems();

  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="relative flex justify-center items-center"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center text-xs ">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
