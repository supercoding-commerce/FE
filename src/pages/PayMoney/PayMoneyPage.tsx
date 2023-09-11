import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import TextField from '@/components/common/TextField/TextField';
import * as S from './PayMoneyPage.styles';

type PayMoney = {
  userId: string;
  userName: string;
  money: number;
};

const payMoney: PayMoney[] = [{ userId: '1', userName: '김희진', money: 1000000 }];

export function PayMoneyPage() {
  const [isVisible, setIsVisible] = useState(false);

  const openMoneyInputHandler = () => {
    setIsVisible(!isVisible);
  };

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
        </S.PayMoney>
      ))}
      {isVisible && (
        <S.MoneyInputContainer>
          <TextField labelId="m" label="충전금액">
            <Input
              id="m"
              size="sm"
              required
              isFullWidth
              variant="underline"
              placeholder="충전할 금액을 입력해주세요."
            />
          </TextField>
          <S.ChargeBtn>
            <Button
              variant="main"
              onClick={() => alert('충전완료')}
              size="medium"
              height="40px"
              color="#55FE3A"
              isFullWidth
              isCircle={false}
            >
              충전하기
            </Button>
          </S.ChargeBtn>
        </S.MoneyInputContainer>
      )}
    </S.PayMoneyContainer>
  );
}
