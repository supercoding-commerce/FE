import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import TextField from '@/components/common/TextField/TextField';
import CardSwiper from '@/pages/PayMoney/CardSwiper/CardSwiper';
import * as S from './PayMoneyPage.styles';

type UserPayMoney = {
  userId: string;
  userName: string;
  money: number;
};

const payMoney: UserPayMoney[] = [{ userId: '1', userName: '김희진', money: 1000000 }];

export function PayMoneyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState<number | string>('');
  const [error, setError] = useState<string>('');
  const [payMoneyList, setPayMoneyList] = useState<UserPayMoney[]>(payMoney);

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

  const chargeMoneyHandler = () => {
    if (inputValue && Number(inputValue) >= 10000) {
      setPayMoneyList(
        payMoneyList.map((p) => {
          if (p.userId === '1') {
            return { ...p, money: p.money + Number(inputValue) };
          }
          return p;
        }),
      );
      setInputValue('');
      setIsVisible(false);
    }
  };

  console.log('Number(inputValue)', Number(inputValue));

  return (
    <S.PayMoneyContainer>
      {payMoney.map((p, idx) => (
        <S.PayMoney key={idx}>
          <S.PayMoneyInfo>
            <Icon name="IconPCoin" size={30} />
            <S.PayMoneyUser>
              <p>{p.userName}의 clipmoney</p>
              <S.Money>{p.money.toLocaleString()}원</S.Money>
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
                  onClick={chargeMoneyHandler}
                >
                  충전하기
                </Button>
              </S.ChargeBtn>
            </S.MoneyInputContainer>
          )}
        </S.PayMoney>
      ))}
    </S.PayMoneyContainer>
  );
}
