import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import AddToCart from '@/components/single-product/AddToCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, company, price, description, image } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton name={name} productId={params.id} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      <ProductReviews />
      <SubmitReview productId={params.id} />
    </section>
  );
}

export default SingleProductPage;
