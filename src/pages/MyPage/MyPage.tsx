import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Button from '@/components/common/Button/Button.tsx';
import Icon, { IconNameType } from '@/components/common/Icon.tsx';
import { localStorageKey } from '@/constants';
import { RoutePath } from '@/pages/routes.tsx';
import { userState } from '@/recoil/userState.ts';
import { removeItem } from '@/utils/localstorage.ts';
import * as S from './MyPage.styles.tsx';

export function MyPage() {
  const resetUser = useResetRecoilState(userState);
  const userInfo = useRecoilValue(userState);

  const navigate = useNavigate();

  // GYU-TODO: API 요청 후? buyer / seller 에 따른 분기 처리
  const isBuyer = true;
  const mainItemList: MainItem[] = userInfo.role === 'USER' ? BUYER_MAIN_ITEMS : SELLER_MAIN_ITEMS;

  const handleClickMyInfo = () => {
    // GYU-TODO: isBuyer 여부에 따라 기능 정의
    // alert(isBuyer ? '구매자' : '판매자');
  };

  const handelSignOut = () => {
    removeItem(localStorageKey.accessToken);
    removeItem(localStorageKey.refreshToken);
    resetUser();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <S.MyPageWrapper>
      <S.UserInfoSection>
        <S.UserInfoContainer>
          <S.Nickname>{isBuyer && '[등급]'} 닉네임</S.Nickname>
          <Button variant="main" size="small" onClick={handleClickMyInfo}>
            {isBuyer ? '내정보' : '스토어 정보'}
          </Button>
        </S.UserInfoContainer>
      </S.UserInfoSection>
      <S.Line />
      <S.MyPageItemList>
        {mainItemList.map((mainItem, index) => (
          <Link to={mainItem.href} key={index}>
            <S.MyPageItemWrapper>
              <S.MyPageItem>
                <S.ItemContainer>
                  <Icon name={mainItem.icon} size={20} /> {mainItem.label}
                </S.ItemContainer>
                <Icon name="IconArrowRight" color="brandActive" />
              </S.MyPageItem>
            </S.MyPageItemWrapper>
          </Link>
        ))}
        <S.MyPageItemWrapper onClick={handelSignOut}>
          <S.MyPageItem>
            <S.ItemContainer>
              <Icon name={'IconSignOut'} size={20} />
              {'로그아웃'}
            </S.ItemContainer>
          </S.MyPageItem>
        </S.MyPageItemWrapper>
      </S.MyPageItemList>
    </S.MyPageWrapper>
  );
}

type MainItem = {
  icon: IconNameType;
  label: string;
  href: RoutePath;
};

const BUYER_MAIN_ITEMS: MainItem[] = [
  {
    icon: 'IconPaper',
    label: '구매내역',
    href: '/mypage/purchase',
  },
  {
    icon: 'IconCreditCard',
    label: '페이머니',
    href: '/mypage/paymoney',
  },
  {
    icon: 'IconDatabase',
    label: '포인트',
    href: '#',
  },
  {
    icon: 'IconTicket',
    label: '쿠폰',
    href: '/mypage/coupon',
  },
  {
    icon: 'IconHeart',
    label: '찜목록',
    href: '/mypage/wish',
  },
];
const SELLER_MAIN_ITEMS: MainItem[] = [
  {
    icon: 'IconPaper',
    label: '판매내역',
    href: '/mypage/sold',
  },
  {
    icon: 'IconBox',
    label: '판매중인 상품',
    href: '#',
  },
];
