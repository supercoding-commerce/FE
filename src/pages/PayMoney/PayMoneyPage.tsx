import { useEffect, useState } from 'react';

import { postPaymoney } from '@/apis/paymoney';
import { getInfo } from '@/apis/user';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import TextField from '@/components/common/TextField/TextField';
import CardSwiper from '@/pages/PayMoney/CardSwiper/CardSwiper';
import * as S from './PayMoneyPage.styles';

type UserInformation = {
  nickname: string;
  payMoney: number;
};

export function PayMoneyPage() {
  const [userInfo, setUserInfo] = useState<UserInformation>({ nickname: '', payMoney: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getInfo().then((result) => {
      if (result) {
        setUserInfo(result);
      }
    });
  }, []);

  const plusChargeHandler = () => {
    if (inputValue && Number(inputValue) >= 10000) {
      postPaymoney({
        paymentAmount: Number(inputValue),
        payMoney: Number(inputValue) * 0.1 + Number(inputValue),
      }).then(() => {
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          payMoney: prevUserInfo.payMoney + Number(inputValue) + Number(inputValue) * 0.1,
        }));
      });
    }
    setInputValue('');
    setIsVisible(false);
  };

  const openMoneyInputHandler = () => {
    setIsVisible(!isVisible);
  };

  const InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(Number(value));
    if (Number(value) < 10000) {
      setError('최소 1만원 이상 충전 가능');
    } else {
      setError('');
    }
  };

  const inputBlurHandler = () => {
    if (Number(inputValue) < 10000) {
      setError('최소 1만원 이상 충전 가능');
    } else {
      setError('');
    }
  };

  return (
    <S.PayMoneyContainer>
      <S.PayMoney>
        <S.PayMoneyInfo>
          <Icon name="IconPCoin" size={30} />
          <S.PayMoneyUser>
            <p>{userInfo.nickname}의 clipmoney</p>
            <S.Money>{userInfo.payMoney.toLocaleString()}원</S.Money>
          </S.PayMoneyUser>
        </S.PayMoneyInfo>
        <S.ButtonWrapper>
          <Button
            variant="outlined"
            size="small"
            width="50px"
            height="30px"
            color="#55FE3A"
            isCircle={false}
            isFullWidth={false}
            onClick={openMoneyInputHandler}
          >
            충전
          </Button>
        </S.ButtonWrapper>
        {isVisible && (
          <S.MoneyInputContainer>
            <TextField labelId="m" label="충전금액">
              <S.Input>
                <Input
                  id="m"
                  size="sm"
                  type="number"
                  required
                  isFullWidth
                  variant="underline"
                  placeholder="충전할 금액을 입력해주세요."
                  value={inputValue}
                  onChange={InputChangeHandler}
                  onBlur={inputBlurHandler}
                />
              </S.Input>
            </TextField>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <CardSwiper />
            <S.ChargeBtn>
              <Button
                variant="main"
                size="medium"
                height="40px"
                color="#55FE3A"
                isFullWidth
                isCircle={false}
                onClick={plusChargeHandler}
              >
                충전하기
              </Button>
            </S.ChargeBtn>
          </S.MoneyInputContainer>
        )}
      </S.PayMoney>
    </S.PayMoneyContainer>
  );
}
