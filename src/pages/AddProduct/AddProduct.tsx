import { ProductForm } from '@/components/ProductForm/ProductForm.tsx';
import { ProductFormType } from '@/models/product.ts';

const INIT_FORM: ProductFormType = {
  name: '',
  content: '',
  price: 0,
  leftAmount: 0,
  ageCategory: '',
  genderCategory: '',
  productCategory: '',
};

export function AddProduct() {
  return <ProductForm productForm={INIT_FORM} />;
}
