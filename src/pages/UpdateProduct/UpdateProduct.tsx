import { ProductForm } from '@/components/ProductForm/ProductForm.tsx';
import { ProductFormType } from '@/models/product.ts';

const UPDATE_PRODUCT_FORM_INIT: ProductFormType = {
  name: '테스트 상품 99',
  content: '테스트 상품입니다! 여기는 정보!',
  price: 25000,
  leftAmount: 1000,
  ageCategory: '20',
  genderCategory: 'COMMON',
  productCategory: 'HOOD',
  // GYU-TODO; imageFiles 는 서버에서 어떻게 주는지에 따라 달라짐
  imageFiles: [],
  options: [
    'BLACK / S',
    'BLACK / M',
    'BLACK / L',
    'WHITE / S',
    'WHITE / M',
    'WHITE / L',
    'BLUE / S',
    'BLUE / M',
    'BLUE / L',
  ],
};

export function UpdateProduct() {
  // GYU-TODO: 모바일 환경 또는 모바일 사이즈면 alert 및 redirect
  return <ProductForm productForm={UPDATE_PRODUCT_FORM_INIT} />;
}
