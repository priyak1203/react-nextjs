import AddToCart from '@/components/single-product/AddToCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';

function SingleProductPage() {
  return (
    <div>
      <BreadCrumbs name="random" />
      <ProductRating productId="123" />
      <AddToCart productId="123" />
    </div>
  );
}

export default SingleProductPage;
