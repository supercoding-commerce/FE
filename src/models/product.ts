export type ProductForm = {
  name: string;
  content: string;
  price: number;
  leftAmount: number;
  ageCategory: AgeCategory;
  genderCategory: GenderCategory;
  productCategory: ProductCategory;
  imageFiles?: File[];
  options?: string[];
};

// Top- Sweat, Hood, Knit , Sleeveless
// Pants - Jeans , Shorts, Training, Leggings
// Dress - ShortDress, LongDress
// Accessories - Shoes, Muffler, Gloves. Cap
export type AgeCategory = '10' | '20' | '30' | '';
export type GenderCategory = 'FEMALE' | 'MALE' | 'COMMON' | '';
export type ProductCategory =
  | 'SWEAT'
  | 'HOOD'
  | 'KNIT'
  | 'SLEEVELESS'
  | 'JEANS'
  | 'SHORTS'
  | 'TRAINING'
  | 'LEGGINGS'
  | 'SHORT_DRESS'
  | 'LONG_DRESS'
  | 'SHOES'
  | 'MUFFLER'
  | 'GLOVES'
  | 'CAP'
  | '';
