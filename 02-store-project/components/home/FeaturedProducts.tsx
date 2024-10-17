import { fetchFeaturedProducts } from '@/utils/actions';
import SectionTitle from '../globals/SectionTitle';
import EmptyList from '../globals/EmptyList';
import ProductsGrid from '../products/ProductsGrid';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <div>
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
