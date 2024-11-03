import { SubmitButton } from '@/components/form/Buttons';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from '@/utils/actions';

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const productDetails = await fetchAdminProductDetails(id);
  const { name, company, description, price, featured } = productDetails;

  return (
    <section>
      <h1 className="text-2xl capitalize font-semibold mb-8">update product</h1>
      <div className="border p-8 rounded">
        {/* IMAGE INPUT CONTAINER */}
        <ImageInputContainer
          image={productDetails.image}
          name={name}
          action={updateProductImageAction}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={productDetails.image} />
        </ImageInputContainer>

        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckBoxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProductPage;
