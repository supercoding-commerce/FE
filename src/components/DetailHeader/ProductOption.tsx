import { CartItemAPI } from '@/apis/product';
import Counter from '@/components/common/Counter/Counter';
import Icon from '@/components/common/Icon';
import SelectBox from '@/components/common/SelectBox/SelectBox';
import { DetailProduct } from '@/pages/DetailPage/DetailPage';
import * as S from './ProductOption.styles';

type ProductProps = {
  product: DetailProduct;
  onOptionPlus?: (item: string) => void;
  onOptionDelete?: (index: number) => void;
  onQuantityChange?: (index: number, newQuantity: number) => void;
  cartProduct?: CartItemAPI[];
};

const ProductOption = ({
  product,
  onOptionPlus,
  onQuantityChange,
  onOptionDelete,
  cartProduct,
}: ProductProps) => {
  return (
    <S.OptionContainer>
      <S.Option>
        <S.Options>
          <p>Option</p>
          {onOptionPlus ? (
            <SelectBox
              optionList={product.options}
              value={'선택'}
              onChange={(newOption) => onOptionPlus(newOption)}
            />
          ) : null}
        </S.Options>
        {cartProduct && cartProduct.length > 0
          ? cartProduct.map((item, index) => (
              <S.SelectedOptionContainer key={index}>
                <S.SelectedOption>{item.options[0]}</S.SelectedOption>
                {onQuantityChange ? (
                  <Counter
                    quantity={item.quantity}
                    maxQuantity={product.leftAmount}
                    onQuantityChange={(newQuantity) => onQuantityChange(index, newQuantity)}
                  />
                ) : null}
                <S.OptionPriceContainer>
                  <S.OptionPrice>
                    {(product.price * item.quantity).toLocaleString()}원
                  </S.OptionPrice>
                  {onOptionDelete ? (
                    <Icon
                      name="IconX"
                      size={20}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onOptionDelete(index)}
                    />
                  ) : null}
                </S.OptionPriceContainer>
              </S.SelectedOptionContainer>
            ))
          : null}
      </S.Option>
    </S.OptionContainer>
  );
};

export default ProductOption;
