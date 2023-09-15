import Counter from '@/components/common/Counter/Counter';
import Icon from '@/components/common/Icon';
import SelectBox from '@/components/common/SelectBox/SelectBox';
import * as S from './ProductOption.styles';

type ProductType = {
  productId: number;
  thumbnailUrl: string;
  shopName: string;
  name: string;
  leftAmount: number;
  quantity: number;
  star: number;
  reviewer: number;
  price: number;
  optionList: {
    orderId: number;
    orderOption: string;
  }[];
  options: string;
};

type ProductProps = {
  product: ProductType[];
  onOptionChange?: (index: number, newOption: string) => void;
  onQuantityChange?: (index: number, newQuantity: number) => void;
};

const ProductOption = ({ product, onOptionChange, onQuantityChange }: ProductProps) => {
  return (
    <S.OptionContainer>
      {product.map((p, idx: number) => (
        <S.Option key={idx}>
          <S.Options>
            <p>Option</p>
            {onOptionChange ? (
              <SelectBox
                optionList={p.optionList.map((o) => o.orderOption)}
                value={p.options}
                onChange={(newOption) => onOptionChange(idx, newOption)}
              />
            ) : null}
          </S.Options>
          {p.options ? (
            <S.SelectedOptionContainer>
              <S.SelectedOption>{p.options}</S.SelectedOption>
              {onQuantityChange ? (
                <Counter
                  quantity={p.quantity}
                  maxQuantity={p.leftAmount}
                  onQuantityChange={(newQuantity) => onQuantityChange(idx, newQuantity)}
                />
              ) : null}
              <S.OptionPriceContainer>
                <S.OptionPrice>{(p.price * p.quantity).toLocaleString()}원</S.OptionPrice>
                <Icon name="IconX" size={20} style={{ cursor: 'pointer' }} />
              </S.OptionPriceContainer>
            </S.SelectedOptionContainer>
          ) : null}
        </S.Option>
      ))}
    </S.OptionContainer>
  );
};

export default ProductOption;
