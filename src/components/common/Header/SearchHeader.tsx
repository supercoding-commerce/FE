import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from '@/components/common/Header/SearchHeader.styles.tsx';
import Icon from '@/components/common/Icon.tsx';
import { userState } from '@/recoil/userState';

// GYU-TODO: Search Header 보니깐, Category UI 동일하게 있음, 해당 컴포넌트에 넣어도 될듯!
const SearchHeader = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);

  const handleUserInfo = () => {
    if (userInfo.role === '') {
      navigate('/signin');
      return;
    }
    navigate('/mypage');
  };

  const isLogin = userInfo.role !== '';
  return (
    <S.SearchHeaderContainer>
      {/* 로고나오면 로고로 대체 */}
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        Clip
      </h1>
      <S.IconsContainer>
        <Icon
          name="IconSearch"
          onClick={() => {
            navigate('/search');
          }}
        />
        <Icon name="IconUser" onClick={handleUserInfo} style={{ cursor: 'pointer' }} />
        {userInfo.role === 'SELLER' ? (
          <Icon
            name="IconAdd"
            size={24}
            onClick={() => navigate('/new/product')}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <Icon
            name="IconBag"
            onClick={() => navigate(isLogin ? '/mycart' : '/signin')}
            style={{ cursor: 'pointer' }}
          />
        )}
      </S.IconsContainer>
    </S.SearchHeaderContainer>
  );
};

export default SearchHeader;
