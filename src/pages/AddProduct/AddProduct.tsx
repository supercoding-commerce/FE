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
  // GYU-TODO: 모바일 환경 또는 모바일 사이즈면 alert 및 redirect
  return <ProductForm productForm={INIT_FORM} />;
}
