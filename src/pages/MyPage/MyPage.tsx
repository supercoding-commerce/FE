import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Button from '@/components/common/Button/Button.tsx';
import Icon, { IconNameType } from '@/components/common/Icon.tsx';
import { localStorageKey } from '@/constants';
import { RoutePath } from '@/pages/routes.tsx';
import { useGetUserInfo } from '@/queries/user/query.ts';
import { userState } from '@/recoil/userState.ts';
import { removeItem } from '@/utils/localstorage.ts';
import * as S from './MyPage.styles.tsx';

export function MyPage() {
  const resetUser = useResetRecoilState(userState);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { data: userInfo } = useGetUserInfo();

  // GYU-TODO: API 요청 후? buyer / seller 에 따른 분기 처리
  const isBuyer = user.role === 'USER';
  const mainItemList: MainItem[] = isBuyer ? BUYER_MAIN_ITEMS : SELLER_MAIN_ITEMS;

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

  if (!userInfo) return null;
  return (
    <S.MyPageWrapper>
      <S.UserInfoSection>
        <S.UserInfoContainer>
          <S.Nickname>
            {isBuyer
              ? `[${userInfo?.grade || 'GREEN'}] ${userInfo?.nickname}`
              : `${userInfo?.shopName}`}
          </S.Nickname>
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
    href: '#',
  },
  {
    icon: 'IconCreditCard',
    label: '페이머니',
    href: '#',
  },
  {
    icon: 'IconDatabase',
    label: '포인트',
    href: '#',
  },
  {
    icon: 'IconTicket',
    label: '쿠폰',
    href: '#',
  },
  {
    icon: 'IconHeart',
    label: '찜목록',
    href: '#',
  },
];
const SELLER_MAIN_ITEMS: MainItem[] = [
  {
    icon: 'IconPaper',
    label: '판매내역',
    href: '#',
  },
  {
    icon: 'IconBox',
    label: '판매중인 상품',
    href: '#',
  },
];
