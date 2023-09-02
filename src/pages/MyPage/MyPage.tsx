import { Link } from 'react-router-dom';

import Icon, { IconNameType } from '@/components/common/Icon.tsx';
import { RoutePath } from '@/pages/routes.tsx';
import * as S from './MyPage.styles.tsx';

export function MyPage() {
  const isBuyer = true;
  const mainItemList: MainItem[] = isBuyer ? BUYER_MAIN_ITEMS : SELLER_MAIN_ITEMS;

  const handleClickMyInfo = () => {
    // GYU-TODO: isBuyer 여부에 따라 기능 정의
  };

  return (
    <S.MyPageWrapper>
      <S.UserInfoSection>
        <S.UserInfoContainer>
          <S.Nickname>{isBuyer && '[등급]'} 닉네임</S.Nickname>
          <button onClick={handleClickMyInfo}>{isBuyer ? '내정보' : '스토어 정보'} </button>
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
